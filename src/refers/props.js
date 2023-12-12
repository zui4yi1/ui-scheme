export default {
  border: {
    type: Boolean,
    default: false,
  },
  stripe: {
    type: Boolean,
    default: true,
  },
  isIndex: {
    type: Boolean,
    default: false,
  },
  columns: {
    type: Array,
    default: () => [],
  },
  rowStyle: {
    type: Function,
    default: () => {
      return {
        lineHeight: "40px",
      };
    },
  },
  apiMethod: {
    type: Function,
    default: null,
  },
  query: {
    type: Object,
    default: () => {},
  },
  checkedRow: {
    type: Boolean,
    default: false,
  },
  showSummary: {
    type: [Boolean, String],
    default: false,
  },
  summaryMethod: {
    type: Function,
    default: null,
  },
  align: {
    type: String,
    default: "left",
  },
};
