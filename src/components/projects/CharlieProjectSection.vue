<template>
  <div class="g-component-flex">
    <h1><span class="cl-red">GitHub gist</span> with your <span class="cl-red">AniList</span> activity.</h1>

    <section class="hero-flex-container">
      <div class="hr-flex">
        <div class="divider"></div>

        <div class="vt-flex">
          <h2><layers-icon size="1.5x" class="icon "></layers-icon>Neko-Box</h2>

          <p class="text-description"
            ><span class="cl-red">Neko-Box</span> is a simple <span class="cl-red">GitHub Action</span> built to make <span class="cl-red">dynamic gist</span> displaying your
            <span class="cl-red">latest activity</span> from <span class="cl-red">AniList</span>.
          </p>

          <p class="text-description mobile-hidden">
            It uses a <span class="cl-red">Docker</span> based <span class="cl-red">Python</span> script interacting with <span class="cl-red">AniList</span> and
            <span class="cl-red">GitHub API</span> every 10 minutes. This Action is available on <span class="cl-red">GitHub Marketplace</span>.
          </p>

          <div class="links-flex">
            <a href="https://github.com/RangerDigital/neko-box">
              <p><github-icon size="1.5x" class="icon "></github-icon>GitHub</p>
            </a>
          </div>
        </div>
      </div>

      <img class="img-vis anim-float" src="../../assets/NekoBox.png" />
    </section>

    <div></div>
  </div>
</template>

<script>
  import { GithubIcon, LayersIcon } from "vue-feather-icons";

  export default {
    name: "CharlieProjectSection",
    components: {
      GithubIcon,
      LayersIcon,
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
    background-color: #ff344a;
  }

  .text-description {
    max-width: 45ch;
    margin-bottom: 2em;
    text-align: left;
  }

  .img-vis {
    max-width: 50%;
    transform: scale(1.6);
  }

  .icon {
    vertical-align: middle;
    margin-right: 0.6em;
    margin-left: 0;
    color: #ff344a;
  }

  .cl-red {
    color: #ff344a;
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
      transform: translateY(0px) scale(1.6);
    }
    65% {
      transform: translateY(10px) scale(1.6);
    }
    to {
      transform: translateY(-0px) scale(1.6);
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
      transform: scale(1.7) translateX(10px) translateY(5px);
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
