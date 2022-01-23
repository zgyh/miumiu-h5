<template>
  <div class="container">
    <div class="top-box">
      <img class="logo" src="../assets/image/logo.png" alt="" />
    </div>
    <div class="content">
      <div class="top-img">
        <div class="bg-img"><img :src="bgImg" alt=""></div>
        <div class="center-box">
          <div class="top">
            <img class="top-img" :src="caseItem.top.img" alt="" />
          </div>
          <div class="bottom">
            <img class="bottom-img" :src="caseItem.bottom.img" alt="" />
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: center; margin-top: 15px">
        <van-button class="btn" round type="primary" @click="modify()">
          <div>修改组合 <span class="modify-icon"></span></div>
        </van-button>
      </div>
      <div class="full-name">
        <span>{{ commodity.subText }}</span>
        <h1>{{ commodity.fullName }}</h1>
      </div>
      <div style="font-size: 14px; color: #9f9f9f; text-align: center">
        {{ caseItem.top.name }}
        <span class="sub-title-icon"></span>
        {{ caseItem.bottom.name }}
      </div>
      <div class="price">
        <div class="total">组合价</div>
        <div>￥1180.00</div>
      </div>
      <div class="footer">
        <van-button class="btn" round type="primary" @click="shopping()">
          <div>加入购物车 <span class="shopping-cart-icon"></span></div>
        </van-button>
        <van-button class="btn" round type="danger" @click="buy()">
          <div>立即购买 <span class="buy-icon"></span></div>
        </van-button>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Complete",
  computed: {
    ...mapState(["commodity", "caseItem"]),
    bgImg() {
      return require(`../assets/image/fragranceResult/${this.commodity.bg}`);
    }
  },
  data() {
    return {
      caseTopItem: {
        id: 0,
        img: require("../assets/image/dress/top-shenhong.png"),
        color: "#24394c",
        name: "缪缪蓝色顶部外壳"
      },
      caseBottomItem: {
        id: 0,
        img: require("../assets/image/dress/bottom-huangse.png"),
        color: "#f9e08c",
        name: "缪缪黄色底部外壳"
      }
    };
  },
  methods: {
    modify() {
      this.$router.go(-1);
    },
    shopping() {},
    buy() {}
  }
};
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  background-color: #fff;
  .top-box {
    padding-top: 4vw;
    height: 78vw;
    background-color: #ffede9;
    text-align: center;
    .logo {
      width: 45vw;
    }
  }
  .content {
    position: relative;
    top: -48vw;
  }
  .top-img {
    position: relative;
    display: flex;
    justify-content: center;
    .bg-img {
      position: relative;
      width: 20vw;
      margin-right: 1vw;
      img {
        position: absolute;
        bottom: 4px;
        width: 20vw;
      }
    }
    .center-box {
      .top {
        position: relative;
        .top-img {
          top: 5vw;
          z-index: 999;
        }
      }
      .bottom {
        position: relative;
        text-align: center;
      }
      img {
        position: relative;
        width: 23vw;
      }
    }
  }

  .full-name {
    text-align: center;
    font-size: 24px;
    margin: 0 0 15px 0;

    span {
      font-size: 10px;
    }
    h1 {
      line-height: 20px;
      font-weight: bold;
    }
  }

  .price {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    .total {
      text-align: center;
      font-weight: normal;
      font-size: 14px;
      height: 23px;
      background-repeat: no-repeat;
      background-size: 44px;
      background-position: center bottom;
    }
  }
  .footer {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    .btn {
      height: 40px;
    }
    .btn:last-child {
      background-color: #ef3830;
      margin-left: 15px;
    }
  }
  .btn {
    width: 35vw;
    height: 32px;
  }
  .modify-icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    background: url("../assets/image/icon-modify.png") no-repeat;
    background-size: contain;
  }

  @mixin icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .sub-title-icon {
    background: url("../assets/image/icon-sub-title.png") no-repeat;
    @include icon;
  }

  .shopping-cart-icon {
    background-image: url("../assets/image/icon-shopping-cart.png");
    @include icon;
  }
  .buy-icon {
    background-image: url("../assets/image/icon-buy.png");
    @include icon;
  }
}
</style>
