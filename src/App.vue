<template>
  <full-page ref="fullpage" id="fullpage">
    <section class="section">
      <hero-section />
    </section>
    <section class="section">
      <contact-section />
    </section>
  </full-page>
</template>

<script>
  import HeroSection from "./components/HeroSection.vue";
  import ContactSection from "./components/ContactSection.vue";

  export default {
    name: "App",
    components: {
      HeroSection,
      ContactSection,
    },
  };
</script>

<style>
  @import "./assets/css/reset.css";
  @import url("https://fonts.googleapis.com/css?family=Baloo+Thambi+2&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

  html {
    font-size: 10px;
    background-color: #131313;
  }

  h1 {
    font-size: 9rem;
    font-weight: 500;
    font-family: "Poppins";
    color: #e4e4e4;
    letter-spacing: 0.01em;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    font-family: "Poppins";
    color: #e4e4e4;
    letter-spacing: 0.03em;

    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 2rem;
    font-weight: 500;
    font-family: "Baloo Thambi 2";
    color: #707070;
    letter-spacing: 0.03em;
    text-align: center;

    margin: 0.5em;
  }

  /* Global Helpers */
  .g-component-flex {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    padding: 7rem;
  }

  .g-clickable {
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  /* Very small smartphones and Samsung Fold. */
  @media only screen and (max-width: 350px) {
    html {
      font-size: 6px;
    }

    h1 {
      font-size: 4rem;
    }

    .g-component-flex {
      padding: 1rem;
    }

    .mobile-hidden {
      display: none !important;
    }
  }

  /* Normal sized smartphones. */
  @media only screen and (min-width: 350px) and (max-width: 900px) {
    html {
      font-size: 6.5px;
    }

    h1 {
      font-size: 4.5rem;
    }

    .g-component-flex {
      padding: 1rem;
    }

    .mobile-hidden {
      display: none !important;
    }
  }

  /* Tablets and laptops. */
  @media only screen and (min-width: 900px) and (max-width: 1600px) {
    html {
      font-size: 8px;
    }

    h1 {
      font-size: 6.5rem;
    }

    .g-component-flex {
      padding: 3rem;
    }
  }

  /* Normal sized desktops. */
  @media only screen and (min-width: 1600px) and (max-width: 2000px) {
    html {
      font-size: 9px;
    }

    .g-component-flex {
      padding: 3rem;
    }
  }

  /* Ultra big desktops. */
  @media only screen and (max-height: 500px) {
    html {
      font-size: 3px;
    }

    .g-component-flex {
      padding: 3rem;
    }
  }
</style>
