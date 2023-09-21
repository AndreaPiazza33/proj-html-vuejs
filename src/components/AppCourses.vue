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
    class="flex-vertical align-items-center cards-course"
    v-for="course in cards.cardsCourses"
    :key="course.title"
  >
    <div class="label-position">
      <span class="label">{{ course.label }}</span>
      <img :src="course.imageUrl" alt="course image" />
    </div>
    <div class="flex-vertical">
      <div class="flex-horizontal">
        <img :src="course.profilePicUrl" alt="" />
        <span>{{ course.profileName }}</span>
      </div>
      <h4>{{ course.title }}</h4>
      <div class="flex-horizontal">
        <div>
          <span>icona-</span>
          <span>{{ course.lessons }}</span>
        </div>
        <div>
          <span>-icona-</span>
          <span>{{ course.students }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cards-course {
  cursor: pointer;
  margin: 1rem 1rem;
  width: calc((100% / 3) - 2rem);
  .label-position {
    position: relative;
    .label {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>
