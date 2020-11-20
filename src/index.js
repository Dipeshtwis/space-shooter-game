import Phaser from 'phaser';

import './assets/css/style.css';

import Form from './Layout/form';
import BootScene from './scenes/bootScene';
import PreLoad from './scenes/PreLoadScene';
import SceneMainMenu from './scenes/SceneMainMenu';
import SceneMain from './scenes/SceneMain';
import SceneGameOver from './scenes/SceneGameOver';

// import State from './state';
import listeners from './util/listener';

// const state = new State();
const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 630,
  backgroundColor: 'black',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    width: 480,
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
    SceneMain,
    SceneGameOver,
  ],
  pixelArt: true,
  roundPixels: true,
};
const game = new Phaser.Game(config);
// window.addEventListener('load', () => {
//   document.querySelector('#form-container').appendChild(Form());
//   listeners.init();

// document.querySelector('#form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     document.querySelector('#form-container').innerHTML = '';

//     const name = e.target.elements.name.value;
    
//     state.name = name;
//     game.globals = { state };
//   });

// });
