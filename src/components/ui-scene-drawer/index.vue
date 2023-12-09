<template>
  <ex-drawer
    ref="drawerRef"
    :title="title"
    :props="drawerProps"
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
    components: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      opener,
      title: "",
      type: "",
      data: {},
      props: {},
      drawerProps: {},
    };
  },

  methods: {
    // drawerProps位于props前面, 因为这个一般是空的，如果非空也可以定义为常量
    openDrawer(type, title, drawerProps = {}, props = {}) {
      this.type = type;
      this.title = title;
      this.drawerProps = drawerProps;
      this.props = props;
      this.opener = this.$parent.$parent;
      this.$refs.drawerRef.openDrawer();
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
