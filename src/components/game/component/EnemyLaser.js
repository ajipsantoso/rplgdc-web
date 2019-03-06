import Entity from './Entity';

export default class EnemyLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "sprLaserENew");
    this.body.setVelocityY(220);
  }
}
