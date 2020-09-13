<template>
  <div class="g-component-flex">
    <h1><span class="text-red">Service</span> for creating <span class="text-red">anonymous polls</span> for <span class="text-red">free.</span></h1>

    <section class="master-flex action-section">
      <div class="horizontal-flex">
        <div class="divider"></div>
        <div class="vertical-flex">
          <h2><tag-icon size="1.5x" class="icon "></tag-icon>Takagi</h2>
          <p class="description"
            ><span class="text-red">Takagi</span> is a simple <span class="text-red">web application</span> build with <span class="text-red">Flask</span> and
            <span class="text-red">Vue.js</span> used to conduct anonymous polls over the internet built as an assignment for my university Web Dev course.
          </p>
          <br />
          <p class="description mobile-hidden">
            It features <span class="text-red">JWT</span> based <span class="text-red">authentication system</span>, Sentry <span class="text-red">exception monitoring</span>, and
            <span class="text-red">End-To-End</span> tests build with the <span class="text-red">Cypress</span> testing framework.
          </p>
          <br />
          <div class="flex-section">
            <a href="https://github.com/RangerDigital">
              <p><github-icon size="1.5x" class="icon "></github-icon>GitHub</p>
            </a>
            <a href="https://dribbble.com/RangerDigital">
              <p><dribbble-icon size="1.5x" class="icon "></dribbble-icon>Dribbble</p>
            </a>
            <a href="https://dribbble.com/RangerDigital">
              <p><link-icon size="1.5x" class="icon "></link-icon>Takagi</p>
            </a>
          </div>
        </div>
      </div>

      <img class="visualisation" src="../assets/Takagi.png" />
    </section>

    <p></p>
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
  .divider {
    width: 0.25rem;

    margin-right: 3rem;

    border-radius: 10px;
    background-color: #ff344a;
  }

  .text-red {
    color: #ff344a;
  }

  .icon {
    vertical-align: middle;
    margin-right: 0.6em;
    margin-left: 0.6em;
    color: #ff344a;
  }

  .links-section {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .links-section p {
    text-align: left;
    margin: 1em;
  }

  .flex-section {
    display: flex;
  }

  .flex-right {
    align-self: stretch;
  }

  .horizontal-flex {
    justify-content: space-around;
    display: flex;
  }

  .master-flex {
    align-items: center;
    justify-content: space-between;
    display: flex;
    width: 95%;
  }

  .action-section p {
    text-align: left;
  }

  .vertical-flex {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .item {
    margin: 5rem;
    min-width: 40rem;
  }

  .text-red {
    color: #ff344a;
  }

  .description {
    max-width: 45ch;
  }

  .icon {
    vertical-align: middle;
    margin-right: 0.6em;
    margin-left: 0;
    color: #ff344a;
  }

  .visualisation {
    max-width: 50%;
    transform: scale(1.6);
  }

  @media only screen and (max-width: 900px) {
    .links-section {
      flex-direction: column;
      align-items: center;
    }

    .master-flex {
      flex-direction: column-reverse;
      height: 70%;
    }

    h1 {
      margin: 2rem;
    }

    .visualisation {
      max-width: 80%;
      transform: scale(1.7) translateX(10px);
      margin-bottom: 10rem;
    }
  }
</style>
