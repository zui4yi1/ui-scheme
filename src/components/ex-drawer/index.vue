<template>
  <el-drawer
    :title="title"
    :size="width"
    :visible.sync="open"
    direction="rtl"
    :wrapper-closable="false"
    append-to-body
    class="ex-drawer"
    @close="closeDrawer"
    v-bind="props"
  >
    <template #title>
      <component :is="titleSlot" v-if="titleSlot" v-bind="titleSlotProps" />
    </template>
    <div v-if="open" class="custom-body">
      <slot />
    </div>
    <div v-if="hasFooter" class="custom-foot">
      <el-button v-if="hasConfirm" v-bind="confirmProps" @click="handleConfirm">
        {{ confirmText }}
      </el-button>
      <el-button v-if="hasSecond" v-bind="secondProps" @click="handleConfirm">
        {{ secondText }}
      </el-button>
      <el-button v-if="hasCancel" v-bind="cancelProps" @click="closeDrawer">
        {{ cancelText }}
      </el-button>
    </div>
  </el-drawer>
</template>

<script>
import { props } from "./_props";
export default {
  name: "ex-drawer",
  props,
  data() {
    return {
      open: false,
    };
  },
  methods: {
    openDrawer(type = "detail") {
      this.open = true;
    },
    handleConfirm() {
      this.$emit("confirm");
    },
    handleSecond() {
      this.$emit("second");
    },
    closeDrawer() {
      this.open = false;
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.ex-drawer /deep/.el-drawer__body {
  padding: 14px 0;
  overflow: hidden;
}
.custom-body {
  height: calc(100vh - 200px);
  padding: 0 30px;
  overflow: auto;
}
.custom-foot {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
}
.custom-foot .el-button + .el-button {
  margin-left: 40px;
}
</style>
