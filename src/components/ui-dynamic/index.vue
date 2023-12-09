<template>
  <component :is="DynamicComponent" v-if="DynamicComponent" v-bind="props" />
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
    components: {
      type: Array,
      default: () => [],
    },
    props: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    DynamicComponent() {
      return this.components.find((item) => item.name === this.type);
    },
  },
};
</script>
