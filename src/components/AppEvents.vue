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
    class="cards-event bg-vanilla flex-horizontal justify-content-between"
    v-for="event in cards.cardsEvents"
    :key="event.title"
  >
    <div class="flex-vertical justify-content-start col-6 mx-4 my-4">
      <span>icona-{{ event.position }}</span>
      <h5>{{ event.title }}</h5>
    </div>
    <div class="flex-vertical align-items-center col-5 my-2">
      <span class="colored-data">{{ event.day }}</span>
      <span>{{ event.month }}</span>
      <button class="my-button w-50">Get ticket</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cards-event {
  margin: 1rem 1rem;
  width: calc((100% / 2) - 2rem);
  .colored-data {
    font-size: 3.5rem;
  }
}
</style>
