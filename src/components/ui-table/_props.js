export const props = {
  rootInstance: {
    type: Object,
    default: () => {},
  },
  tableSchemes: {
    type: Array,
    default: () => [],
  },
  tableDicts: {
    type: Object,
    default: () => {},
  },
  tableData: {
    type: Array,
    default: () => [],
  },
  tableProps: {
    type: Object,
    default: () => {},
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  pageNum: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    default: 0,
  },

  isSelectable: {
    type: Boolean,
    default: false,
  },
  showIndex: {
    type: Boolean,
    default: false,
  },
  // 无值时的占位符
  emptyText: {
    type: String,
    default: "",
  },
};
