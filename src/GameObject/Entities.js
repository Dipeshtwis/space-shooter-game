export class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, type) {
    super(scene, x, y, key);
    this.scene = scene;
	this.scene.add.existing(this);
	this.scene.physics.world.enableBody(this, 0);
	this.setData("type", type);
	this.setData("isDead", false);
  }
}

export class Player extends Entity {
	constructor(scene, x, y, key){
		super(scene, x, y, key, "player");
		this.setData("speed", 200);
		this.play("sprPlayer");
	}
	moveUp() {
      this.body.velocity.y = -this.getData("speed");
	}

	moveDown() {
      this.body.velocity.y = this.getData("speed");
	}

	moveLeft() {
      this.body.velocity.x = -this.getData("speed");
	}

	moveRight() {
      this.body.velocity.x = -this.getData("speed");
	}

	update(){
		this.body.setVelocity(0, 0);

		this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
		this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);
	}
}