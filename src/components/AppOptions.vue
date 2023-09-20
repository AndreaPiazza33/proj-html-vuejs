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
    <p>{{ option.text }}</p>
    <a href="#">start now -></a>
  </div>
</template>

<style lang="scss"></style>
