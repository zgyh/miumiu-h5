<template>
  <div class="container">
    <div class="top-box">
      <img class="logo" src="../assets/image/logo.png" alt="" />
    </div>
    <div class="content">
      <div class="content-top">
        <div class="left">
          <img :src="bg" alt="" />
        </div>
        <div class="right">
          <div class="p0" :style="{backgroundImage: `url(${require(`../assets/image/choose-test/${commodity.banner}`)})`}"></div>
          <div class="p1">
            <div class="a">{{ commodity.subText }}</div>
            <div class="b">{{ commodity.fullName }}</div>
          </div>
          <div class="p2">{{ commodity.desc }}</div>
          <div class="p3" v-html="commodity.desc1"></div>
        </div>
      </div>
      <div class="bottom" v-html="commodity.desc2"></div>
      <div class="footer">
        <van-button style="border: 1px solid #1b1b1b; margin-right: 10px" round @click="back()">
          返回上一步
        </van-button>
        <van-button class="btn" round type="primary" @click="nextPage()">
          <div>为TA装扮</div>
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FragranceResult",
  computed: {
    ...mapState(["commodity"])
  },
  data() {
    return {
      bg: ""
    };
  },
  watch: {
    commodity() {
      this.bg = require(`../assets/image/fragranceResult/${this.commodity.bg}`);
    }
  },
  created() {
    this.bg = require(`../assets/image/fragranceResult/${this.commodity.bg}`);
  },
  methods: {
    nextPage() {
      this.$router.push("dress");
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/mixin";
.container {
  height: 100vh;
  padding: 0;
  background-color: #fff;
  .top-box {
    padding-top: 8vw;
    height: 86vw;
    background-color: #ffede9;
    text-align: center;
    .logo {
      width: 50vw;
    }
  }
  .content {
    padding: 6vw;
    position: relative;
    top: -58vw;
    .content-top {
      display: flex;
    }

    .left {
      min-width: 30vw;
      min-height: 82vw;
      img {
        width: 34vw;
      }
    }
    .right {
      margin-left: 3vw;
      position: relative;

      .p0 {
        width: 50vw;
        height: 50vw;
        background-repeat: no-repeat;
        background-size: contain;
      }
      .p1 {
        margin-top: 4vw;
        .a {
          font-size: 3vw;
        }
        .b {
          font-weight: 900;
          font-size: 4.8vw;
        }
      }
      .p2 {
        margin-top: 5vw;
        font-size: 3.4vw;
        font-weight: bold;
      }
      .p3 {
        margin-top: 5vw;
        font-size: 3.4vw;
        line-height: 4.8vw;
      }
    }
    .bottom {
      text-align: center;
      margin-top: 5vw;
      font-size: 3.4vw;
      line-height: 6vw;
    }
  }

  .footer {
    margin-top: 8vw;
    display: flex;
    padding: 0 20px;
    .van-button {
      flex: 1;
    }
    .btn {
      background: #000 url("../assets/image/icon_dress.png") no-repeat;
      background-size: 16px;
      background-position: 85%;
    }
  }
}
</style>
