<template>
  <div class="g-component-flex">
    <h1><span class="text-red">GitHub gist</span> with your <span class="text-red">AniList</span> activity.</h1>

    <section class="master-flex action-section">
      <div class="horizontal-flex">
        <div class="divider"></div>
        <div class="vertical-flex">
          <h2><layers-icon size="1.5x" class="icon "></layers-icon>Neko-Box</h2>
          <p class="description"
            ><span class="text-red">Neko-Box</span> is a simple <span class="text-red">GitHub Action</span> built to make <span class="text-red">dynamic gist</span> displaying your
            <span class="text-red">latest activity</span> from <span class="text-red">AniList</span>.
          </p>
          <br />
          <p class="description mobile-hidden">
            It uses a <span class="text-red">Docker</span> based <span class="text-red">Python</span> script interacting with <span class="text-red">AniList</span> and
            <span class="text-red">GitHub API</span> every 10 minutes. This Action is available on <span class="text-red">GitHub Marketplace</span>.
          </p>
          <br />
          <div class="flex-section">
            <a href="https://github.com/RangerDigital">
              <p><github-icon size="1.5x" class="icon "></github-icon>GitHub</p>
            </a>
          </div>
        </div>
      </div>

      <img class="visualisation" src="../assets/NekoBox.png" />
    </section>

    <p></p>
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
