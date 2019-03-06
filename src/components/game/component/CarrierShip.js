import Enemy from './Enemy';

export default class CarrierShip extends Enemy {
  constructor(scene, x, y) {
    super(scene, x, y, "carriership", "CarrierShip");
    if (this.x < this.displayWidth){
      this.x = this.displayWidth;
    }
    else if (this.x > (window.global.width - this.displayWidth)) {
      this.x = window.global.width - this.displayWidth;
    }
    this.play("carriership");
    // console.log("CarrierShip Created");
  }

  // remainHP(){
  //   console.log("Override!");
  //   let add = super.remainHP() + 1;
  //   return add;
  // }
}
