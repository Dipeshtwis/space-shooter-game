import Phaser from 'phaser';

import sprBg0 from '../content/sprBg0.png';
import sprBg1 from '../content/sprBg1.png';
import sprBtnPlay from '../content/sprBtnPlay.png';
import sprBtnPlayHover from '../content/sprBtnPlayHover.png';
import sprBtnPlayDown from '../content/sprBtnPlayDown.png';
import sprEnemy0 from '../content/sprEnemy0.png';
import sprEnemy1 from '../content/sprEnemy1.png';
import sprLaserEnemy0 from '../content/sprLaserEnemy0.png';
import sprLaserPlayer from '../content/sprLaserPlayer.png';
import sprPlayer from '../content/sprPlayer.png';
import sprExplosion from '../content/sprExplosion.png';
import sprEnemy2 from '../content/sprEnemy2.png';

import sndBtnOver from '../content/sndBtnOver.wav';
import sndBtnDown from '../content/sndBtnDown.wav';
import sndExplode0 from '../content/sndExplode0.wav';
import sndExplode1 from '../content/sndExplode0.wav';
import sndLaser from '../content/sndLaser.wav';
import gameMusic from '../content/gameMusic.mp3';


export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreLoad' });
  }

  preload() {
    this.add.image(400, 200, 'logo');
    const { width, height } = this.cameras.main;
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(width / 2 - 160, 224, 320, 50);

    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(width / 2 - 150, 234, 300 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', function (){
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    }.bind(this));

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    this.load.image('sprBg0', sprBg0);
    this.load.image('sprBg1', sprBg1);
    this.load.image('sprEnemy1', sprEnemy1);
    this.load.image('sprLaserEnemy0', sprLaserEnemy0);
    this.load.image('sprLaserPlayer', sprLaserPlayer);
    this.load.image('sprBtnPlay', sprBtnPlay);
    this.load.image('sprBtnPlayHover', sprBtnPlayHover);
    this.load.image('sprBtnPlayDown', sprBtnPlayDown);

    this.load.audio('sndBtnOver', sndBtnOver);
    this.load.audio('sndBtnDown', sndBtnDown);

    this.load.spritesheet('sprExplosion', sprExplosion, {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('sprEnemy0', sprEnemy0, {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('sprEnemy2', sprEnemy2, {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('sprPlayer', sprPlayer, {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.audio('sndExplode0', sndExplode0);
    this.load.audio('sndExplode1', sndExplode1);
    this.load.audio('sndLaser', sndLaser);
    this.load.audio('gameMusic', gameMusic);
  }

  create() {
    this.scene.start('SceneMainMenu');
  }

  init () {
  this.readyCount = 0;
  }
 
  ready () {
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}