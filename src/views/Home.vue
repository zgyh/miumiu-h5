<template>
  <div class="container">
    <div class="title-1">PICK你喜欢的两张图片(1/2)</div>
    <van-grid :border="false" :column-num="4" :gutter="10">
      <van-grid-item>
        <van-image :src="require('../assets/image/choose-test/1-1.png')" />
      </van-grid-item>
      <van-grid-item>
        <van-image :src="require('../assets/image/choose-test/1-1.png')" />
      </van-grid-item>
      <van-grid-item>
        <van-image :src="require('../assets/image/choose-test/1-1.png')" />
      </van-grid-item>
      <van-grid-item>
        <van-image :src="require('../assets/image/choose-test/1-1.png')" />
      </van-grid-item>
      <van-grid-item>
        <van-image :src="require('../assets/image/choose-test/1-1.png')" />
      </van-grid-item>
      <van-grid-item>
        <van-image :src="require('../assets/image/choose-test/1-1.png')" />
      </van-grid-item>
      <van-grid-item>
        <van-image :src="require('../assets/image/choose-test/1-1.png')" />
      </van-grid-item>
      <van-grid-item>
        <van-image :src="require('../assets/image/choose-test/1-1.png')" />
      </van-grid-item>
    </van-grid>
    <div class="title-2">PICK你喜欢的两张图片(1/2)</div>
    <van-grid :border="false" :column-num="4" :gutter="10">
      <van-grid-item>
        <van-image :src="require('../assets/image/choose-test/1-1.png')" />
      </van-grid-item>
      <van-grid-item>
        <van-image :src="require('../assets/image/choose-test/1-1.png')" />
      </van-grid-item>
      <van-grid-item>
        <van-image :src="require('../assets/image/choose-test/1-1.png')" />
      </van-grid-item>
      <van-grid-item>
        <van-image :src="require('../assets/image/choose-test/1-1.png')" />
      </van-grid-item>
      <van-grid-item>
        <van-image :src="require('../assets/image/choose-test/1-1.png')" />
      </van-grid-item>
      <van-grid-item>
        <van-image :src="require('../assets/image/choose-test/1-1.png')" />
      </van-grid-item>
      <van-grid-item>
        <van-image :src="require('../assets/image/choose-test/1-1.png')" />
      </van-grid-item>
      <van-grid-item>
        <van-image :src="require('../assets/image/choose-test/1-1.png')" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      img: require("../assets/image/choose-test/1-1.png")
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  /deep/ .van-grid-item__content {
    padding: 0;
  }
  height: 100vh;
  padding: 245px 10px 0 10px;

  background: #fff url("../assets/image/choose_test_bg.png") top / contain no-repeat;
  .title-1 {
    text-align: center;
  }
  .title-2 {
    text-align: center;
    padding: 10px;
    background: url("../assets/image/choose_test_title_bg.png") top / 100% no-repeat;
    line-height: 32px;
  }
}
</style>
