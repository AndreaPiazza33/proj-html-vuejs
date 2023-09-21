<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="container">
    <div class="flex-horizontal justify-content-between">
      <div class="flex-vertical col-5 list-setting">
        <h5>Address</h5>
        <ul class="dark-gray-data">
          <li>382 NE 191St # 87394 Miami,FL 33179-3899</li>
          <li>+1(305)547-9909(9am-5pm EST, Monday-Friday)</li>
          <li>support@maxcoach.com</li>
        </ul>
        <span class="gray-data">icone social</span>
      </div>

      <div class="flex-horizontal justify-content-center col-7">
        <div class="flex-vertical list-setting">
          <h5>Explore</h5>
          <ul class="dark-gray-data">
            <li>Start here</li>
            <li>Blog</li>
            <li>About us</li>
          </ul>
        </div>
        <div class="flex-vertical list-setting">
          <h5>Us</h5>
          <ul class="dark-gray-data">
            <li>Succes story</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </div>
        <div class="flex-vertical list-setting">
          <h5>Information</h5>
          <ul class="dark-gray-data">
            <li>Membership</li>
            <li>Purchase guide</li>
            <li>Privacy policy</li>
            <li>Term of services</li>
          </ul>
        </div>
      </div>
    </div>
    <!--fondo del footer-->
    <div class="text-center gray-data">
      <span>C 2020 Maxcoach, All Rights Reserved</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-setting {
  margin: 1rem 1rem;
  h5 {
    font-weight: bolder;
  }
  ul {
    padding-left: 0;
  }
  li {
    list-style-type: none;
  }
}
</style>
