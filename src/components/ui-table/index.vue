<template>
  <div class="table-card" style="height: 400px">
    <ui-scheme ref="uiSchemeRef" mode="form">
      <el-table
        :data="tableData"
        stripe
        height="calc(100% - 52px)"
        v-bind="tableProps"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          v-if="isSelectable"
          type="selection"
          align="center"
          width="60"
        />
        <el-table-column
          v-if="showIndex"
          type="index"
          align="center"
          label="序号"
          width="80"
        >
          <template #default="{ $index }">
            {{ getRowInx($index) }}
          </template>
        </el-table-column>
        <el-table-column
          v-for="(item, inx) in tableSchemes"
          :key="'column' + inx"
          :show-overflow-tooltip="item.showOverflowTooltip !== false"
          :width="item.width || 'auto'"
          :align="item.align || 'center'"
          :label="item.label"
          :prop="item.prop"
          v-bind="item.props || {}"
        >
          <template #default="{ row }">
            <!--优先级: 字典->自定义组件->默认直接展示-->
            <template v-if="item.dict">
              {{ getDictName(item.dictName || item.prop, row[item.prop]) }}
            </template>
            <template v-else-if="item.component">
              <component
                :is="item.component"
                v-bind="item.props"
                :value="row[item.prop]"
                :row="row"
              />
            </template>
            <template v-else>
              {{ row[item.prop] }}
            </template>
          </template>
        </el-table-column>
      </el-table>
    </ui-scheme>
    <el-pagination
      :total="total"
      :current-page="pageNum"
      :page-size="pageSize"
      :page-sizes="[10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import UiScheme from "../ui-scheme/index.vue";
import { props } from "./_props";
export default {
  name: "ui-table",
  components: { UiScheme },
  props,
  methods: {
    handleSelectionChange() {},
    getRowInx(inx) {
      const { pageNum, pageSize } = this.pager;
      return (pageNum - 1) * pageSize + inx + 1;
    },
    getDictName(dictName, val) {
      const list = this.tableDicts[dictName] || [];
      if (!list.length) return val;
      if (["", undefined, null].includes(val)) return this.emptyText;
      if (val instanceof Array || val.includes(",")) {
        const arr = val instanceof Array ? val : val.split(",");
        return list
          .filter((t) => arr.includes(t.value))
          .map((t) => t.label)
          .join(",");
      } else {
        return list.find((t) => `${t.value}` === `${val}`)?.label || val;
      }
    },

    handleSizeChange(pageSize) {
      this.$emit("update:pageSize", pageSize);
      this.rootInstance.exec();
    },
    handleCurrentChange(pageNum) {
      this.$emit("update:pageNum", pageNum);
      this.rootInstance.exec();
    },
  },
};
</script>
