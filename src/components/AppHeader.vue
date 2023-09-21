<script>
export default {
  data() {
    return {
      search: "",
    };
  },
};
</script>

<template>
  <div class="bg-hazelnut">
    <!--contenitore header-->
    <div class="container">
      <div class="flex-horizontal justify-content-between py-3">
        <!--logo-->
        <div>
          <img src="img/dark-logo.png" alt="" />
        </div>
        <!--navbar-->
        <div class="flex-horizontal align-items-center">
          <!--options-->
          <div>
            <ul class="flex-horizontal align-items-center blue-data">
              <li>
                Home
                <font-awesome-icon
                  icon="fa-solid fa-angle-down"
                  style="color: #3f3a64"
                />
              </li>
              <li>
                Pages
                <font-awesome-icon
                  icon="fa-solid fa-angle-down"
                  style="color: #3f3a64"
                />
              </li>
              <li>
                Courses
                <font-awesome-icon
                  icon="fa-solid fa-angle-down"
                  style="color: #3f3a64"
                />
              </li>
              <li>
                Features
                <font-awesome-icon
                  icon="fa-solid fa-angle-down"
                  style="color: #3f3a64"
                />
              </li>
              <li>
                Blog
                <font-awesome-icon
                  icon="fa-solid fa-angle-down"
                  style="color: #3f3a64"
                />
              </li>
              <li>
                Shop
                <font-awesome-icon
                  icon="fa-solid fa-angle-down"
                  style="color: #3f3a64"
                />
              </li>
            </ul>
          </div>
          <!--icone-->
          <div class="flex-horizontal mb-3 mx-2">
            <font-awesome-icon
              class="mx-1"
              icon="fa-solid fa-cart-shopping"
              style="color: #000000"
            />
            <font-awesome-icon
              class="mx-1"
              icon="fa-regular fa-circle-user"
              style="color: #000000"
            />
          </div>
          <!--search-->
          <div class="flex-horizontal mb-2">
            <form role="search">
              <input type="search" placeholder="Search..." v-model="search" />

              <button type="submit">
                <font-awesome-icon
                  icon="fa-solid fa-magnifying-glass"
                  style="color: #20ad96"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  gap: 2rem;
  list-style-type: none;
  li {
    cursor: pointer;
  }
}
img {
  max-width: 100%;
}
</style>
