<template>
  <div class="ui-scene-query">
    <!-- 查询模块-->
    <UiQuery
      ref="queryRef"
      :querySchemes="querySchemes"
      :queryDicts="queryDicts"
      @query="handleQuery"
    />
    <!-- 控制栏模块-->
    <div class="controls-card">
      <slot name="controls">
        <component
          :is="controlsCard"
          v-if="controlsCard"
          v-bind="controlsCardProps || {}"
        />
      </slot>
    </div>
    <!-- 表格模块-->
    <UiTable
      :tableSchemes="tableSchemes"
      :tableDicts="tableDicts"
      :tableData="tableData"
      :pageSize.sync="pageSize"
      :pageNum.sync="pageNum"
      :total="total"
      :rootInstance="rootInstance"
    />
  </div>
</template>

<script>
import UiQuery from "../ui-query/index.vue";
import UiScheme from "../ui-scheme/index.vue";
import UiTable from "../ui-table/index.vue";
import { props } from "./_props";
export default {
  name: "ui-scene-query",
  components: {
    UiScheme,
    UiQuery,
    UiTable,
  },
  props,
  data() {
    return {
      rootInstance: this,
      tableData: [],

      pageSize: 10,
      pageNum: 1,
      total: 0,
    };
  },
  mounted() {
    this.autoQueryOnMounted && this.exec();
  },

  methods: {
    exec() {
      this.$refs.queryRef.handleQuery();
    },
    async handleQuery(formData) {
      if (this.beforeQuery && this.beforeQuery instanceof Function) {
        formData = this.beforeQuery(formData);
      }
      if (this.queryApi && this.queryApi instanceof Function) {
        const { pageSize, pageNum } = this;
        const params = Object.assign(formData, { pageSize, pageNum });
        console.info("params", params);
        try {
          const res = await this.queryApi(params);
          if (
            this.beforeRenderData &&
            this.beforeRenderData instanceof Function
          ) {
            res = this.beforeRenderData(res);
          }

          // 先写死结构 {code, data:{data. total}}
          this.tableData = res.data.data;
          this.total = res.data.total;
        } catch (err) {
          //
        }
      }
    },
  },
};
</script>
