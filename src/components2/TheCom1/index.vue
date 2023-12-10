<template>
  <div>TheCom1:{{ msg }}</div>
</template>

<script>
import TheCom2 from "../TheCom2/index.vue";
export default {
  name: "TheCom1",
  props: {
    msg: String,
  },
  methods: {
    onOpen(drawer, opener) {
      // drawer?.setProps("抽屉1", "400px");
      drawer?.setTitle(TheCom2, { msg: "测试插糟" });
      drawer?.setWidth("400px");
    },
  },
};
</script>
