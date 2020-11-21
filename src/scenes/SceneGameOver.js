import Phaser from 'phaser';

import ScrollingBackground from '../Layout/ScrollingBackground';
import { sendScore } from '../util/APIScore';

class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
    this.gameScore = 0;
    this.myScore = 0;
    this.savedScore = 0;
  }

  create() {
     this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
    };

    this.title = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.gameScore = localStorage.getItem('gameScore');
    this.myScore = parseInt(this.gameScore, 10);
    this.highScore = localStorage.getItem('highScore');
    this.savedScore = parseInt(this.highScore, 10);
    this.playerName = localStorage.getItem('playerName');

    this.textScore = this.add.text(
      100,
      200,
      `Your Score: ${this.gameScore}`,
      {
        fontFamily: 'monospace',
        fontSize: 30,
        color: '#fff',
      },
    );

    this.highScor = this.add.text(
      10,
      370,
      ' ',
      {
        fontFamily: 'monospace',
        fontSize: 24,
        color: 'green',
        align: 'center',
      },
    );

    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprBtnRestart',
    );
    this.btnRestart.setInteractive();

    this.btnRestart.on('pointerover', () => {
      this.btnRestart.setTexture('sprBtnRestartHover');
      this.sfx.btnOver.play();
    }, this);

    this.btnRestart.on('pointerout', () => {
      this.btnRestart.setTexture('sprBtnRestart');
    });

    this.btnRestart.on('pointerdown', () => {
      this.btnRestart.setTexture('sprBtnRestartDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnRestart.on('pointerup', () => {
      this.btnRestart.setTexture('sprBtnRestart');
      this.scene.start('SceneMain');
    }, this);

    this.checkForHighScore();
    sendScore(this.playerName, this.gameScore);

    this.mainMenuButton = this.add.sprite(220, 600, 'secButton').setInteractive();

    this.gameText = this.add.text(0, 0, 'Go to Main Menu', { fontSize: '22px', fill: '#fff' });
    this.centerButtonText(this.gameText, this.mainMenuButton);

    this.mainMenuButton.on('pointerover', () => {
      this.sfx.btnOver.play();
    }, this);

    this.mainMenuButton.on('pointerdown', () => {
      this.scene.start('SceneMainMenu');
    });

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }

  checkForHighScore() {
    if (this.myScore > this.savedScore) {
      this.highScor.setText('CONGRATS ON NEW HIGH SCORE!! 😄');
    }
    else {
      this.highScor.setText('Nice Play but not a high score. 😔');
    }
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(this.game.config.width / 2, this.game.config.height / 2 - offset * 100,
        this.game.config.width, this.game.config.height),
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton,
    );
  }
}

export default SceneGameOver;