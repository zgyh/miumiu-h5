<template>
  <div class="container">
    <div class="top-box">
      <img class="logo" src="../assets/image/logo.png" alt="" />
    </div>
    <div class="title"><strong>STEP2</strong> / 选择香水的时尚装扮</div>
    <div class="case-row case-top">
      <div class="item" v-for="item in caseTop" :key="item.id" @click="selectCaseTopItem(item)">
        <img
          :src="item.img"
          :style="{ boxShadow: caseTopItem.id === item.id ? `0 0 16px ${colorVal.color}` : '' }"
          alt=""
        />
        <div class="no-listed" v-show="item.noListed">暂未上架</div>
      </div>
    </div>
    <div class="center-box">
      <!--      <div class="top">-->
      <!--        <div class="row" :style="{ backgroundColor: caseTopItem.color }">-->
      <!--          <div class="case-name">-->
      <!--            <span>{{ caseTopItem.name }}</span>-->
      <!--            <i class="icon-sanjiao"></i>-->
      <!--          </div>-->
      <!--          <div class="case-name" style="text-align: left">-->
      <!--            <div style="position: relative">-->
      <!--              <span class="scal">{{ commodity.subText }}</span>-->
      <!--            </div>-->
      <!--            <div>-->
      <!--              <strong>{{ commodity.name }}</strong>-->
      <!--              <span>女士香水</span>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="row2"></div>-->
      <!--        <div class="row" :style="{ backgroundColor: caseBottomItem.color }">-->
      <!--          <div class="case-name">-->
      <!--            <span>{{ caseBottomItem.name }}</span>-->
      <!--            <i class="icon-sanjiao"></i>-->
      <!--          </div>-->
      <!--          <div class="case-name" style="text-align: left">-->
      <!--            <span>Eau de toilette &nbsp;&nbsp;&nbsp;&nbsp;</span>-->
      <!--            <span>50 ml</span>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <div class="bottom">
        <div class="img">
          <img class="top-img" :src="caseTopItem.img" alt="" />
        </div>
        <div><img class="bottom-img" :src="caseBottomItem.img" alt="" /></div>
        <div class="case-row">
          <div
            class="item"
            v-for="item in caseBottom"
            :key="item.id"
            @click="selectCaseBottomItem(item)"
          >
            <img
              :src="item.img"
              :style="{
                boxShadow: caseBottomItem.id === item.id ? `0 0 16px ${colorVal.color}` : ''
              }"
              alt=""
            />
          </div>
        </div>
        <div class="footer">
          <van-button class="btn" round type="primary" @click="nextPage()">
            <div>确定搭配</div>
          </van-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * #f9e08c
 * #f08929
 * #028075
 * #18263f
 */
import { mapState } from "vuex";
const caseTop = [
  {
    id: 0,
    code: 766462,
    CNY: 121,
    img: require("../assets/image/dress/top-lanse.png"),
    color: "#24394c",
    name: "缪缪蔚蓝顶部外壳"
  },
  {
    id: 1,
    CNY: 121,
    img: require("../assets/image/dress/top-zise.png"),
    color: "#8d75be",
    name: "缪缪紫色顶部外壳",
    noListed: true
  },
  {
    id: 2,
    CNY: 121,
    img: require("../assets/image/dress/top-meihong.png"),
    color: "#f5a695",
    name: "缪缪粉色顶部外壳",
    noListed: true
  },
  {
    id: 3,
    code: 766456,
    CNY: 121,
    img: require("../assets/image/dress/top-shenhong.png"),
    color: "#cf3d3e",
    name: "缪缪正红顶部外壳"
  }
];

const caseBottom = [
  {
    id: 0,
    code: 766468,
    CNY: 121,
    img: require("../assets/image/dress/bottom-huangse.png"),
    color: "#f9e08c",
    name: "缪缪嫩黄底部外壳"
  },
  {
    id: 1,
    code: 766458,
    CNY: 121,
    img: require("../assets/image/dress/bottom-chengse.png"),
    color: "#f08929",
    name: "缪缪暖橘底部外壳"
  },
  {
    id: 2,
    code: 766464,
    CNY: 121,
    img: require("../assets/image/dress/bottom-lvse.png"),
    color: "#028075",
    name: "缪缪石绿底部外壳"
  },
  {
    id: 3,
    code: 766450,
    CNY: 121,
    img: require("../assets/image/dress/bottom-zise.png"),
    color: "#18263f",
    name: "缪缪海军蓝底部外壳"
  }
];
export default {
  name: "Dress",
  computed: {
    ...mapState(["commodity"]),
    colorVal() {
      if (this.commodity.name === "霓裳云霄") {
        return {
          color: "#30afff",
          bgImg: "yunxiao-bg.png"
        };
      } else if (this.commodity.name === "霓裳宠儿") {
        return {
          color: "#8d75be",
          bgImg: "chonger-bg.png"
        };
      } else if (this.commodity.name === "霓裳玩童") {
        return {
          color: "#bca120",
          bgImg: "wantong-bg.png"
        };
      } else {
        return {
          color: "#db9e9e",
          bgImg: "tianjiao-bg.png"
        };
      }
    },
    bgColor() {
      if (this.commodity.name === "霓裳云霄") {
        return { backgroundColor: "rgba(48, 175, 255, 0.5)" };
      } else if (this.commodity.name === "霓裳宠儿") {
        return { backgroundColor: "rgba(141, 117, 190, 0.5)" };
      } else if (this.commodity.name === "霓裳玩童") {
        return { backgroundColor: "rgba(188, 161, 32, 0.5)" };
      } else {
        return { backgroundColor: "rgba(219, 158, 158, 0.5)" };
      }
    }
  },
  data() {
    return {
      caseTop,
      caseBottom,
      caseTopItem: caseTop[0],
      caseBottomItem: caseBottom[0]
    };
  },
  created() {
    // console.log(this.colorVal);
  },
  methods: {
    nextPage() {
      this.$store.commit("SET_CASE", {
        top: this.caseTopItem,
        bottom: this.caseBottomItem
      });
      this.$router.push("complete");
    },
    selectCaseTopItem(item) {
      if (item.noListed) {
        this.$toast("抱歉，该款暂未上架~");
        return;
      }
      this.caseTopItem = item;
    },
    selectCaseBottomItem(item) {
      this.caseBottomItem = item;
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  background-color: #ffede9;
  overflow-y: scroll;
  .top-box {
    padding-top: 4vw;
    background-color: #ffede9;
    text-align: center;
    .logo {
      width: 35vw;
    }
  }
  .title {
    margin-top: 3vw;
    text-align: center;
  }
  .case-row {
    margin-top: 2vw;
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
  .case-top {
    margin: 7vw 0;
    position: relative;
  }
  .center-box {
    position: relative;
    .top {
      width: 100vw;
      position: absolute;
      top: 13vw;
      text-align: center;
      .case-name {
        padding-left: 2vw;
        width: calc((100% - 20vw) / 2);
        font-size: 3vw;
        color: #fff;
      }
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 12vw;
      }
      .row2 {
        position: relative;
        background-color: #fff;
        height: 6vw;
      }
    }
    .bottom {
      text-align: center;
      .top-img {
        position: relative;
        width: 20vw;
        z-index: 999;
      }
      .bottom-img {
        position: relative;
        width: 20vw;
        top: -17px;
      }
    }
  }
}

.no-listed {
  color: #fa4848;
  text-align: center;
  font-size: 3vw;
}

.footer {
  margin-top: 4vw;
  display: flex;
  position: relative;
  justify-content: center;
  .van-button {
    width: 150px;
  }
  .btn {
    background: #000 url("../assets/image/icon_dress.png") no-repeat;
    background-size: 3.5vw;
    background-position: 85%;
  }
}

.icon-sanjiao {
  margin: 0 5px;
  display: inline-block;
  width: 2.5vw;
  height: 2.5vw;
  background-image: url("../assets/image/icon-sanjiao.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.scal {
  white-space: nowrap;
  display: inline-block;
  transform: scale(0.7);
  position: absolute;
  top: -12px;
  left: -20px;
}
</style>
