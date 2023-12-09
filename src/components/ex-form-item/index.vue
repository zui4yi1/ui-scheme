<template>
  <el-form-item :label="label" :prop="prop" :rules="rules" v-bind="props">
    <slot />
  </el-form-item>
</template>

<script>
export default {
  name: "ExFormItem",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: undefined, // 注意此处为undefined, 不能有默认值, 默认会影响初始化的判断
    },
    type: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => undefined, // 注意此处为undefined, 否则会覆盖form层级的
    },
    props: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    value: {
      handler(val) {
        const defaultVal = this.getInitValue(val, this.type);
        this.$set(this.$parent.$parent.form, this.prop, defaultVal);
        this.$set(this.$parent.$parent.initValues, this.prop, defaultVal);
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
    getInitValue(val, type) {
      if ([undefined].includes(val)) {
        if (type === "el-switch") {
          return false;
        }
        return "";
      } else {
        return val;
      }
    },
  },
};
</script>
