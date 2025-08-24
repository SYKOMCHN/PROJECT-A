

let audioManager = {
    musicVolume: 0.5,
    sfxVolume: 0.5,

    sounds: {click: null, hover: null, music: null},

    preload() {
        // music
        this.sounds.music = loadSound("assets/audio/music/ProjectA_Test_Menu.mp3");

        //sound effects
        this.sounds.click = loadSound("assets/audio/effects/select.wav");
        this.sounds.hover = loadSound("assets/audio/effects/hover.wav");
    },

    playMusic(name, loop = true) {
        let sound = this.sounds[name];
        if (sound && !sound.isPlaying()) {
            sound.setVolume(this.musicVolume);
            sound.loop(loop);
        }
    },

    stopMusic(name) {
        let sound = this.sounds[name];
        if (sound && sound.isPlaying()) {
            sound.stop();
        }
    },

    playSFX(name) {
        let sound = this.sounds[name];
        if (sound) {
            sound.setVolume(this.sfxVolume);
            sound.play();
        }
    },

    setMusicVolume(value) {
        this.musicVolume = value;
        // update all currently playing music
        for (let key in this.sounds) {
            if (this.sounds[key].isPlaying()) {
                this.sounds[key].setVolume(value);
            }
        }
    },

    setSFXVolume(value) {
        this.sfxVolume = value;
    }
};
