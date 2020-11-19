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
import GunShip from "../GameObject/Gunship";
import CarrierShip from "../GameObject/Carriership";
import ChaserShip from "../GameObject/Chasership";

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

  this.enemies = this.add.group();
  this.enemyLasers = this.add.group();
  this.playerLasers = this.add.group();

  this.time.addEvent({
  delay: 1200,
  callback: function() {
    var enemy = null;

    if (Phaser.Math.Between(0, 10) >= 3) {
      enemy = new GunShip(
        this,
        Phaser.Math.Between(0, this.game.config.width),
        0
      );
    }
    else if (Phaser.Math.Between(0, 10) >= 5) {
      if (this.getEnemiesByType("ChaserShip").length < 4) {

        enemy = new ChaserShip(
          this,
          Phaser.Math.Between(0, this.game.config.width),
          0
        );
      }
    }
    else {
      enemy = new CarrierShip(
        this,
        Phaser.Math.Between(0, this.game.config.width),
        0
      );
    }

    if (enemy !== null) {
      enemy.setScale(Phaser.Math.Between(10, 20) * 0.1);
      this.enemies.add(enemy);
    }
  },
  callbackScope: this,
  loop: true
});

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
    if (this.keySpace.isDown) {
    this.player.setData("isShooting", true);
    }
    else {
      this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
      this.player.setData("isShooting", false);
    }

    for (let i = 0; i < this.enemies.getChildren().length; i++) {
        var enemy = this.enemies.getChildren()[i];

        enemy.update();

      if (enemy.x < -enemy.displayWidth ||
        enemy.x > this.game.config.width + enemy.displayWidth ||
        enemy.y < -enemy.displayHeight * 4 ||
        enemy.y > this.game.config.height + enemy.displayHeight) {

        if (enemy) {
          if (enemy.onDestroy !== undefined) {
            enemy.onDestroy();
          }

          enemy.destroy();
        }
      }
    }

    for (var i = 0; i < this.enemyLasers.getChildren().length; i++) {
        var laser = this.enemyLasers.getChildren()[i];
        laser.update();

        if (laser.x < -laser.displayWidth ||
          laser.x > this.game.config.width + laser.displayWidth ||
          laser.y < -laser.displayHeight * 4 ||
          laser.y > this.game.config.height + laser.displayHeight) {
          if (laser) {
            laser.destroy();
          }
        }
      }

    for (var i = 0; i < this.playerLasers.getChildren().length; i++) {
      var laser = this.playerLasers.getChildren()[i];
      laser.update();

      if (laser.x < -laser.displayWidth ||
        laser.x > this.game.config.width + laser.displayWidth ||
        laser.y < -laser.displayHeight * 4 ||
        laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }
  }

  getEnemiesByType(type) {
    var arr = [];
    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i];
      if (enemy.getData("type") == type) {
        arr.push(enemy);
      }
    }
    return arr;
  }
}

export default SceneMain;