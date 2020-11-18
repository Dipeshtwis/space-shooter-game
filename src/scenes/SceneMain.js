import {Entity, Player} from '../GameObject/Entities';

export class SceneMain extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMain" });
  }
  preload() {
  	this.load.image("sprBg0", "content/sprBg0.png");
  	this.load.image("sprBg1", "content/sprBg1.png");
	this.load.spritesheet("sprExplosion", "content/sprExplosion.png", {
	  frameWidth: 32,
	  frameHeight: 32
	});
	this.load.spritesheet("sprEnemy0", "content/sprEnemy0.png", {
	  frameWidth: 16,
	  frameHeight: 16
	});
	this.load.image("sprEnemy1", "content/sprEnemy1.png");
	this.load.spritesheet("sprEnemy2", "content/sprEnemy2.png", {
	  frameWidth: 16,
	  frameHeight: 16
	});
	this.load.image("sprLaserEnemy0", "content/sprLaserEnemy0.png");
	this.load.image("sprLaserPlayer", "content/sprLaserPlayer.png");
	this.load.spritesheet("sprPlayer", "content/sprPlayer.png", {
	  frameWidth: 16,
	  frameHeight: 16
	});
	this.load.audio("sndExplode0", "content/sndExplode0.wav");
	this.load.audio("sndExplode1", "content/sndExplode1.wav");
	this.load.audio("sndLaser", "content/sndLaser.wav");
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
  }

  update(){
  	this.player.update();

	if (this.keyW.isDown) {
	  this.player.moveUp();
	}
	else if (this.keyS.isDown) {
	  this.player.moveDown();
	}

	if (this.keyA.isDown) {
	  this.player.moveLeft();
	}
	else if (this.keyD.isDown) {
	  this.player.moveRight();
	}
  }
}