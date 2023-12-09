<template>
  <!--表单模式-->
  <el-form
    v-if="mode === 'form'"
    inline
    ref="formRef"
    :model="form"
    :label-width="labelWidth"
    :validate-on-rule-change="false"
    :rules="rules"
    v-bind="formProps"
  >
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

      <!--表单项遍历-->
      <template v-for="(item, inx2) in scheme.items">
        <ExFormItem
          v-show="item.visible !== false"
          v-if="item.isRemove !== false"
          :key="'form_item_' + inx1 + '_' + inx2"
          :label="item.label"
          :type="item.type"
          :prop="item.prop"
          :rules="item.rules"
          :value="detail[item.prop]"
          :props="item.formItemProps"
        >
          <!--自定义组件-->
          <UiDynamic
            v-if="item.isCustom"
            v-model="form[item.prop]"
            :type="item.type"
            :props="item.props"
            :components="item.component ? [item.component] : components"
            @change="handleChange(item.prop, $event)"
          />
          <!--带选项的组件-->
          <ExOptions
            v-else-if="compsWithItems.includes(item.type)"
            v-model="form[item.prop]"
            :type="item.type"
            :props="item.props"
            :list="dicts[item.prop] || []"
            @input="handleChange(item.prop, $event)"
          />
          <!--仅有value的原生ele组件, 且事件为input-->
          <component
            v-else-if="[compsWithInput.includes(item.type)]"
            :is="item.type"
            v-model="form[item.prop]"
            v-bind="item.props"
            @input="handleChange(item.prop, $event)"
          />
          <!--仅有value的原生ele组件, 且事件为change-->
          <component
            v-else
            :is="item.type"
            v-model="form[item.prop]"
            v-bind="item.props"
            @change="handleChange(item.prop, $event)"
          />
        </ExFormItem>
      </template>
    </template>
  </el-form>
  <!--详情模式-->
  <ExDetail v-else />
</template>

<script>
import ExDetail from "../ex-detail/index.vue";
import ExFormItem from "../ex-form-item/index.vue";
import ExOptions from "../ex-options/index.vue";
import UiDynamic from "../ui-dynamic/index.vue";
import { props } from "./_props";
const ComponentName = "ui-scheme";
export default {
  name: ComponentName,
  components: {
    UiDynamic,
    ExOptions,
    ExFormItem,
    ExDetail,
  },
  props,
  data() {
    return {
      // 带选项的组件
      compsWithItems: ["el-radio", "el-checkbox", "el-select", "el-cascade"],
      // 触发事件为input的组件
      compsWithInput: ["el-input"],
      // 初始值, 默认为detail, 若未传detail则由组件类型自动推断其初始值
      initValues: {},
      // 表单
      form: {},
    };
  },
  methods: {
    _cloneData() {
      return JSON.parse(JSON.stringify(this.form));
    },
    reset() {
      this.form = JSON.parse(JSON.stringify(this.detail));
    },

    /** 获取表单值 */
    async getForm() {
      try {
        await this.$refs.formRef.validate();
      } catch (err) {}
      return this._cloneData();
    },

    /** 获取表单值, 且过滤空值的属性（一般用于查询的场景） */
    async getFormFilterEmpty() {
      try {
        await this.$refs.formRef.validate();
      } catch (err) {}

      const data = this._cloneData();
      const keys = Object.keys(data);
      keys.forEach((k) => {
        if ([undefined, null, ""].includes(data[k]) || `${data[k]}` === `${[]}`)
          delete data[k];
      });

      return data;
    },

    /** 设置属性值 */
    setPropVal(prop, val) {
      this.$set(this.form, prop, val);
      this.handleChange(prop, val);
    },

    /** 属性变化监听, 用于控制联动 */
    handleChange(prop, val) {
      this.$emit("onFormChange", prop, val, {
        setPropVal: this.setPropVal,
        formData: this._cloneData(),
      });
    },

    /** 获取表单变化情况 */
    getCompare() {
      return {
        isChange: true,
        changeItems: {}, // 变化的字段
        form: this._cloneData(),
        oldForm: JSON.parse(JSON.stringify(this.initValues)),
      };
    },
  },
};
</script>
