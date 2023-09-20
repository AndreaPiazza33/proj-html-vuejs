<script>
/*componenti*/
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

/*js*/
import { cards } from "../index";

export default {
  data() {
    return {
      cards,
    };
  },
  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>
