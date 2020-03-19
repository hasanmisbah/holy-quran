<template>
  <div id="app">
    <Navigation />
    <Menu />
    <div class="app-container">
      <nuxt />
    </div>
  </div>
</template>
<script>
import Navigation from "../components/Navigation";
import Menu from "../components/Menu";
export default {
  components: {
    Navigation,
    Menu
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.app-container {
  padding-left: 300px;
  padding-top: 20px;
}
</style>