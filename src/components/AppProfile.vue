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
    class="flex-vertical align-items-center text-center cards-profile"
    v-for="profile in cards.cardsProfile"
    :key="profile.name"
  >
    <img :src="profile.profilePic" alt="" />

    <div class="pt-5 mb-3">
      <p class="blue-data my-2">{{ profile.text }}</p>
      <h5>{{ profile.name }}</h5>
      <span class="gray-data">{{ profile.role }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cards-profile {
  position: relative;
  background-color: white;
  cursor: pointer;
  margin: 1rem 1rem;
  width: calc((100% / 3) - 2rem);
  img {
    position: absolute;
    bottom: 75%;
    border-radius: 50%;
    width: 30%;
  }
}
</style>
