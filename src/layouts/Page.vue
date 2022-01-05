<template>
  <div class="page">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  watch: {
    $route(to, from) {
      //页面切换动画
      const toIndex = to.meta.index;
      const fromIndex = from.meta.index;
      this.transitionName = toIndex < fromIndex ? "slide-right" : "slide-left";
    }
  }
};
</script>
<style lang="scss" scoped>
.page {
  height: 100%;
  overflow: hidden;
}
</style>
