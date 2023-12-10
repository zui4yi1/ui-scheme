<template>
  <div>
    <div v-if="mode === 'detail'">{{ curVal }}</div>
    <el-input v-else v-model="curVal" @input="handleChange" />
  </div>
</template>

<script>
import TheCom2 from "../TheCom2/index.vue";
export default {
  name: "TheCom1",
  props: {
    value: {
      type: String,
      default: "",
    },
    mode: {
      type: String,
      default: "form",
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
  },
  methods: {
    onOpen(drawer, opener) {
      // drawer?.setProps("抽屉1", "400px");
      drawer?.setTitle(TheCom2, { msg: "测试插糟" });
      drawer?.setWidth("400px");
    },
    handleChange(val) {
      this.$emit("change", val);
    },
  },
};
</script>
