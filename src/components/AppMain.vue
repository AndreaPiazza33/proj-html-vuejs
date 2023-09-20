<script>
export default {
  data() {
    return {
      title: "",
    };
  },
};
</script>

<template>
  <div class="bg-hazelnut">
    <!--contenitore-->
    <div class="container">
      <!--PRIMA SEZIONE-->
      <div class="flex-horizontal justify-content-between wrapper pt-3">
        <div
          class="flex-vertical col-4 justify-content-center section-title-left"
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
        <div class="d-flex">
          <img src="img/first-section-image.png" alt="" />
        </div>
      </div>

      <!--SECONDA SEZIONE-->
      <div class="flex-horizontal">
        <!--titolo sezione-->
        <div class="section-title-center">
          <span>START LEARNING CODING LANGUAGE</span>
          <h2>Build Your Dream Today</h2>
        </div>
        <!--cards corsi-->
        <div>ciao</div>
        <!--img + cards orizzontali-->
        <div>ciao</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  overflow-y: hidden;
  height: calc(100vh - 50px);
}
</style>
