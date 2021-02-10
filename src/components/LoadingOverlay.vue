<template>
  <div class="container" v-if="!loadingComplete" @click="loadingComplete = true">
    <div class="slides"></div>
    <div class="slides vt-flex">
      <h3 class="title" translate="no">Developer,</h3>
    </div>
    <div class="slides vt-flex">
      <img class="avatar" src="../assets/avatar.gif" alt="Personal Avatar" />
      <h3 class="title" translate="no">Designer,</h3>
      <img class="hidden avatar" src="../assets/avatar.gif" alt="Personal Avatar" />
    </div>
    <div class="slides vt-flex">
      <h3 class="title cl-red" translate="no">Weeb.</h3>
    </div>
    <div class="slides"> </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        loadingComplete: false,
      };
    },
    mounted() {
      if (window.matchMedia("screen and (max-width:900px)").matches) {
        this.loadingComplete = true;
        return;
      }

      this.$anime({
        targets: ".title",
        translateY: "-50px",
        opacity: 1,
        delay: this.$anime.stagger(600, { start: 180, easing: "linear" }),
        easing: "easeInOutQuad",

        complete: () => {
          this.$anime({
            targets: ".title",
            translateY: "80px",
            opacity: 0,
            delay: this.$anime.stagger(150, { start: 200, easing: "linear" }),
            easing: "easeInOutQuad",
          });

          this.$anime({
            targets: ".slides",
            backgroundColor: "#ff344a",
            easing: "easeOutQuad",
            delay: 1000,
          });
        },
      });

      this.$anime({
        targets: ".avatar",
        translateY: "-50px",
        opacity: 1,
        delay: 1450,
        easing: "easeInOutQuad",
      });

      this.$anime({
        targets: ".slides",
        translateY: "100%",
        delay: this.$anime.stagger(300, { start: 3500, easing: "easeOutQuad" }),
        easing: "easeInOutQuad",
        complete: () => {
          this.loadingComplete = true;
        },
      });
    },
    watch: {
      loadingComplete: function(val) {
        if (val === true) {
          this.$emit("scroll-to-top");
        }
      },
    },
  };
</script>

<style scoped>
  .container {
    width: 100vw;
    height: 100vh;

    position: absolute;
    display: flex;
    z-index: 2;
  }

  .slides {
    width: 20%;
    height: 100%;

    background-color: #ff344a;
    background-color: #131313;
  }

  .vt-flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h3 {
    font-size: 6.5rem;
    font-weight: 500;
    font-family: "Poppins";
    color: #e4e4e4;
    letter-spacing: 0.03em;
    text-align: center;

    margin: 0.5em;
    opacity: 0;
  }

  .avatar {
    max-width: 50%;
    justify-self: center;
    align-self: center;
    margin: 8rem;
    opacity: 0;
  }

  .cl-red {
    color: var(--primary-color);
  }

  .hidden {
    visibility: hidden;
  }

  /* Tablets and laptops. */
  @media only screen and (min-width: 900px) and (max-width: 1600px) {
    h3 {
      font-size: 4.5rem;
    }
  }
</style>
