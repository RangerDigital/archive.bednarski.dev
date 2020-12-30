<template>
  <div>
    <section class="overlay" v-if="showGlitch">
      <div class="black nano"></div>
      <div class="black small glitch"></div>
      <div class="black nano"></div>
      <div class="black nano"></div>
      <div class="black big glitch"></div>
      <div class="black nano glitch_b"></div>
      <div class="black nano"></div>
      <div class="black nano"></div>
      <div class="black small glitch"></div>
      <div class="black nano glitch_b"></div>
    </section>

    <section class="loading bluescreen" v-if="showLoading">
      <p>--- DISK PART v0.69</p>
      <p>--- RECOVERY IN PROGRESS ---</p>
      <p class="blink big-text">DO NOT TURN COMPUTER OFF</p>
      <br />
      <p>--- TIME REMAINING:</p>
      <p> Rawr x3 / You So Warm :3 </p>
      <p> Nuzzles your necky wecky ~murr~ </p>
      <br />
      <p>Check uwu to make suwe any nyew hawdwawe ow softwawe is pwopewwy instawwed.</p>
      <br />
      <p>Technical information: </p>
      <p>STOP: o:x:000000D (p:x:000002, o:x:00000000000, o:xF:865A49)</p>
    </section>

    <section class="bluescreen" v-if="showBios">
      <p>A problem has been detected and your computer has been shut down to prevent damage to your computer. </p>
      <p>DRIVER_IRQL_NOT_LESS_EQUAL</p>
      <br />
      <p>If this is the first time you've seen this Stop error screen, restart your computer, if this screen appears again, follow these steps: </p>
      <p>Check to make sure any new hardware or software is properly installed.</p>
      <p>If this is a new installation, ask your hardware or software manufacturer for any windows updates you might need.</p>
      <p>If problems continue, disable or remove any newly installed hardware or software. Disable BIOS memory options such as caching or shadowing.</p>
      <p>If you need to use Safe Mode to remove or disable components, restart your computer, press F8 to select Advanced startup options, and then select safe mode.</p>
      <br />
      <p>Technical information: </p>
      <p>STOP: o:x:000000D (p:x:000002, o:x:00000000000, o:xF:865A49)</p>
      <p>Dump HEX 0001 - 0C 94 35 00 0C 0010 - 0C 94 ED 00 0C 0020</p>
      <p>Dump HEX 0002 - 0C 94 21 37 0C 0010 - 0C 94 ED 00 0C 0020</p>
      <p>Dump HEX 0003 - 0C 94 35 00 0C 0010 - 0C 94 ED 00 0C 0020</p>
      <br />
      <br />
      <br />
      <p class="blink big-text">DISK DATA CORRUPTION!</p>
      <p>Recovery attempt in 15s... Please wait!</p>
    </section>
  </div>
</template>

<script>
  import { Howl } from "howler";

  export default {
    name: "HackPage",
    data: function() {
      return {
        showBios: true,
        showGlitch: false,
        showLoading: false,
        showLogo: false,
      };
    },
    methods: {
      playBeep() {
        var sound = new Howl({
          src: [require("../assets/sounds/beep-02.mp3")],
          onplayerror: function() {
            sound.once("unlock", function() {
              sound.play();
            });
          },
        });

        sound.play();
      },
    },
    mounted() {
      document.addEventListener("keydown", () => {
        var sound = new Howl({
          src: [require("../assets/sounds/beep-01.mp3")],
          onplayerror: function() {
            sound.once("unlock", function() {
              sound.play();
            });
          },
        });

        sound.play();
      });

      this.$anime({
        targets: ".bluescreen",
        duration: 5000,

        complete: () => {
          this.playBeep();
        },
      });

      this.$anime({
        targets: ".bluescreen",
        duration: 20000,

        complete: () => {
          this.showGlitch = true;
        },
      });

      this.$anime({
        targets: ".overlay",
        duration: 50000,

        complete: () => {
          this.showBios = false;
          this.showLoading = true;

          var sound = new Howl({
            src: [require("../assets/sounds/never-gonna.mp3")],
            onplayerror: function() {
              sound.once("unlock", function() {
                sound.play();
              });
            },
          });

          sound.play();
        },
      });

      this.$anime({
        targets: ".overlay",
        duration: 60000,

        complete: () => {
          this.$router.push("/");
        },
      });
    },
  };
</script>

<style scoped>
  .bluescreen {
    width: 100vw;
    height: 100vh;
    padding: 100px;
    background-color: #0200dd;
    cursor: none;
  }

  .bluescreen p {
    text-align: left;
    color: #ffffff;
    font-family: "Lucida Console";
  }

  .overlay {
    position: absolute;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: flex-end;
  }

  .loading {
    width: 100vw;
    height: 100vh;
  }

  .big {
    width: 24.5%;
    height: 100%;
    margin: 0 27px 0 7px;
  }

  .small {
    width: 12%;
    height: 100%;
    margin: 0 15px 0 15px;
  }

  .nano {
    width: 2px;
    height: 100%;
    margin: 0 2px 0 3px;
  }

  .black {
    background-color: #000000;
  }

  .blink {
    animation: blink 1s step-start 0s infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .glitch {
    animation: glitch 3s step-start 0s infinite;
  }

  .glitch_b {
    animation: glitch 5s step-start 0s infinite;
  }

  @keyframes glitch {
    20% {
      transform: translateX(1px);
    }
    80% {
      transform: translateX(-1px);
    }
  }
</style>
