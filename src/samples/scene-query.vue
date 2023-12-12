<template>
  <UiSceneQuery
    :querySchemes="querySchemes"
    :queryDicts="dicts"
    :tableSchemes="tableSchemes"
    :tableDicts="dicts"
    :queryApi="queryApi"
    :beforeQuery="beforeQuery"
  />
</template>

<script>
import * as DemoData from "./demoData";

import UiSceneQuery from "../components/ui-scene-query/index.vue";
export default {
  name: "scene-query",
  components: {
    UiSceneQuery,
  },
  data() {
    return {
      querySchemes: DemoData.querySchemes,
      dicts: {},
      tableSchemes: DemoData.tableSchemes,
    };
  },
  async mounted() {
    this.dicts = {
      gender: DemoData.dicts.gender,
      skill: DemoData.dicts.skill,
      cascader: DemoData.dicts.cascader,
      hobby: await DemoData.getHobbits(),
      race: await DemoData.getRaces(),
    };
  },
  methods: {
    beforeQuery(formData) {
      const { time = "", ...rest } = formData;
      if (time) {
        rest.startTime = time + " 00:00:00";
        rest.endTime = time + "23:59:59";
      }
      return rest;
    },
    async queryApi() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(DemoData.tableData);
        }, 800);
      });
    },
  },
};
</script>
