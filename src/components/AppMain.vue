<script>
/*import option*/
import AppOptions from "./AppOptions.vue";

/*import courses*/
import AppCourses from "./AppCourses.vue";

export default {
  data() {
    return {
      title: "",
    };
  },
  components: { AppOptions, AppCourses },
};
</script>

<template>
  <!--PRIMA SEZIONE-->
  <div class="bg-hazelnut">
    <div class="container">
      <div class="flex-horizontal justify-content-between pt-3">
        <div
          class="flex-vertical col-5 justify-content-center section-title-left"
        >
          <h2>Complete Your Dreams in JavaS Programming</h2>
          <p>
            Learn any coding program in distance and for a reasonable fee. You
            don't have to struggle alone, you've got our assistance and help.
          </p>
          <!--button verde(ripetuto)-->
          <button class="my-button w-50">icona+ Download free E-book</button>
        </div>
        <!--box immagine-->
        <div>
          <img src="img/first-section-image.png" alt="" />
        </div>
      </div>
    </div>
  </div>

  <!--SECONDA SEZIONE-->
  <div class="bg-vanilla">
    <div class="container">
      <div class="flex-horizontal flex-wrap justify-content-center">
        <!--titolo sezione-->
        <div class="section-title-center my-5">
          <span>START LEARNING CODING LANGUAGE</span>
          <h2>Build Your Dream Today</h2>
        </div>
        <!--cards option corsi-->
        <div class="flex-horizontal">
          <AppOptions></AppOptions>
        </div>
        <!--img + cards orizzontali-->
        <div
          class="flex-horizontal col-12 justify-content-between wrapper pt-3"
        >
          <!--box immagine-->
          <div>
            <img src="img/second-section-image-01.png" alt="" />
          </div>
          <div
            class="flex-vertical col-4 justify-content-center section-title-left"
          >
            <span>DREAM WITH MAXCOACH</span>
            <h2>Construct A Stunning Career Perspective</h2>
            <div class="flex-horizontal justify-content-between label">
              <span>Multiple Platforms Supported for Teaching & Studying</span>
              <span>-</span>
            </div>
            <div class="white-bg-text">
              <p>
                MaxCoach supports the act of teaching and learning on multiple
                platforms like online or offline via material downloads. We know
                things aren't supposed to be devoured in a short time, you can
                always access our knowledge base from any device
              </p>
            </div>
            <div
              class="flex-horizontal justify-content-between white-bg-text mt-2"
            >
              <span>Multiple Course Participation at the Same Time</span>
              <span>+</span>
            </div>
            <div
              class="flex-horizontal justify-content-between white-bg-text mt-2"
            >
              <span>Track Study Progress & Deliver Prompt Feedback</span>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--TERZA SEZIONE-->
  <div class="bg-hazelnut">
    <div class="container">
      <div class="flex-horizontal justify-content-around py-4">
        <div class="flex-vertical text-center">
          <h4 class="colored-data">1.926</h4>
          <span>FINISHED SESSIONS</span>
        </div>
        <div class="flex-vertical text-center">
          <h4 class="colored-data">3.092+</h4>
          <span>ENROLLED LEARNERS</span>
        </div>
        <div class="flex-vertical text-center">
          <h4 class="colored-data">200</h4>
          <span>ONLINE INSTRUCTORS</span>
        </div>
        <div class="flex-vertical text-center">
          <h4 class="colored-data">100%</h4>
          <span>SATISFACTION RATE</span>
        </div>
      </div>
    </div>
  </div>

  <!--QUARTA SEZIONE-->
  <div class="bg-vanilla">
    <div class="container">
      <div class="flex-horizontal flex-wrap justify-content-center">
        <!--titolo sezione-->
        <div class="section-title-center my-5">
          <span>CHOOSE WHERE YOU'D LIKE TO BEGIN</span>
          <h2>Latest Featured Courses</h2>
        </div>
        <!--cards corsi-->
        <div class="flex-horizontal flex-wrap">
          <AppCourses></AppCourses>
        </div>
        <div class="w-25 text-center">
          <button class="my-button">View all courses -></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.white-bg-text {
  background-color: white;
  border: 1px solid white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  p {
    margin: 1rem 0.5rem;
    color: hsl(250.59deg 10.43% 68.04%);
  }
}
.colored-data {
  color: hsl(170.21deg 68.78% 40.2%);
  font-weight: bolder;
}
</style>
