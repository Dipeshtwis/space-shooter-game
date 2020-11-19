import sprBg0 from "../content/sprBg0.png";
import sprBg1 from "../content/sprBg1.png";
import sndBtnOver from "../content/sndBtnOver.wav";
import sndBtnDown from "../content/sndBtnDown.wav";
import sprBtnRestart from "../content/sprBtnRestart.png";
import sprBtnRestartHover from "../content/sprBtnRestartHover.png";
import sprBtnRestartDown from "../content/sprBtnRestartDown.png";

import ScrollingBackground from "../Layout/ScrollingBackground";

class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: "SceneGameOver" });
  }

  preload(){
    this.load.image("sprBg0", sprBg0);
    this.load.image("sprBg1", sprBg1);
    this.load.image("sprBtnRestart", sprBtnRestart);
    this.load.image("sprBtnRestartHover", sprBtnRestartHover);
    this.load.image("sprBtnRestartDown", sprBtnRestartDown);

    this.load.audio("sndBtnOver", sndBtnOver);
    this.load.audio("sndBtnDown", sndBtnDown);
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
	  fontFamily: 'monospace',
	  fontSize: 48,
	  fontStyle: 'bold',
	  color: '#ffffff',
	  align: 'center'
	});
	this.title.setOrigin(0.5);

	this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };

    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprBtnRestart"
    );
    this.btnRestart.setInteractive();

    this.btnRestart.on("pointerover", () => {
      this.btnRestart.setTexture("sprBtnRestartHover");
      this.sfx.btnOver.play();
    }, this);

    this.btnRestart.on("pointerout", () => {
      this.setTexture("sprBtnRestart");
    });

    this.btnRestart.on("pointerdown", () => {
      this.btnRestart.setTexture("sprBtnRestartDown");
      this.sfx.btnDown.play();
    }, this);

    this.btnRestart.on("pointerup", () => {
      this.btnRestart.setTexture("sprBtnRestart");
      this.scene.start("SceneMain");
    }, this);

    this.backgrounds = [];
	for (let i = 0; i < 5; i++) {
	  let keys = ["sprBg0", "sprBg1"];
	  let key = keys[Phaser.Math.Between(0, keys.length - 1)];
	  let bg = new ScrollingBackground(this, key, i * 10);
	  this.backgrounds.push(bg);
	}
  }
  update() {
    for (let i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i].update();
    }
  }
}

export default SceneGameOver;