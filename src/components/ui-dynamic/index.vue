<template>
  <component
    ref="componentRef"
    v-if="DynamicComponent"
    v-model="curVal"
    :mode="mode"
    :is="DynamicComponent"
    v-bind="props"
    @change="handleChange"
  />
</template>

<script>
const ComponentName = "ui-dynamic";
export default {
  name: ComponentName,
  options: {
    virtualHost: true,
    inheritAttrs: false,
  },
  props: {
    type: {
      type: String,
      default: "",
    },
    mode: {
      type: String,
      default: "form",
    },
    components: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: "",
    },
    props: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    curVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    DynamicComponent() {
      return this.components.find((item) => item.name === this.type);
    },
  },
  methods: {
    onOpen(parent, opener) {
      this.$nextTick(() => {
        if (this.$refs.componentRef?.onOpen instanceof Function) {
          this.$refs.componentRef.onOpen(parent, opener);
        }
      });
    },
    handleChange(val) {
      this.$emit("change", val);
    },
  },
};
</script>
