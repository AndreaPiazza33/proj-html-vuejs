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
  <div class="bg-header">
    <!--contenitore-->
    <div class="container">
      <!--PRIMA SEZIONE-->
      <div class="d-flex flex-row justify-content-between wrapper pt-3">
        <div class="d-flex flex-column col-4 justify-content-center">
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-header {
  background-color: rgb(233 230 227);
  width: 100%;
  .wrapper {
    overflow-y: hidden;
    height: calc(100vh - 50px);
  }
  img {
    max-width: 100%;
  }
}
</style>
