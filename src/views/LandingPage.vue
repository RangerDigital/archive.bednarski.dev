<template>
  <div>
    <loading-overlay
      class="mobile-hidden"
      @scroll-to-top="
        $refs.fullpage.api.moveTo(1);
        $refs.fullpage.build();
      "
    />

    <full-page ref="fullpage" :options="options" id="fullpage">
      <section class="section">
        <hero-section @scroll-down-event="$refs.fullpage.api.moveSectionDown()" />
      </section>

      <section class="section">
        <alpha-project-section ref="alphaSection" />
      </section>

      <section class="section">
        <bravo-project-section ref="bravoSection" />
      </section>

      <section class="section">
        <charlie-project-section ref="charlieSection" />
      </section>

      <section class="section">
        <contact-section ref="contactSection" />
      </section>
    </full-page>
  </div>
</template>

<script>
  import HeroSection from "../components/HeroSection.vue";
  import LoadingOverlay from "../components/LoadingOverlay.vue";

  import AlphaProjectSection from "../components/projects/AlphaProjectSection.vue";
  import BravoProjectSection from "../components/projects/BravoProjectSection.vue";
  import CharlieProjectSection from "../components/projects/CharlieProjectSection.vue";

  import ContactSection from "../components/ContactSection.vue";

  export default {
    name: "LandingPage",
    components: {
      HeroSection,
      LoadingOverlay,
      ContactSection,
      AlphaProjectSection,
      BravoProjectSection,
      CharlieProjectSection,
    },
    data() {
      return {
        options: {
          licenseKey: "s&XcF3C?o8",
          controlArrows: true,
          afterLoad: this.afterLoad,
          loopBottom: true,
        },
      };
    },
    methods: {
      afterLoad(origin, destination, direction) {
        console.log("Scroll direction:", direction);

        if (direction != "up") {
          switch (destination.index) {
            case 0:
              window.document.title = "Jakub Bednarski | Designer / Software Engineer";
              this.$gtag.pageview({
                page_path: "/#landing",
              });
              break;
            case 1:
              this.$refs.alphaSection.startAnimation();
              this.$gtag.pageview({
                page_path: "/#alpha",
              });
              break;
            case 2:
              this.$refs.bravoSection.startAnimation();
              this.$gtag.pageview({
                page_path: "/#bravo",
              });
              break;
            case 3:
              this.$refs.charlieSection.startAnimation();
              this.$gtag.pageview({
                page_path: "/#charlie",
              });
              break;
            case 4:
              this.$refs.contactSection.startAnimation();
              window.document.title = "Thanks, Get in Touch! 🖐 ";
              this.$gtag.pageview({
                page_path: "/#contact",
              });
          }
        }
      },
    },
    mounted() {
      this.$nextTick(function() {
        this.$refs.fullpage.build();
      });
    },
  };
</script>
