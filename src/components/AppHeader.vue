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
    <!--contenitore header-->
    <div class="container">
      <div class="d-flex flex-row justify-content-between py-3">
        <!--logo-->
        <div>
          <img src="img/dark-logo.png" alt="" />
        </div>
        <!--navbar-->
        <div class="d-flex flex-row align-items-center">
          <!--options-->
          <div>
            <ul class="d-flex flex-row">
              <li>link</li>
              <li>link</li>
              <li>link</li>
              <li>link</li>
              <li>link</li>
              <li>link</li>
            </ul>
          </div>
          <!--icone-->
          <div class="d-flex flex-row align-items-center mx-2">
            <p>icon</p>
            <p>icon</p>
          </div>
          <!--search-->
          <div>
            <input type="text" />
            <button>search</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-header {
  background-color: rgb(233 230 227);
  width: 100%;

  ul {
    gap: 1rem;
    list-style-type: none;
  }
  img {
    max-width: 100%;
  }
}
</style>
