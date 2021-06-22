<template>
  <div class="g-component-flex">
    <section class="info-section">
      <a href="mailto:Jakub@Bednarski.Dev">
        <p translate="no">Jakub@Bednarski.dev <mail-icon size="1.5x" class="icon "></mail-icon></p>
      </a>
      <a href="https://goo.gl/maps/wzUE81CNHKstQQaK6">
        <p>Rzeszów, Poland <map-pin-icon size="1.5x" class="icon "></map-pin-icon></p>
      </a>
    </section>

    <section class="flex-container">
      <h1 translate="no">Jakub<span class="cl-red" translate="no">.</span>Bednarski<span class="cl-red" translate="no">.Dev</span></h1>
      <div class="divider"></div>

      <div>
        <p><span class="cl-red">Software Engineer</span> who loves building and breaking visually pleasing products.</p>
        <p class="mobile-hidden">Big fan of anime, <span class="cl-red">Python</span>, <span class="cl-red">Node.js</span>, <span class="cl-red">Vue.js</span> and <span class="cl-red">Open Source</span> software!</p>
      </div>
    </section>

    <section>
      <outline-button @click-event="$emit('scroll-down-event')"><heart-icon size="1.5x" class="button-icon"></heart-icon>See My Work</outline-button>
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
    background-color: var(--primary-color);
  }

  .flex-container {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-around;
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
    color: var(--primary-color);
  }

  .cl-red {
    color: var(--primary-color);
  }

  .button-icon {
    vertical-align: middle;
    margin-right: 1em;
    color: var(--primary-color);
  }
</style>
