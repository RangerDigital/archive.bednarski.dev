<template>
  <div class="g-component-flex">
    <h1><span class="cl-red">Remote control</span> for your desktop's <span class="cl-red">media.</span></h1>

    <section class="hero-flex-container">
      <div class="hr-flex">
        <div class="divider"></div>

        <div class="vt-flex">
          <h2><radio-icon size="1.5x" class="icon"></radio-icon>Kyouka</h2>

          <p class="text-description"
            ><span class="cl-red">Kyouka</span> is a web application build with <span class="cl-red">FastAPI</span> and <span class="cl-red">Vue.js</span> used to control
            <span class="cl-red">Windows Media Keys</span> remotely using your smartphone or any browser.
          </p>

          <p class="text-description mobile-hidden">
            This allows you to <span class="cl-red">control music</span> playing from YouTube, or any other media player <span class="cl-red">on your desktop</span> while in bed
            and <span class="cl-red">away from the keyboard.</span>
          </p>

          <div class="links-flex">
            <a href="https://github.com/RangerDigital/kyouka">
              <p><github-icon size="1.5x" class="icon"></github-icon>GitHub</p>
            </a>
            <a href="https://dribbble.com/shots/13933501-Kyouka-Remote-Control-Web-App">
              <p><dribbble-icon size="1.5x" class="icon"></dribbble-icon>Dribbble</p>
            </a>
          </div>
        </div>
      </div>

      <img class="img-vis anim-float" src="../../assets/Kyouka.png" alt="Kyouka - Mockup" />
    </section>

    <div></div>
  </div>
</template>

<script>
  import { GithubIcon, DribbbleIcon, RadioIcon } from "vue-feather-icons";

  export default {
    name: "AlphaProjectSection",
    components: {
      GithubIcon,
      DribbbleIcon,
      RadioIcon,
    },
    data() {
      return {
        options: {
          afterLoad: this.afterLoad,
        },
      };
    },
    methods: {
      afterLoad() {
        console.log("Fired Section Alpha animations.");
      },
    },
  };
</script>

<style scoped>
  .hero-flex-container {
    align-items: center;
    justify-content: space-between;
    display: flex;
    width: 95%;
  }

  .hr-flex {
    justify-content: space-around;
    display: flex;
  }

  .vt-flex {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .links-flex {
    display: flex;
  }

  .divider {
    width: 0.25rem;
    margin-right: 3rem;

    border-radius: 10px;
    background-color: var(--primary-color);
  }

  .text-description {
    max-width: 45ch;
    margin-bottom: 2em;
    text-align: left;
  }

  .img-vis {
    max-width: 50%;
    transform: scale(1.8);
  }

  .icon {
    vertical-align: middle;
    margin-right: 0.6em;
    margin-left: 0;
    color: var(--primary-color);
  }

  .cl-red {
    color: var(--primary-color);
  }

  /* Animations. */
  .anim-float {
    animation-name: anim-float;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes anim-float {
    from {
      transform: translateY(0px) scale(1.8);
    }
    65% {
      transform: translateY(10px) scale(1.8);
    }
    to {
      transform: translateY(-0px) scale(1.8);
    }
  }

  @media only screen and (max-width: 900px) {
    .hero-flex-container {
      flex-direction: column-reverse;
      height: 70%;
    }

    h1 {
      margin: 2rem;
    }

    .img-vis {
      max-width: 80%;
      transform: scale(1.8) translateX(10px);
      margin-bottom: 5rem;
      margin-top: 1rem;
    }

    .anim-float {
      animation-name: none;
    }
  }

  /* Horizontal smartphones. */
  @media only screen and (max-height: 500px) {
    .img-vis {
      max-width: 20%;
    }
  }
</style>
