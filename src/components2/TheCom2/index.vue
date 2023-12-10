<template>
  <div>TheCom2:{{ msg }}</div>
</template>

<script>
export default {
  name: "TheCom2",
  props: {
    msg: String,
  },
  methods: {
    onOpen(drawer, opener) {
      drawer?.setProps && drawer.setProps("抽屉2");
    },
  },
};
</script>
