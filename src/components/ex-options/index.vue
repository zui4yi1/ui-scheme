<template>
  <div>
    <el-radio-group v-if="type === 'el-radio'" v-model="curVal" v-bind="props">
      <el-radio
        v-for="(item, inx) in list"
        :key="'radio_' + inx"
        :label="item.value"
      >
        {{ item.label }}
      </el-radio>
    </el-radio-group>
    <el-checkbox-group
      v-else-if="type === 'el-checkbox'"
      v-model="curVal"
      v-bind="props"
    >
      <el-checkbox
        v-for="(item, inx) in list"
        :key="'ckb_' + inx"
        :label="item.value"
      >
        {{ item.label }}
      </el-checkbox>
    </el-checkbox-group>
    <el-select v-else-if="type === 'el-select'" v-model="curVal" v-bind="props">
      <el-option
        v-for="(item, inx) in list"
        :key="'select_' + inx"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-cascader
      v-else-if="type === 'el-cascader'"
      v-model="curVal"
      :options="list"
      v-bind="props"
    >
    </el-cascader>
    <div v-else></div>
  </div>
</template>

<script>
import { props } from "./_props";
export default {
  name: "ex-options",
  props,
  computed: {
    curVal: {
      get() {
        // 不同组件的初始值. 注意null和''都是有意义的, 故仅为undefined时根据组件类型初始化
        if ([undefined].includes(this.value)) {
          if (["el-checkbox", "el-cascader"].includes(this.type)) return [];
          if (["el-select"].includes(this.type) && this.multiple) return [];
          else return "";
        } else return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  data() {
    return {};
  },
};
</script>
