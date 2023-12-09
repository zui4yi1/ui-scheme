export const props = {
  type: {
    type: String,
    default: "",
  },
  value: {
    type: [String, Array],
    default: "",
  },
  props: {
    type: Object,
    default: () => {},
  },
  list: {
    type: Array,
    default: () => [],
  },
  components: {
    type: Array,
    default: () => [],
  },
};
