/**
 * @typedef {Object} ISchemeItem
 * @property {string} type 组件全名
 * @property {string} prop 字段名
 * @property {string} label 标签名
 * @property {Object} props 组件的属性
 * @property {Array} rules 校验规则
 * @property {Object} formItemProps 表单项的属性, 作用于el-form-item相同
 * @property {Boolean} isCustom 是否使用了自定义组件（严格说是非全局组件）
 * @property {Object} component 自定义组件, 需isCustom为true.
 * @property {Boolean} visible 是否可见
 * @property {Boolean} isRemove 是否删除, 注意若删除则form表单也会移除此属性
 */

/**
 * @typedef {Object} IScheme
 * @property {Object | String} head 标题组件, 组件对象或组件的string名称, 如果你的组件已注册为全局组件的话用string名称更方便
 * @property {Object} headProps 标题组件的属性
 * @property {Array<ISchemeItem>} items 本块的配置项列表
 */

/** ====================================================================================== */
/**
 * @typedef {Object} IProps
 * @property {Array<IScheme>} schemes 表单配置项, 注意表单可能是多块的，故直接定为二维
 * @property {'form'|'detail'} mode 模式, 默认form
 * @property {String} labelWidth 标签宽度, 默认120px即6个中文宽度
 */

/**
 * @type {IProps}
 */
export const props = {
  schemes: {
    type: Array,
    default: () => [],
  },
  detail: {
    type: Object,
    default: () => ({}),
  },
  form: {
    type: Object,
    default: () => ({}),
  },
  parent: {
    type: Object,
    default: () => {},
  },
  dicts: {
    type: Object,
    default: () => ({}),
  },
  labelWidth: {
    type: String,
    default: "120px",
  },
  components: {
    type: Array,
    default: () => [],
  },
  // 为空时的占位符
  emptyText: {
    type: String,
    default: "",
  },
};
