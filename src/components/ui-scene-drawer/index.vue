<template>
  <ex-drawer
    ref="drawerRef"
    :title="title"
    :width="cusWidth || width"
    :props="drawerProps"
    :titleSlot="titleSlot"
    :titleSlotProps="titleSlotProps"
    @confirm="handleConfirm"
    @second="handleSecond"
  >
    <ui-dynamic
      ref="dynamicRef"
      :type="type"
      :components="components"
      :props="props"
    />
  </ex-drawer>
</template>

<script>
export default {
  name: "ui-scene-drawer",
  components: {
    "ex-drawer": () => import("../ex-drawer/index.vue"),
    "ui-dynamic": () => import("../ui-dynamic/index.vue"),
  },
  props: {
    width: {
      type: String,
      default: "820px",
    },
    components: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // 如果有新增状态，注意有可能需要在reset中重置
      opener,
      title: "",
      type: "",
      cusWidth: "",
      data: {},
      props: {},
      drawerProps: {},
      titleSlot: undefined,
      titleSlotProps: {},
    };
  },

  methods: {
    resetDrawerProps() {
      this.title = "";
      this.cusWidth = "";
      this.drawerProps = {};
      this.titleSlot = undefined;
      this.titleSlotProps = {};
    },

    /**
     * 打开抽屉
     * @param type 组件名
     * @param props 组件参数
     */
    openDrawer(type, props = {}) {
      this.resetDrawerProps();
      this.type = type;
      this.props = props;
      this.opener = this.$parent.$parent;
      this.$refs.drawerRef.openDrawer();
      this.$nextTick(() => {
        this.$refs["dynamicRef"].onOpen(this, this.opener);
      });
    },

    setProps(title, width, props) {
      title !== undefined && (this.title = title);
      width !== undefined && (this.cusWidth = width);
      props !== undefined && (this.drawerProps = props);
    },
    /** 设置title, title可为组件 */
    setTitle(title, slotProps) {
      if (
        ["string", "number", "boolean"].includes(typeof title) ||
        [null, undefined].includes(title)
      ) {
        this.title = title;
      } else {
        this.titleSlot = title;
        this.titleSlotProps = slotProps || {};
      }
    },
    setWidth(width) {
      this.cusWidth = width;
    },
    setDrawerProps(props) {
      this.drawerProps = props || {};
    },
    async handleConfirm() {
      // 触发组件的confirm事件
      // this参数, 是为了方便子组件调用closeDrawer
      // opener参数，是为了方便子组件调用父页面的方式，如查询列表
      this.$refs["dynamicRef"].confirm(this, this.opener);
    },
    async handleSecond() {
      // 触发组件的second事件
      // this参数, 是为了方便子组件调用closeDrawer
      // opener参数，是为了方便子组件调用父页面的方式，如查询列表
      this.$refs["dynamicRef"].second(this, this.opener);
    },
    closeDrawer() {
      this.$refs.drawerRef.closeDrawer();
    },
  },
};
</script>
