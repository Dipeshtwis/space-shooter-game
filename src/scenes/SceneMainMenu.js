import Phaser from 'phaser';

import ScrollingBackground from '../Layout/ScrollingBackground';

class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneMainMenu' });
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    this.btnPlay = this.add.sprite(
      230,
      this.game.config.height * 0.5,
      'sprBtnPlay',
    );

    this.btnPlay.setInteractive();

    this.btnPlay.on('pointerover', () => {
      this.btnPlay.setTexture('sprBtnPlayHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnPlay.on('pointerout', () => {
      this.btnPlay.setTexture('sprBtnPlay');
    });

    this.btnPlay.on('pointerdown', () => {
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnPlay.on('pointerup', () => {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('SceneInput');
    }, this);

    this.title = this.add.text(this.game.config.width * 0.5, 128, 'SPACE SHOOTER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    this.title.setOrigin(0.5);

    this.LeaderboardButton = this.add.sprite(230, 500, 'secButton').setInteractive();

    this.gameText = this.add.text(0, 0, 'Leaderboard', { fontSize: '25px', fill: '#fff' });
    this.centerButtonText(this.gameText, this.LeaderboardButton);

    this.LeaderboardButton.on('pointerover', () => {
      this.sfx.btnOver.play();
    }, this);

    this.LeaderboardButton.on('pointerdown', () => {
      this.scene.start('SceneLeaderBoard');
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

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(this.game.config.width / 2, this.game.config.height / 2 - offset * 100,
        this.game.config.width, this.game.config.height),
    );
  }

  // eslint-disable-next-line class-methods-use-this
  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton,
    );
  }
}

export default SceneMainMenu;