import 'phaser';

import { SceneMainMenu } from './scenes/SceneMainMenu';
import { SceneMain} from './scenes/SceneMain';
import { SceneGameOver} from './scenes/SceneGameOver';
// import { Entities, Player} from './GameObject/Entities';

// import {SimpleScene} from './scenes/simple-scene'

const gameConfig = {
  type: Phaser.AUTO,
  width: 480,
  height: 640,
  backgroundColor: "black",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  scene: [
  SceneMainMenu,
  SceneMain,
  SceneGameOver,
  ],
  pixelArt: true,
  roundPixels: true
};

const game = new Phaser.Game(gameConfig);

