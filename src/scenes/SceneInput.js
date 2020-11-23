import Phaser from 'phaser';

class SceneInput extends Phaser.Scene {
  constructor() {
    super('SceneInput');
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'SPACE SHOOTER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
    });
    this.title.setOrigin(0.5);

    this.input = this.add.dom(200, 235, 'input', {
      type: 'text',
      name: 'name',
      fontSize: '30px',
      backgroundColor: '#fff',
    });

    this.gameButton = this.add.sprite(220, 390, 'secButton').setInteractive();

    const nameInput = document.createElement('input');
    nameInput.placeholder = 'Player name';
    nameInput.type = 'text';
    nameInput.id = 'username';
    nameInput.className = 'username';

    document.querySelector('#game').appendChild(nameInput);

    this.title1 = this.add.text(40, 540,
      'Make high score and beat other player', {
        fontFamily: 'monospace',
        fontSize: 18,
        fontStyle: 'bold',
        color: '#eff',
      });

    this.alertMsg = this.add.text(35, 40,
      '', {
        fontFamily: 'monospace',
        fontSize: 22,
        fontStyle: 'bold',
        color: 'red',
      });

    this.gameText = this.add.text(0, 0, 'Start', {
      width: '50px', height: '50px', fontSize: '32px', fill: '#fff',
    });
    this.centerButtonText(this.gameText, this.gameButton);

    this.gameButton.on('pointerdown', () => {
      if (nameInput.value !== '') {
        localStorage.setItem('playerName', nameInput.value);
        nameInput.style.display = 'none';
        this.scene.start('SceneMain');
      } else {
        this.alertMsg.setText('Be real not a ghost. Enter name');
      }
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('secButton');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('secButton');
    });
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

export default SceneInput;