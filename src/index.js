import Phaser from 'phaser';
import SceneMainMenu from './scenes/SceneMainMenu';
import SceneMain from './scenes/SceneMain';
import SceneGameOver from './scenes/SceneGameOver';
import State from './state';
import listeners from './util/listener';
import Form from './Layout/form';
import './assets/css/style.css';
import BootScene from './scenes/bootScene.js';

const state = new State();
const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 630,
  backgroundColor: 'black',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [
    BootScene,
    SceneMainMenu,
    SceneMain,
    SceneGameOver,
  ],
  pixelArt: true,
  roundPixels: true,
};

window.addEventListener('load', () => {
  document.querySelector('#form-container').appendChild(Form());
  listeners.init();

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('#form-container').innerHTML = '';

    const name = e.target.elements.name.value;
    const game = new Phaser.Game(config);
    state.name = name;
    game.globals = { state };
  });

});
