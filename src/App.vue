<template>
  <div id="app">
    <scene-query />
    <!-- <scheme /> -->
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {
    scheme: () => import("./samples/scheme.vue"),
    "scene-query": () => import("./samples/scene-query.vue"),
  },
  data() {
    return {};
  },
});
</script>
