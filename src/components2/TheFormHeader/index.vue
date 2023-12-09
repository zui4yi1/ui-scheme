<template>
  <div class="TheFormHeader">{{ title }}</div>
</template>

<script lang="ts">
export default {
  name: "TheFormHeader",
  props: {
    title: String,
  },
};
</script>
<style scoped>
.TheFormHeader {
  height: 40px;
  line-height: 40px;
  font-weight: bold;
}
</style>
