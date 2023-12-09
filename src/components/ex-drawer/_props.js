export const props = {
  title: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "820px",
  },

  props: {
    type: Object,
    default: () => {},
  },

  hasFooter: {
    type: Boolean,
    default: true,
  },
  hasConfirm: {
    type: Boolean,
    default: true,
  },
  hasSecond: {
    type: Boolean,
    default: false,
  },
  hasCancel: {
    type: Boolean,
    default: true,
  },
  confirmProps: {
    type: Object,
    default: () => ({
      type: "primary",
      size: "small",
    }),
  },
  secondProps: {
    type: Object,
    default: () => ({
      size: "small",
    }),
  },
  cancelProps: {
    type: Object,
    default: () => ({
      size: "small",
    }),
  },
  confirmText: {
    type: String,
    default: "确认",
  },
  secondText: {
    type: String,
    default: "保存",
  },
  cancelText: {
    type: String,
    default: "取消",
  },
};
