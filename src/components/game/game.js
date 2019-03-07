// import Phaser from 'phaser'
// import SceneMain from './scenes/SceneMain';
// import SceneMainMenu from './scenes/SceneMainMenu';
// import SceneGameOver from './scenes/SceneGameOver';

// let scenes = [];
// let seedRand = Date.now();
// scenes.push(SceneMainMenu);
// scenes.push(SceneMain);
// scenes.push(SceneGameOver);

// let config = {
//     type: Phaser.AUTO,
//     parent: 'game-container',
//     width: 480,
//     height: 640,
//     backgroundColor: 'black',
//     pixelArt: true,
//     seed: [seedRand],
//     physics: {
//       default: 'arcade',
//       arcade: {
//         gravity: {x: 0, y: 0},
//         debug: false,
//       }
//     },
//     scene: scenes,
// };
// window.global = {
//   signature: '@RPLGDC2019 | Arsyel - Witsqa - Helmi',
//   score: 0
// };
// let gameData = window.global
// export default config
// export { config, gameData }



import Phaser from 'phaser'
import SceneMain from './scenes/SceneMain';
import SceneMainMenu from './scenes/SceneMainMenu';
import SceneGameOver from './scenes/SceneGameOver';

let scenes = [];
let seedRand = Date.now();
scenes.push(SceneMainMenu);
scenes.push(SceneMain);
scenes.push(SceneGameOver);

let config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: 480,
    height: 640,
    backgroundColor: 'black',
    pixelArt: true,
    seed: [seedRand],
    enableDebug: false,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {x: 0, y: 0},
        debug: false
      }
    },
    scene: scenes,
};
window.global = {
  signature: '@RPLGDC2019 | Arsyel - Witsqa - Helmi',
  score: 0,
  emitter: null,
};
export default class Game extends Phaser.Game {
  constructor() {
    super(config)
  }
}