import sprBg0 from "../content/sprBg0.png";
import sprBg1 from "../content/sprBg1.png";
import sprEnemy0 from "../content/sprEnemy0.png";
import sprEnemy1 from "../content/sprEnemy1.png";
import sprLaserEnemy0 from "../content/sprLaserEnemy0.png";
import sprLaserPlayer from "../content/sprLaserPlayer.png";
import sprPlayer from "../content/sprPlayer.png";
import sprExplosion from "../content/sprExplosion.png";

import sprEnemy2 from "../content/sprEnemy2.png";

import sndExplode0 from "../content/sndExplode0.wav";
import sndExplode1 from "../content/sndExplode0.wav";
import sndLaser from "../content/sndLaser.wav";

import Player from "../GameObject/Player";

class SceneMain extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMain" });
  }
  preload() {
	this.load.image("sprBg0", sprBg0);
    this.load.image("sprBg1", sprBg1);
    this.load.image("sprEnemy1", sprEnemy1);
    this.load.image("sprLaserEnemy0", sprLaserEnemy0);
    this.load.image("sprLaserPlayer", sprLaserPlayer);

    this.load.spritesheet("sprExplosion", sprExplosion, {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet("sprEnemy0", sprEnemy0, {
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.spritesheet("sprEnemy2", sprEnemy2, {
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.spritesheet("sprPlayer", sprPlayer, {
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.audio("sndExplode0", sndExplode0);
    this.load.audio("sndExplode1", sndExplode1);
    this.load.audio("sndLaser", sndLaser);
  }

  create() {
    this.anims.create({
      key: "sprEnemy0",
      frames: this.anims.generateFrameNumbers("sprEnemy0"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "sprEnemy2",
      frames: this.anims.generateFrameNumbers("sprEnemy2"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "sprExplosion",
      frames: this.anims.generateFrameNumbers("sprExplosion"),
      frameRate: 20,
      repeat: 0
    });

    this.anims.create({
      key: "sprPlayer",
      frames: this.anims.generateFrameNumbers("sprPlayer"),
      frameRate: 20,
      repeat: -1
    });

    this.sfx = {
	  explosions: [
	    this.sound.add("sndExplode0"),
	    this.sound.add("sndExplode1")
	  ],
	  laser: this.sound.add("sndLaser")
	};

	this.player = new Player(
	  this,
	  this.game.config.width * 0.5,
	  this.game.config.height * 0.5,
	  "sprPlayer"
	);

  this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  this.keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
  this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

  }

  update(){
  	this.player.update();

	if (this.keyW.isDown) {
	  this.player.moveUp();
	}
	else if (this.keyS.isDown) {
	  this.player.moveDown();
	}
  else if(this.keyB.isDown){
    this.player.BoostUp();
  }

	if (this.keyA.isDown) {
	  this.player.moveLeft();
	}
	else if (this.keyD.isDown) {
	  this.player.moveRight();
	}
  }
}

export default SceneMain;