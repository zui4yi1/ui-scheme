export const props = {
  querySchemes: {
    type: Array,
    default: () => [],
  },
  tableSchemes: {
    type: Array,
    default: () => [],
  },

  controlsCard: {
    type: Object,
    default: undefined,
  },
  controlsCardProps: {
    type: Object,
    default: undefined,
  },
  queryDicts: {
    type: Object,
    default: () => {},
  },
  tableDicts: {
    type: Object,
    default: () => {},
  },
  queryApi: {
    type: Function,
    default: undefined,
  },
  beforeQuery: {
    type: Function,
    default: undefined,
  },
  beforeRenderData: {
    type: Function,
    default: undefined,
  },
  afterRenderData: {
    type: Function,
    default: undefined,
  },
  // 挂载时自动查询
  autoQueryOnMounted: {
    type: Boolean,
    default: true,
  },
};
