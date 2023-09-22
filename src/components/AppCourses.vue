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
    <div class="flex-vertical py-5">
      <div class="flex-horizontal">
        <img class="profile-pic" :src="course.profilePicUrl" alt="" />
        <span>{{ course.profileName }}</span>
      </div>
      <h4>{{ course.title }}</h4>
      <div class="flex-horizontal gray-data">
        <div>
          <span class="mx-2"
            ><font-awesome-icon
              icon="fa-regular fa-file-lines"
              style="color: #a8a5b6"
          /></span>
          <span>{{ course.lessons }}</span>
        </div>
        <div>
          <span class="mx-2"
            ><font-awesome-icon
              icon="fa-regular fa-user"
              style="color: #a8a5b6"
          /></span>
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
  &:hover {
    background-color: white;
  }
  .profile-pic {
    border-radius: 50%;
  }
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
