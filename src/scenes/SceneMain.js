class SceneMain extends Phaser.Scene {
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
    
  }
}