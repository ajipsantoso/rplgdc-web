import CONST from '../data/const';
import Entity from './Entity';

export default class Enemy extends Entity {
  constructor(scene, x, y, key, type) {
    super(scene, x, y, key, type);
    this.setSpeed(Phaser.Math.RND.between(50, 100));
    this.setHP(1); // Default value
    this.states = {
      MOVE_DOWN: "MOVE_DOWN",
      CHASE: "CHASE"
    };
  }

  setSpeed(value){
    this.body.setVelocityY(value);
  }

  setSpeedXY(x, y){
    this.body.setVelocity(x, y);
  }

  damageEffect(){
    this.setTint(CONST.hexColors.red);
    this.scene.time.addEvent({
      delay: 120,
      callback: () => {
        this.setTint(CONST.hexColors.white);
      },
      loop: false
    });
  }

  damaged(value){
    if (!this.isDead()){
      let currHP = this.remainHP();
      // this.setTint(CONST.hexColors.red);
      this.damageEffect();
      value = value === undefined ? 1 : value;
      this.setHP(currHP-value);
      if (this.remainHP() <= 0){
        this.scene.scoreAdd(3);
        this.explode(true);
        this.setHP(0);
        this.setData('isDead', true);
      }
    }
  }

  remainHP(){
    return this.getData('health');
  }

  setHP(value){
    this.setData('health', value);
  }

}
