import Entity from './Entity';

export default class PlayerLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "sprLaserPNew");
    this.body.setVelocityY(-200);
  }
}
