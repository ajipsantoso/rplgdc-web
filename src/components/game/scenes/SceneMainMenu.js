import Phaser from 'phaser'
import CONST from '../data/const'
import ScrollingBackGround from '../component/ScrollingBackground';
import LocalDatabase from '../component/LocalDatabase';
import { store } from '@/store'
import sprBtnPlay from '@/assets/assets_game/sprBtnPlay.png';
import sprBtnPlayHover from '@/assets/assets_game/sprBtnPlayHover.png';
import sprBtnPlayDown from '@/assets/assets_game/sprBtnPlayDown.png';
import sprBtnRestart from '@/assets/assets_game/sprBtnRestart.png';
import sprBtnRestartHover from '@/assets/assets_game/sprBtnRestartHover.png';
import sprBtnRestartDown from '@/assets/assets_game/sprBtnRestartDown.png';
import sprBg0 from  '@/assets/assets_game/sprBg0.png';
import sprBg1 from '@/assets/assets_game/sprBg1.png';
import sndBtnOver from '@/assets/assets_game/audio/sndBtnOver.wav';
import sndBtnDown from '@/assets/assets_game/audio/sndBtnDown.wav';
import sndExplode0 from '@/assets/assets_game/audio/sndExplode0.wav';
import sndExplode1 from '@/assets/assets_game/audio/sndExplode1.wav';
import sndLaser from '@/assets/assets_game/audio/sndLaser.wav';
import sndLaser0 from '@/assets/assets_game/audio/sndLaser0.mp3';
import sndLaser0gg from '@/assets/assets_game/audio/sndLaser0.ogg';
import bgm from '@/assets/assets_game/audio/bgm_bit.mp3';
import bgmgg from '@/assets/assets_game/audio/bgm_bit.ogg';

export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super('SceneMainMenu');
  }

  init(){
    window.global.width = this.game.config.width;
    window.global.height = this.game.config.height;
    window.emitter = new Phaser.Events.EventEmitter();
    this.dbLocal = new LocalDatabase();
  }

  preload(){
    // Load assets
    // Preload loading bar Line 19-49
    let assetText = this.make.text({
      x: window.global.width / 2,
      y: (window.global.height / 2 - 70),
      text: '',
      style: {
          font: '18px monospace',
          fill: CONST.colors.white
      }
    })
    .setOrigin(0.5);
    let loadingText = this.make.text({
      x: assetText.x,
      y: assetText.y + 32,
      text: '',
      style: {
          font: '18px monospace',
          fill: CONST.colors.white
      }
    })
    .setOrigin(0.5);
    this.load.on('progress', value => {
      //console.log(`Loading: ${parseInt(value * 100)} %`);
      loadingText.setText(`${parseInt(value * 100)} %`);
    });
    this.load.on('fileprogress', file => {
      assetText.setText('Loading asset: ' + file.key);
    });
    this.load.on('complete', () => {
      assetText.destroy();
      loadingText.destroy();
      store.state.loaded = true;
    });
    // End of loading

    // Load assets
    this.load.image("sprBtnPlay", sprBtnPlay);
    this.load.image("sprBtnPlayHover", sprBtnPlayHover);
    this.load.image("sprBtnPlayDown", sprBtnPlayDown);
    this.load.image("sprBtnRestart", sprBtnRestart);
    this.load.image("sprBtnRestartHover", sprBtnRestartHover);
    this.load.image("sprBtnRestartDown", sprBtnRestartDown);
    this.load.image('sprBg0', sprBg0);
    this.load.image('sprBg1', sprBg1);

    this.load.audio("sndBtnOver", sndBtnOver);
    this.load.audio("sndBtnDown", sndBtnDown);

    this.load.audio("sndExplode0", sndExplode0);
    this.load.audio("sndExplode1", sndExplode1);
    this.load.audio("sndLaser", sndLaser);
    this.load.audio("sndLaser0", [sndLaser0, sndLaser0gg]);
    this.load.audio("bgm", [bgm, bgmgg]);
  }
  onOut(){
    this.btnPlay.setTexture('sprBtnPlay');
  }

  onHover(){
    this.btnPlay.setTexture('sprBtnPlayHover');
    this.sfx.btnOver.play();
  }
  create(){
    //console.log("From SceneMainMenu");
    this.add.text(2, this.game.config.height - 2,
      "Play Control\nMove: [A (Left), D (Right)]\nShoot: [Space]\n" + window.global.signature)
      .setOrigin(0, 1);

    let localScore = this.dbLocal.getData('localScore');
    if (localScore){
      this.add.text(window.global.width/2, 235, localScore, {
        fontFamily: 'monospace',
        fontSize: CONST.fonts.big,
        fontStyle: 'bold',
        color: CONST.colors.white,
        align: 'center'
      }).setOrigin(0.5);
    }
    
    if (window.global.bgmInstance === undefined){
      this.bgm = this.sound.add("bgm", {loop: true, volume: 0.5});
      this.bgm.play();
      window.global.bgmInstance = this.bgm;
      //console.log("Play BGM");
    }

    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown')
    };
    this.btnPlay = this.add.sprite(
      window.global.width / 2,
      (window.global.height / 2) + 100,
      'sprBtnPlay'
    );
    this.btnPlay.setInteractive();
    this.btnPlay.on('pointerover', this.onHover.bind(this));
    this.btnPlay.on('pointerout', this.onOut.bind(this));
    this.btnPlay.on('pointerdown', this.onClick.bind(this));
    this.btnPlay.on('pointerup', () => {
      this.btnPlay.setTexture('sprBtnPlayHover');
    });
    this.title = this.add.text(window.global.width * 0.5, 128, "SPACESHOOTER", {
      fontFamily: 'monospace',
      fontSize: CONST.fonts.title,
      fontStyle: 'bold',
      color: CONST.colors.white,
      align: 'center'
    });
    this.title.setOrigin(0.5);

    this.backgrounds = [];
    for (let i = 0; i < 5; i++) {
      let keys = ["sprBg0", "sprBg1"];
      let key = keys[Phaser.Math.RND.between(0, keys.length - 1)];
      let bg = new ScrollingBackGround(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }

  onClick(){
    if (store.state.play){
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnDown.play();
      this.time.addEvent({
        delay: 90,
        callback: () => {
          // console.log("PLAY");
          this.scene.start('SceneMain');
        },
        loop: false
      });
    } else {
      alert('Please input your NIM and press [ENTER]');
    }
  }



  update(){
    for (let i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i].update();
    }
  } // End of update

} // End of class
