import Phaser from 'phaser';

import SceneMainMenu from './scenes/SceneMainMenu';
import SceneMain from './scenes/SceneMain';
import SceneGameOver from './scenes/SceneGameOver';

const gameConfig = {
  type: Phaser.AUTO,
  width: 480,
  height: 630,
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
  SceneGameOver
  ],
  pixelArt: true,
  roundPixels: true
};

const game = new Phaser.Game(gameConfig);

