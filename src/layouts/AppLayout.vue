<template>
  <div class="layout-wrap">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "AppLayout",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.layout-wrap {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  .main {
    position: relative;
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>
