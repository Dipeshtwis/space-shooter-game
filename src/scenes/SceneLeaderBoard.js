import Phaser from 'phaser';
import { getScores } from '../util/APIScore';

class SceneLeaderBoard extends Phaser.Scene {
  constructor() {
    super('SceneLeaderBoard');
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'LEADERBOARD', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
    });
    this.title.setOrigin(0.5);

    this.score1 = this.add.text(100, 200, '', {
      fontFamily: 'monospace',
      fontSize: 30,
      color: '#FFD700',
      align: 'center',
    });

    this.score2 = this.add.text(100, 250, '', {
      fontFamily: 'monospace',
      fontSize: 30,
      color: '#C0C0C0',
      align: 'center',
    });

    this.score3 = this.add.text(100, 300, '', {
      fontFamily: 'monospace',
      fontSize: 30,
      color: '#cd7f32',
      align: 'center',
    });

    this.score4 = this.add.text(100, 350, '', {
      fontFamily: 'monospace',
      fontSize: 30,
      color: 'white',
      align: 'center',
    });

    this.score5 = this.add.text(100, 400, '', {
      fontFamily: 'monospace',
      fontSize: 30,
      color: 'white',
      align: 'center',
    });

    this.gameButton = this.add.sprite(220, 600, 'secButton').setInteractive();

    this.gameText = this.add.text(0, 0, 'Back', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.gameText, this.gameButton);

    this.gameButton.on('pointerdown', () => {
      this.scene.start('SceneMainMenu');
    });

    this.topScore();
  }

  async topScore() {
    const resultObject = await getScores();

    if (Array.isArray(resultObject.result)) {
      this.scores = resultObject.result.sort((a, b) => ((a.score > b.score) ? -1 : 1));
      this.score1.setText(`${1.}  ${this.scores[0].user} ➡️ ${this.scores[0].score}`);
      this.score2.setText(`${2.}  ${this.scores[1].user} ➡️ ${this.scores[1].score}`);
      this.score3.setText(`${3.}  ${this.scores[2].user} ➡️ ${this.scores[2].score}`);
      this.score4.setText(`${4.}  ${this.scores[3].user} ➡️ ${this.scores[3].score}`);
      this.score5.setText(`${5.}  ${this.scores[4].user} ➡️ ${this.scores[4].score}`);
    } else {
      this.score1.setText(resultObject);
    }
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width / 2,
        config.height / 2 - offset * 100,
        config.width, config.height),
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

export default SceneLeaderBoard;