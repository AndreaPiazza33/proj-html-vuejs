<script>
/*import option*/
import AppOptions from "./AppOptions.vue";

export default {
  data() {
    return {
      title: "",
    };
  },
  components: { AppOptions },
};
</script>

<template>
  <div class="bg-hazelnut">
    <!--contenitore-->
    <div class="container">
      <!--PRIMA SEZIONE-->
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
          <button class="my-button">icona+ Download free E-book</button>
        </div>
        <!--box immagine-->
        <div>
          <img src="img/first-section-image.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="bg-vanilla">
    <!--SECONDA SEZIONE-->
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
</style>
