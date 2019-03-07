import Phaser from 'phaser'
import { store } from '@/store'
import CONST from '../data/const';
import Player from '../component/Player';
import ChaserShip from '../component/ChaserShip';
import GunShip from '../component/GunShip';
import CarrierShip from '../component/CarrierShip';
import ScrollingBackGround from '../component/ScrollingBackground';
import rplrocket from '@/assets/assets_game/rplrocket.png';
import gunship from '@/assets/assets_game/gunship.png';
import carriership from '@/assets/assets_game/carriership.png';
import gunship2 from '@/assets/assets_game/gunship2.png';
import sprExplosion from '@/assets/assets_game/sprExplosion.png';
import sprEnemy0 from '@/assets/assets_game/sprEnemy0.png';
import sprEnemy1 from '@/assets/assets_game/sprEnemy1.png';
import sprEnemy2 from '@/assets/assets_game/sprEnemy2.png';
import sprLaserEnemy0 from '@/assets/assets_game/sprLaserEnemy0.png';
import sprLaserPlayer from '@/assets/assets_game/sprLaserPlayer.png';
import sprLaserENew from '@/assets/assets_game/sprLaserEnemyn.png'
import sprLaserPNew from '@/assets/assets_game/sprLaserPlayern.png'
import sprPlayer from '@/assets/assets_game/sprPlayer.png';

export default class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }

  preload(){
    // Load images
    this.load.spritesheet('rplrocket', rplrocket, {
      frameWidth: 35,
      frameHeight: 56
    });
    this.load.spritesheet('gunship', gunship, {
      frameWidth: 39,
      frameHeight: 33
    });
    this.load.spritesheet('carriership', carriership, {
      frameWidth: 40,
      frameHeight: 50
    });
    this.load.spritesheet('gunship2', gunship2, {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet("sprExplosion", sprExplosion, {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet("sprEnemy0", sprEnemy0, {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.image("sprEnemy1", sprEnemy1);
    this.load.spritesheet("sprEnemy2", sprEnemy2, {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.image("sprLaserEnemy0", sprLaserEnemy0);
    this.load.image("sprLaserPlayer", sprLaserPlayer);
    this.load.image("sprLaserENew", sprLaserENew);
    this.load.image("sprLaserPNew", sprLaserPNew);
    this.load.spritesheet("sprPlayer", sprPlayer, {
      frameWidth: 16,
      frameHeight: 16
    });
  }

  create(){
    // TODO: ADD TINT IF DAMAGED
    // Define our objects
    //console.log("From SceneMain");
    // this.add.text(window.global.width/2, this.game.config.height - 110, "Title", {fontSize: CONST.fonts.title});
    // this.add.text(window.global.width/2, this.game.config.height - 75, "Normal", {fontSize: CONST.fonts.normal});
    // this.add.text(window.global.width/2, this.game.config.height - 50, "Small", {fontSize: CONST.fonts.small});
    // this.add.text(window.global.width/2, this.game.config.height - 25, "Tiny", {fontSize: CONST.fonts.tiny});

    this.anims.create({
      key: 'rplrocket',
      frames: this.anims.generateFrameNumbers('rplrocket'),
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: 'gunship',
      frames: this.anims.generateFrameNumbers('gunship'),
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: 'carriership',
      frames: this.anims.generateFrameNumbers('carriership'),
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: 'gunship2',
      frames: this.anims.generateFrameNumbers('gunship2'),
      frameRate: 12,
      repeat: -1
    });

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

    // Setting sound that can be called dynamic with index
    this.sfx = {
      explosions: [
        this.sound.add("sndExplode0"),
        this.sound.add("sndExplode1")
      ],
      laser: [
        this.sound.add("sndLaser", {volume: 0.5}),
        this.sound.add("sndLaser0", {volume: 0.5})
      ]
    };
    // this.sfx.laser.play();

    this.backgrounds = [];
    for (let i = 0; i < 5; i++) { // creat five scrolling backgrounds
      let keys = ["sprBg0", "sprBg1"];
      let key = keys[Phaser.Math.RND.between(0, keys.length - 1)];
      let bg = new ScrollingBackGround(this, key, i * 10);
      this.backgrounds.push(bg);
    }

    this.player = new Player(
      this,
      window.global.width/2,
      window.global.height - 64,
      'rplrocket'
    );
    this.player.play('rplrocket', true); // Play animation
    this.player.body.setSize(
      this.player.displayWidth * 0.5,
      this.player.displayHeight * 0.8
    );

    // this.eChaser = new ChaserShip(
    //   this,
    //   window.global.width/2,
    //   50
    // );
    // console.log("objType: " + this.eChaser.getData('type'));
    // this.eChaser.damaged(10);
    // console.log("HP: " + this.eChaser.remainHP());
    //
    // this.eGunShip = new GunShip(
    //   this,
    //   window.global.width/2 - 100,
    //   50
    // );
    // console.log("objType: " + this.eGunShip.getData('type'));
    // console.log("HP: " + this.eGunShip.remainHP());
    //
    //
    // this.eCarrierShip = new CarrierShip(
    //   this,
    //   window.global.width/2 + 100,
    //   50
    // );
    // console.log("objType: " + this.eCarrierShip.getData('type'));
    // this.eCarrierShip.setHP(5);
    // console.log("HP: " + this.eCarrierShip.remainHP());

    // Define Player control
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    // Define Group of GameObjects
    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();


    this.physics.add.collider(this.playerLasers, this.enemies, (pLaser, enemy) => {
      if (enemy){
        pLaser.destroy();
        if (this.isEnemyType(enemy, "ChaserShip") || this.isEnemyType(enemy, "CarrierShip")){
          enemy.damaged();
          // console.log("Hayolo: " + enemy.getData('type'));
        }
        else {
          this.scoreAdd();
          enemy.explode(true);
        }
      }
    });

    this.physics.add.overlap(this.player, this.enemies, (player, enemy) => {
      // console.log("Player and Enemy collided!");
      if (!player.isDead() && !enemy.isDead()){
        player.onDestroy();
        player.explode(false);
        player.setData('isDead', true);
        enemy.explode(true);
      }
    });

    this.physics.add.overlap(this.player, this.enemyLasers, (player, eLaser) => {
      if (!player.isDead()){
        player.onDestroy();
        player.explode(false);
        eLaser.destroy();
      }
    });

    this.time.addEvent({
      delay: Phaser.Math.RND.between(800, 1000),
      callback: this.createEnemy.bind(this),
      loop: true
    });

    this.scoreText = this.add.text(16, 16, "0", {
      fontFamily: 'monospace',
      fontSize: CONST.fonts.big,
      fontStyle: 'bold',
      color: CONST.colors.white,
      align: 'left',
      stroke: CONST.colors.purple,
			strokeThickness: 2
    });
    this.scoreText.setDepth(10);
    this.scoreReset();

  } // End of create

  createEnemy(){
    let enemy = null;
    let randomPosX = Phaser.Math.RND.between(0, window.global.height);
    let threshold = (this.getEnemiesByPosX(380).length >= 3);
    if (threshold){
      randomPosX = Phaser.Math.RND.between(10, window.global.height * 0.5);
      //console.log(`Recallibrate enemy posX to: ${randomPosX}`);
    }
    if (Phaser.Math.RND.between(0, 10) >= 3) {
      enemy = new GunShip(
        this,
        randomPosX,
        0
      );
    }
    else if (Phaser.Math.RND.between(0, 10) >= 5) {
      if (this.getEnemiesByType('ChaserShip').length < 5){
        enemy = new ChaserShip(
          this,
          randomPosX,
          0
        );
        enemy.setHP(2);
        enemy.body.setImmovable();
      } // End of getEnemiesByType
    }
    else {
      enemy = new CarrierShip(
        this,
        randomPosX,
        0
      );
      enemy.setHP(3);
      enemy.setSpeed(Phaser.Math.RND.between(100,180));
      enemy.body.setImmovable();
    }
    if (enemy !== null){
      //console.log(`Random pos x: ${randomPosX}, enemyType: ${enemy.getData('type')}`);
      let isChoosen = this.isEnemyType(enemy, 'ChaserShip');
      let scaleRand = isChoosen ? Phaser.Math.RND.between(10, 20) * 0.1 : 1;
      enemy.setScale(scaleRand);
      this.enemies.add(enemy);
    }
  }

  getEnemiesByPosX(posX){
    let pickedEnemies = [];
    this.enemies.children.iterate( enemy => {
      //console.log(`iterate enemy: ${enemy.x}`);
      if (enemy.x > posX){
        pickedEnemies.push(enemy);
      }
    });
    return pickedEnemies;
  }

  getEnemiesByType(type){
    let enemiesWithType = [];
    for (let i = 0; i < this.enemies.getChildren().length; i++) {
      let enemy = this.enemies.getChildren()[i];
      if (this.isEnemyType(enemy, type)){
        enemiesWithType.push(enemy);
      }
    }
    return enemiesWithType;
  }

  isEnemyType(enemy, type){
    let isType = false;
    if (enemy.getData('type') == type){
      isType = true;
    }
    return isType;
  }

  scoreAdd(value = 1){
    window.global.score += value;
    store.state.score += value;
    this.scoreText.setText(window.global.score);
    this.tweens.add({
      targets: this.scoreText,
      scaleX: 1.3,
      scaleY: 1.3,
      yoyo: true,
      duration: 60,
      repeat: 0,
      onComplete: () => {
        this.scoreText.scaleX = 1;
        this.scoreText.scaleY = this.scoreText.scaleX;
      }
    });
  }

  scoreReset(){
    window.global.score = 0;
    store.state.score = 0;
    this.scoreText.setText(window.global.score);
  }

  update(){
    this.player.update();
    if (!this.player.isDead()){
      // Player control
      if (this.keyA.isDown || this.cursors.left.isDown){
        this.player.moveLeft();
      }
      else if (this.keyD.isDown || this.cursors.right.isDown){
        this.player.moveRight();
      }
      // if (this.keyW.isDown){
      //   this.player.moveUp();
      // }
      // else if (this.keyS.isDown){
      //   this.player.moveDown();
      // }
      // Player shoot
      if (this.keySpace.isDown && !this.player.isDead()) {
        this.player.setData("isShooting", true);
      }
      else {
        this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
        this.player.setData("isShooting", false);
      }
    } // End of not isDead

    for (let i = 0; i < this.enemies.getChildren().length; i++) {
      let enemy = this.enemies.getChildren()[i];
      enemy.update();
      if (enemy.y < -enemy.displayHeight * 4 ||
        enemy.y > window.global.height + enemy.displayHeight){
        this.enemies.remove(enemy);
        if (enemy.onDestroy !== undefined){
          enemy.onDestroy();
        }
        else {
          enemy.destroy();
        }
      }
    } // End of looping enemies group

    for (let i = 0; i < this.enemyLasers.getChildren().length; i++) {
      let laser = this.enemyLasers.getChildren()[i];
      if (laser.y > window.global.height){
        this.enemyLasers.remove(laser);
        laser.destroy();
      }
    } // End of looping enemyLasers group

    for (let i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i].update();
    }

  } // End of update

}
