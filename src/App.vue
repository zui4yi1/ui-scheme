<template>
  <div id="app">
    <UiSCheme
      ref="uiSchemeRef"
      :mode="mode"
      :schemes="scheme"
      :detail="detail"
      :dicts="dicts"
      :rules="rules"
      :components="components"
      @onFormChange="handleFormChange"
    />

    <el-button @click="handleSubmit">提交</el-button>
    <el-button @click="handleReset">重置</el-button>
    <el-button @click="handleToggleForm">切换表单/预览</el-button>
    <el-button @click="handleOpenDrawer(1)">抽屉1</el-button>
    <el-button @click="handleOpenDrawer(2)">抽屉2</el-button>
    <ex-drawer title="抽屉" ref="drawerRef" />
    <ui-scene-drawer ref="drawerRef" :components="components" />
  </div>
</template>

<script>
import Vue from "vue";
import UiDynamic from "./components/ui-dynamic/index.vue";
import UiSCheme from "./components/ui-scheme/index.vue";

import TheCom1 from "./components2/TheCom1/index.vue";
import TheCom2 from "./components2/TheCom2/index.vue";

import * as DemoData from "./demoData";
export default Vue.extend({
  name: "App",
  components: {
    UiSCheme,
    UiDynamic,
    "ex-drawer": () => import("./components/ex-drawer/index.vue"),
    "ui-scene-drawer": () => import("./components/ui-scene-drawer/index.vue"),
  },
  data() {
    return {
      components: [TheCom1, TheCom2],
      mode: "form",
      scheme: [],
      dicts: {},
      detail: {},
      rules: {
        hobits: [{ required: true, message: "该项不可为空" }],
        race: [{ required: true, message: "该项不可为空" }],
        gender: [{ required: true, message: "该项不可为空" }],
      },
    };
  },
  async mounted() {
    this.scheme = DemoData.scheme;
    this.detail = await DemoData.getDetail();
    this.dicts = {
      gender: DemoData.dicts.gender,
      skill: DemoData.dicts.skill,
      hobits: await DemoData.getHobbits(),
      race: await DemoData.getRaces(),
    };
    // 响应式写法
    // this.$set(this.dicts, "race", await DemoData.getRaces());
  },
  methods: {
    async handleSubmit() {
      const data = await this.$refs.uiSchemeRef.getFormFilterEmpty();
      console.info("formData", data);
    },
    handleToggleForm() {
      this.mode = this.mode === "detail" ? "form" : "detail";
    },
    handleReset() {
      this.$refs.uiSchemeRef.reset();
    },
    handleFormChange(prop, val, { setPropVal }) {
      if (prop === "gender" && val === "2") {
        setPropVal("userName", "ccc");
      }
      if (prop === "userName" && val === "ccc") {
        setPropVal("hobits", ["2"]);
      }
    },
    handleOpenDrawer(type) {
      switch (type) {
        case 1:
          this.$refs.drawerRef.openDrawer("TheCom1", { msg: "抽屉1" });
          break;

        default:
          this.$refs.drawerRef.openDrawer("TheCom2", { msg: "抽屉2" });
          break;
      }
    },
  },
});
</script>
