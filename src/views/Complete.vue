<template>
  <div class="container">
    <div class="top-box">
      <img class="logo" src="../assets/image/logo.png" alt="" />
    </div>
    <div class="content">
      <div
        class="bottom-bgimg"
        :style="{
          backgroundImage: `url(${require(`../assets/image/choose-test/${commodity.banner1}`)})`
        }"
      ></div>
      <div class="top-img">
        <div class="bg-img"><img :src="bgImg" alt="" /></div>
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
      <!--      <div class="price">-->
      <!--        <div class="total">组合价</div>-->
      <!--        <div>￥{{ commodity.CNY + caseItem.top.CNY + caseItem.bottom.CNY }}</div>-->
      <!--      </div>-->
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
    return {};
  },
  methods: {
    modify() {
      this.$router.go(-1);
    },
    shopping() {
      const productIds = [this.caseItem.top.code, this.caseItem.bottom.code, this.commodity.code];
      window.wx.miniProgram.navigateTo(
        `/packages/openMiniProgram/index?productIds=${productIds}&handle=shopCar`
      );
    },
    buy() {
      const productIds = [this.caseItem.top.code, this.caseItem.bottom.code, this.commodity.code];
      window.wx.miniProgram.navigateTo(
        `/packages/openMiniProgram/index?productIds=${productIds}&handle=buy`
      );
    }
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
    top: -50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    .bottom-bgimg {
      position: absolute;
      width: 70vw;
      height: 70vw;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  .top-img {
    margin-top: 8vw;
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
          top: 4vw;
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
    margin: 12vw 0 6vw 0;
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
