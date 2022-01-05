<template>
  <div class="index">
    <div class="main">
      <router-view />
    </div>
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
.index {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  .main {
    position: relative;
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>
