import Phaser from 'phaser'

export default class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, type) {
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    // Creates an Arcade Physics Body on a single Game Object.
    this.scene.physics.world.enableBody(this, 0);
    // Allows you to store a key value pair within this Game Objects Data Manager.
    this.setData({
      'type': type,
      'isDead': false
    });

  }

  isDead(){
    return this.getData('isDead');
  }

  explode(canDestroy){
    if (!this.getData('isDead')){
      // Set the texture to the explosion image, then play the animation
      this.setTexture('sprExplosion');
      this.play('sprExplosion');
      this.setData('isDead', true);
      this.body.setEnable(false); // change body to disable
      // pick a random explosion sound within the array we defined in this.sfx in SceneMain
      this.scene.sfx.explosions[Phaser.Math.Between(0, 1)].play();
      if (this.shootTimer !== undefined){
        if (this.shootTimer){
          this.shootTimer.remove(false);
          this.shootTimer.destroy();
        }
      }

      this.setAngle(0);
      this.body.setVelocity(0, 0);

      this.on('animationcomplete', () => {
        if (canDestroy){
          this.destroy();
        }
        else {
          this.setVisible(false);
        }
      });
    } // End of isDead
  } // End of explode
}
