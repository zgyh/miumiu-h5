<template>
  <div class="container">
    <div class="title"><strong>STEP2</strong> / 选择香水的时尚装扮</div>
    <div class="case-row">
      <div
        class="item"
        v-for="item in caseTop"
        :key="item.id"
      >
        <img :src="item.img" alt="">
      </div>
    </div>
    <div class="center-box">

    </div>
  </div>
</template>

<script>
export default {
  name: "Dress",
  data() {
    return {
      caseTop: [
        {
          id: 0,
          img: require("../assets/image/dress/top-lanse.png")
        },
        {
          id: 1,
          img: require("../assets/image/dress/top-zise.png")
        },
        {
          id: 2,
          img: require("../assets/image/dress/top-meihong.png")
        },
        {
          id: 3,
          img: require("../assets/image/dress/top-shenhong.png")
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  background-color: rgba(#8d75be, 0.5);
  .title {
    margin-top: 20px;
    text-align: center;
    color: #fff;
  }
  .case-row {
    margin-top: 45px;
    padding: 0 10vw;
    display: flex;
    justify-content: space-between;
    .item {
      width: 20%;
      img {
        width: 100%;
      }
    }
  }
  .center-box {
    height: 414px;
    background-image: url("../assets/image/dress/chonger-bg.png");
    background-size: 100% 100%;
  }
}
</style>
