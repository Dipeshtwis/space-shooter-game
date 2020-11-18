import Entity from './Entities';

class Player extends Entity {
	constructor(scene, x, y, key){
		super(scene, x, y, key, "player");
		this.setData("speed", 200);
		this.setData("speedBoost", 300);
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
      this.body.velocity.x = this.getData("speed");
	}

	BoostUp() {
      this.body.velocity.y = -this.getData("speedBoost");
	}

	update(){
		this.body.setVelocity(0, 0);

		this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
		this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);
	}
}

export default Player;