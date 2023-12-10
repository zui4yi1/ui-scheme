<template>
  <div class="ex-detail">
    <template v-for="(scheme, inx1) in schemes">
      <!--各块的header标题-->
      <template v-if="scheme.head">
        <component
          v-if="typeof scheme.head === 'string'"
          :is="scheme.head"
          v-bind="scheme.headProps"
        />
        <UiDynamic
          v-else
          :components="[scheme.head]"
          :type="scheme.head.name"
          :props="scheme.headProps"
        />
      </template>
      <!--各块遍历-->
      <el-descriptions>
        <template v-for="(item, inx2) in scheme.items">
          <el-descriptions-item
            :label="item.label"
            v-show="item.visible !== false"
            v-if="item.isRemove !== false"
          >
            <!--自定义组件-->
            <UiDynamic
              v-if="item.isCustom"
              :value="form[item.prop]"
              mode="detail"
              :type="item.type"
              :props="item.props"
              :components="item.component ? [item.component] : components"
            />
            <!--带选项的-->
            <template v-else-if="compsWithItems.includes(item.type)">
              {{ getLabels(item, form[item.prop]) }}
            </template>
            <!--其它普通的可直接展示值的-->
            <template v-else>
              {{ form[item.prop] }}
            </template>
            <ex-form-item
              v-show="item.visible !== false"
              v-if="item.isRemove !== false"
              mode="detail"
              :parent="parent"
              :key="'detail_item_' + inx1 + '_' + inx2"
              :type="item.type"
              :prop="item.prop"
              :value="detail[item.prop]"
            />
          </el-descriptions-item>
        </template>
      </el-descriptions>
    </template>
  </div>
</template>

<script>
import ExFormItem from "../ex-form-item/index.vue";
import UiDynamic from "../ui-dynamic/index.vue";
import { props } from "./_props";
export default {
  name: "ex-detail",
  components: {
    UiDynamic,
    "ex-form-item": () => import("../ex-form-item/index.vue"),
  },
  props,
  data() {
    return {
      compsWithItems: ["el-radio", "el-checkbox", "el-select", "el-cascade"],
    };
  },

  methods: {
    getLabels(item, val) {
      const { type, prop, props: { multiple } = {} } = item;
      const list = this.dicts[prop] || [];
      if (type === "el-radio" || (type === "el-select" && !multiple)) {
        return list.find((t) => t.value === val)?.label || this.emptyText;
      } else if (type === "el-checkbox" || (type === "el-select" && multiple)) {
        if (!(val instanceof Array)) return val;
        return list
          .filter((t) => val.includes(t.value))
          .map((t) => t.label)
          .join(", ");
      }
      return val;
    },
  },
};
</script>
