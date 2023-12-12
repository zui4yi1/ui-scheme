<template>
  <div v-loading="loading" class="com-table-box">
    <el-table
      ref="comTable"
      :border="border"
      :stripe="stripe"
      :data="list"
      height="calc(100% - 32px)"
      :row-style="rowStyle"
      :header-cell-style="{ textAlign: 'center' }"
      class="table"
      :show-summary="showSummary"
      :summary-method="summaryMethod"
      @row-click="onRowClick"
      @sort-change="onSortChange"
      @selection-change="onSelectionChange"
    >
      <el-table-column
        v-if="checkedRow"
        align="center"
        type="selection"
        width="55"
      />
      <el-table-column
        v-if="isIndex"
        align="center"
        type="index"
        label="序号"
        width="70"
      >
        <template #default="{ $index }">
          {{ getServerIndex($index) }}
        </template>
      </el-table-column>
      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        :align="item.align || align"
        :fixed="item.fixed"
        :label="item.label"
        :width="item.width || 'fit-content'"
        :min-width="item.minWidth || 80"
        :prop="item.prop"
        :sortable="item.sort"
      >
        <template #default="{ row }">
          <slot :name="item.prop" :data="row">
            <div v-if="item.translateYesOrNot" class="cell">
              {{ translateYesOrNot(row[item.prop]) }}
            </div>
            <div v-else-if="item.translateHasOrNot" class="cell">
              {{ translateHasOrNot(row[item.prop]) }}
            </div>
            <div
              v-else-if="item.dict"
              class="cell"
              :title="getDictName(row[item.prop], item.dictType)"
            >
              {{ getDictName(row[item.prop], item.dictType) }}
            </div>
            <div v-else class="cell" :title="row[item.prop]">
              {{ row[item.prop] }}
            </div>
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <el-pagination
    :current-page="page"
    :page-size="pageSize"
    :page-sizes="pageSizes"
    :total="total"
    background
    :layout="layout"
    style="text-align: center"
    @current-change="onPageChange"
    @size-change="onSizeChange"
  />
</template>
<script>
export default {
  methods: {
    async onChange() {
      this.loading = true;
      let res = await this.apiMethod({
        ...this.query,
        pageNum: this.page,
        pageSize: this.pageSize,
      })
        .catch(() => {
          this.list = [];
          this.total = 0;
        })
        .finally(() => (this.loading = false));

      if (!res || res.code !== 200) return;

      let data = res.data;
      this.list = data.data || data.records || [];
      this.total = Number(data.total || 0);
      this.$emit("page-change", this.list, data);
    },
    onRowClick(row) {
      this.$emit("row-click", row);
    },
    onPageChange(page) {
      this.page = page;
      this.onChange();
    },
    onSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.onChange();
    },
    onSortChange({ column, prop, order }) {
      this.$emit("sort-change", { column, prop, order });
    },
    onSelectionChange(selection) {
      this.$emit("selection-change", selection);
    },
    doLayout() {
      this.$refs["comTable"].doLayout();
    },
    // 数据过滤器
    translateYesOrNot(val) {
      return val ? "是" : "否";
    },
    translateHasOrNot(val) {
      return val ? "有" : "无";
    },
    getDictName(val, type) {
      let dicts = this.$store.getters["dictionary/dicts"];
      if (!dicts || !dicts[type]) return "无";

      let data = dicts[type].find((item) => +item.value === +val);
      return data ? data.label : "无";
    },
    getServerIndex(index) {
      return (this.page - 1) * this.pageSize + index + 1;
    },
  },
};
</script>
