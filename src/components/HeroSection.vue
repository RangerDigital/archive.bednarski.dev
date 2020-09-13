<template>
  <div class="g-component-flex">
    <section class="info-section">
      <a href="mailto:Jakub@Bednarski.Dev">
        <p>Jakub@Bednarski.dev <mail-icon size="1.5x" class="icon "></mail-icon></p>
      </a>
      <a href="https://goo.gl/maps/wzUE81CNHKstQQaK6">
        <p>Rzeszów, Poland <map-pin-icon size="1.5x" class="icon "></map-pin-icon></p>
      </a>
    </section>

    <section class="flex-container">
      <h1>Jakub<span class="text-red">.</span>Bednarski<span class="text-red">.Dev</span></h1>
      <div class="divider"></div>
      <div>
        <p><span class="text-red">Software Engineer</span> who loves building and breaking visually pleasing products.</p>
        <p class="mobile-hidden"
          >Big fan of anime, <span class="text-red">Python</span>, <span class="text-red">Vue.js</span> and <span class="text-red">Open Source</span> software!</p
        >
      </div>
    </section>

    <section>
      <outline-button><heart-icon size="1.5x" class="button-icon"></heart-icon>SEE MY WORK</outline-button>
      <p>Or just scroll down.</p>
    </section>

    <section class="links-section">
      <a href="https://github.com/RangerDigital">
        <p><github-icon size="1.5x" class="icon "></github-icon>GitHub</p>
      </a>
      <a href="https://dribbble.com/RangerDigital">
        <p><dribbble-icon size="1.5x" class="icon "></dribbble-icon>Dribbble</p>
      </a>
      <a href="https://www.artstation.com/ranger_digital">
        <p><box-icon size="1.5x" class="icon "></box-icon>ArtStation</p>
      </a>
    </section>
  </div>
</template>

<script>
  import OutlineButton from "../components/OutlineButton.vue";
  import { HeartIcon, MailIcon, MapPinIcon, GithubIcon, DribbbleIcon, BoxIcon } from "vue-feather-icons";

  export default {
    name: "HeroSection",
    components: {
      OutlineButton,
      HeartIcon,
      MailIcon,
      MapPinIcon,
      GithubIcon,
      DribbbleIcon,
      BoxIcon,
    },
  };
</script>

<style scoped>
  .divider {
    height: 0.25rem;
    width: 100%;

    margin: 1rem;

    border-radius: 10px;
    background-color: #ff344a;
  }

  .flex-container {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-around;
  }

  .text-red {
    color: #ff344a;
  }

  .info-section {
    align-self: flex-end;
  }

  .info-section p {
    text-align: right;
    margin: 1em;
    margin-bottom: 1.3em;
  }

  .links-section {
    align-self: flex-start;
  }

  .links-section p {
    text-align: left;
    margin: 1em;
    margin-bottom: 1.3em;
  }

  .icon {
    vertical-align: middle;
    margin-right: 0.6em;
    margin-left: 0.6em;
    color: #ff344a;
  }

  .button-icon {
    vertical-align: middle;
    margin-right: 1em;
    color: #ff344a;
  }
</style>
