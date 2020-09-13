<template>
  <div class="g-component-flex">
    <h1><span class="cl-red">Service</span> for creating <span class="cl-red">polls</span> for <span class="cl-red">free.</span></h1>

    <section class="hero-flex-container">
      <div class="hr-flex">
        <div class="divider"></div>

        <div class="vt-flex">
          <h2><tag-icon size="1.5x" class="icon "></tag-icon>Takagi</h2>

          <p class="text-description"
            ><span class="cl-red">Takagi</span> is a simple <span class="cl-red">web application</span> build with <span class="cl-red">Flask</span> and
            <span class="cl-red">Vue.js</span> used to conduct anonymous polls built for my university course.
          </p>

          <p class="text-description mobile-hidden">
            It features <span class="cl-red">JWT</span> based <span class="cl-red">authentication system</span>, Sentry <span class="cl-red">exception monitoring</span>, and
            <span class="cl-red">End-To-End</span> tests build with the <span class="cl-red">Cypress</span> testing framework.
          </p>

          <div class="links-flex">
            <a href="https://github.com/RangerDigital/takagi">
              <p><github-icon size="1.5x" class="icon "></github-icon>GitHub</p>
            </a>
            <a href="https://dribbble.com/shots/10886543-Takagi-Online-Polls-Web-App">
              <p><dribbble-icon size="1.5x" class="icon "></dribbble-icon>Dribbble</p>
            </a>
            <a href="https://takagi.bednarski.dev/">
              <p><link-icon size="1.5x" class="icon "></link-icon>Takagi</p>
            </a>
          </div>
        </div>
      </div>

      <img class="img-vis anim-float" src="../../assets/Takagi.png" />
    </section>

    <div></div>
  </div>
</template>

<script>
  import { GithubIcon, DribbbleIcon, TagIcon, LinkIcon } from "vue-feather-icons";

  export default {
    name: "BravoProjectSection",
    components: {
      GithubIcon,
      DribbbleIcon,
      TagIcon,
      LinkIcon,
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
      transform: scale(1.6) translateX(10px);
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
