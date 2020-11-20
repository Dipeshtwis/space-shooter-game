import Phaser from 'phaser';
import logo from '../content/logo.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    this.load.image('logo', logo);
  }

  create() {
  	this.add.image(300, 300, 'logo');
    this.scene.start('PreLoad');
  }
}