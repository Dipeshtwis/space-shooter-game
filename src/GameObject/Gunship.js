import Entity from "./Entities";

class GunShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "sprEnemy0", "GunShip");
    this.play("sprEnemy0");
    this.body.velocity.y = Phaser.Math.Between(50, 100);
  }
}

export default GunShip;