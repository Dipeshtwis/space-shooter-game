/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import Phaser from 'phaser';
import '@babel/polyfill';

import './assets/css/style.css';

import BootScene from './scenes/bootScene';
import PreLoad from './scenes/PreLoadScene';
import SceneMainMenu from './scenes/SceneMainMenu';
import SceneInput from './scenes/SceneInput';
import SceneMain from './scenes/SceneMain';
import SceneGameOver from './scenes/SceneGameOver';
import SceneLeaderBoard from './scenes/SceneLeaderBoard';

const config = {
  type: Phaser.AUTO,
  backgroundColor: 'black',
  scale: {
    width: 485,
    height: 630,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [
    BootScene,
    PreLoad,
    SceneMainMenu,
    SceneInput,
    SceneMain,
    SceneGameOver,
    SceneLeaderBoard,
  ],
  pixelArt: true,
  roundPixels: true,
};

const game = new Phaser.Game(config);
