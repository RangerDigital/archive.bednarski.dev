<template>
  <button class="button g-clickable" @click="$emit('click-event')">
    <p>
      <slot>CLICK ME</slot>
    </p>
  </button>
</template>

<script>
  export default {
    name: "OutlineButton",
  };
</script>

<style scoped>
  .button {
    min-width: 25rem;
    display: block;

    background-color: #131313;
    border: 0.25rem solid var(--primary-color);
    border-radius: 1em;
  }

  .button p {
    font-size: 2rem;
    font-weight: 500;
    font-family: "Poppins";
    color: #e4e4e4;
    letter-spacing: 0.01em;

    transition: color 0.5s;
  }

  .button:focus {
    border-style: outset;
    outline: none;
    box-shadow: none !important;
  }

  .button:hover p {
    color: var(--primary-color);
  }
</style>
