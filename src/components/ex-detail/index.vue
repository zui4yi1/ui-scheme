<template>
  <el-descriptions></el-descriptions>
</template>

<script>
export default {
  name: "ExDetail",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
  },
  watch: {
    value: {
      handler(val) {
        this.$set(
          this.$parent.$parent.form,
          this.prop,
          [undefined, null].includes(val) ? this.getInitValue() : val
        );
        this.$set(
          this.$parent.$parent.initValues,
          this.prop,
          [undefined, null].includes(val) ? this.getInitValue() : val
        );
      },
      deep: true,
      immediate: true,
    },
  },
  beforeUnmounted() {
    const formData = this.$parent.$parent.form;
    delete formData[this.prop];
  },
  methods: {
    getInitValue() {
      return "";
    },
  },
};
</script>
