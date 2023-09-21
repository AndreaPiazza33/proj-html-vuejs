<script>
import { cards } from "../../index";

export default {
  data() {
    return {
      cards,
    };
  },
};
</script>

<template>
  <div
    class="flex-vertical align-items-center text-center"
    v-for="option in cards.cardsOption"
    :key="option.title"
  >
    <img :src="option.imageUrl" alt="options image" />
    <h4>{{ option.title }}</h4>
    <p class="dark-gray-data">{{ option.text }}</p>
    <a class="blue-data" href="#"
      >start now
      <font-awesome-icon
        icon="fa-solid fa-arrow-right-long"
        style="color: #3f3a64"
    /></a>
  </div>
</template>

<style lang="scss">
a {
  text-decoration: none;
}
</style>
