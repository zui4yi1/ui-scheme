<template>
  <div class="search-card">
    <ui-scheme
      ref="uiSchemeRef"
      mode="search"
      :schemes="querySchemes"
      :dicts="queryDicts"
    >
      <template #append>
        <el-form-item label-width="0">
          <el-button type="primary" @click="handleQuery">查询</el-button>
          <el-button plain @click="handleReset">重置</el-button>
        </el-form-item>
      </template>
    </ui-scheme>
  </div>
</template>

<script>
import UiScheme from "../ui-scheme/index.vue";
import { props } from "./_props";
export default {
  name: "ui-query",
  components: {
    UiScheme,
  },
  props,
  methods: {
    async handleQuery() {
      const formData = await this.$refs.uiSchemeRef.getFormFilterEmpty();
      if (!formData) return;
      this.$emit("query", formData);
    },
    handleReset() {
      this.$refs.uiSchemeRef.reset();
      this.handleQuery();
    },
  },
};
</script>
