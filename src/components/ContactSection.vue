<template>
  <div class="g-component-flex">
    <h1>Let’s <span class="cl-red">work together</span> on your next <span class="cl-red">project.</span></h1>

    <section class="hero-flex-container description-section">
      <div class="hr-flex">
        <div class="divider"></div>
        <div class="vt-flex">
          <div>
            <p>Having a great idea to share?</p>
            <p>Or want to chat, just drop me a message.</p>
          </div>
          <a href="mailto:Jakub@Bednarski.Dev">
            <h2><mail-icon size="1x" class="icon"></mail-icon>Jakub<span class="cl-red">@</span>Bednarski<span class="cl-red">.Dev</span></h2>
          </a>
        </div>
      </div>

      <div class="hr-flex mobile-hidden">
        <div class="vt-flex">
          <div class="hr-flex item">
            <div class="divider"></div>
            <div class="vt-flex">
              <h2><bookmark-icon size="1x" class="icon"></bookmark-icon>Web Design</h2>
              <div>
                <p>I will create a modern and fresh</p>
                <p> website for your business.</p>
              </div>
            </div>
          </div>

          <div class="hr-flex item">
            <div class="divider"></div>
            <div class="vt-flex">
              <h2><cpu-icon size="1x" class="icon"></cpu-icon>Internet of Things</h2>
              <div>
                <p>I will design and build your next</p>
                <p>internet-connected product.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="vt-flex">
          <div class="hr-flex item">
            <div class="divider"></div>
            <div class="vt-flex">
              <h2><code-icon size="1x" class="icon"></code-icon>Web Development</h2>
              <div>
                <p>I will build your dream web</p>
                <p>application to solve your problems.</p>
              </div>
            </div>
          </div>

          <div class="hr-flex item">
            <div class="divider"></div>
            <div class="vt-flex">
              <h2><server-icon size="1x" class="icon"></server-icon>Operations</h2>
              <div>
                <p>I will build and support your next </p>
                <p>Linux server infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="links-section">
      <div class="links-flex">
        <a href="https://github.com/RangerDigital">
          <p><github-icon size="1.5x" class="icon "></github-icon>GitHub</p>
        </a>
        <a href="https://dribbble.com/RangerDigital">
          <p><dribbble-icon size="1.5x" class="icon "></dribbble-icon>Dribbble</p>
        </a>
        <a href="https://www.artstation.com/ranger_digital">
          <p><box-icon size="1.5x" class="icon "></box-icon>ArtStation</p>
        </a>
      </div>
      <p>Jakub Bednarski © 2020</p>
    </section>
  </div>
</template>

<script>
  import { GithubIcon, DribbbleIcon, BoxIcon, BookmarkIcon, CodeIcon, ServerIcon, CpuIcon, MailIcon } from "vue-feather-icons";

  export default {
    name: "ContactSection",
    components: {
      GithubIcon,
      DribbbleIcon,
      BoxIcon,
      BookmarkIcon,
      CodeIcon,
      ServerIcon,
      CpuIcon,
      MailIcon,
    },
  };
</script>

<style scoped>
  .links-section {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .links-section p {
    text-align: left;
    margin: 1em;
  }

  .links-flex {
    display: flex;
  }

  .flex-right {
    align-self: stretch;
  }

  .hr-flex {
    justify-content: space-around;
    display: flex;
  }

  .hero-flex-container {
    align-items: center;
    justify-content: space-between;
    display: flex;
    width: 95%;
  }

  .description-section p {
    text-align: left;
  }

  .vt-flex {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .divider {
    width: 0.25rem;

    margin-right: 3rem;

    border-radius: 10px;
    background-color: #ff344a;
  }

  .item {
    margin: 5rem;
    min-width: 40rem;
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

  @media only screen and (max-width: 900px) {
    .links-section {
      flex-direction: column;
      align-items: center;
    }

    .hero-flex-container {
      flex-direction: column-reverse;
    }

    h1 {
      margin: 2rem;
    }
  }
</style>
