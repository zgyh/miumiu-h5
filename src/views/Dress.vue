<template>
  <div class="container" :style="bgColor">
    <div class="title"><strong>STEP2</strong> / 选择香水的时尚装扮</div>
    <div class="case-row case-top">
      <div class="item" v-for="item in caseTop" :key="item.id" @click="selectCaseTopItem(item)">
        <img
          :src="item.img"
          :style="{ boxShadow: caseTopItem.id === item.id ? `0 0 16px ${colorVal.color}` : '' }"
          alt=""
        />
      </div>
    </div>
    <div class="center-box" :style="{backgroundImage: `url(${require(`../assets/image/dress/${colorVal.bgImg}`)}`}">
      <div class="top">
        <div class="case-name">
          <span>缪缪深红顶部外壳</span>
          <i class="icon-sanjiao"></i>
        </div>
        <img class="top-img" src="../assets/image/dress/top-lanse.png" alt="" />
        <div class="case-name case-name-right">
          <div class="name1">EYES ON ME</div>
          <strong>霓裳天骄</strong>
          <span>女士香水</span>
        </div>
      </div>
      <div class="center"></div>
      <div class="bottom">
        <img class="bottom-img" src="../assets/image/dress/bottom-huangse.png" alt="" />
      </div>
    </div>
    <div class="case-row case-bottom">
      <div
        class="item"
        v-for="item in caseBottom"
        :key="item.id"
        @click="selectCaseBottomItem(item)"
      >
        <img
          :src="item.img"
          :style="{ boxShadow: caseBottomItem.id === item.id ? `0 0 16px ${colorVal.color}` : '' }"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

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
      caseTopItem: {
        id: 0,
        img: require("../assets/image/dress/top-lanse.png")
      },
      caseTop: [
        {
          id: 0,
          img: require("../assets/image/dress/top-lanse.png")
        },
        {
          id: 1,
          img: require("../assets/image/dress/top-zise.png"),
          color: "#8d75be",
        },
        {
          id: 2,
          img: require("../assets/image/dress/top-meihong.png")
        },
        {
          id: 3,
          img: require("../assets/image/dress/top-shenhong.png")
        }
      ],
      caseBottomItem: {
        id: 0,
        img: require("../assets/image/dress/bottom-huangse.png")
      },
      caseBottom: [
        {
          id: 0,
          img: require("../assets/image/dress/bottom-huangse.png")
        },
        {
          id: 1,
          img: require("../assets/image/dress/bottom-chengse.png")
        },
        {
          id: 2,
          img: require("../assets/image/dress/bottom-lvse.png")
        },
        {
          id: 3,
          img: require("../assets/image/dress/bottom-zise.png")
        }
      ]
    };
  },
  created() {
    console.log(this.colorVal);
  },
  methods: {
    selectCaseTopItem(item) {
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
  overflow-y: scroll;
  .title {
    margin-top: 20px;
    text-align: center;
    color: #fff;
  }
  .case-row {
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
    margin-top: 30px;
    position: relative;
    top: 36px;
  }
  .case-bottom {
    position: relative;
    top: -34px;
  }
  .center-box {
    padding: 80px 0 0 0;
    height: 414px;
    background-size: 100% 100%;
    .top {
      position: relative;
      height: 90px;
      background-color: #8d75be;
      background-repeat: no-repeat;
      background-size: contain;
      text-align: center;
      .top-img {
        position: relative;
        top: -18px;
        width: 100px;
        z-index: 999;
      }
    }
    .center {
      background-color: #fff;
      height: 30px;
    }
    .bottom {
      height: 120px;
      background-color: #ff8400;
      text-align: center;
      .bottom-img {
        position: relative;
        width: 100px;
        top: -17px;
      }
    }
    .case-name {
      position: absolute;
      bottom: 8px;
      width: calc((100% - 100px) / 2);
      font-size: 3.5vw;
      color: #fff;
    }
    .name1 {
      font-size: 3vw;
      text-align: left;
    }
    .case-name-right {
      padding-left: 4vw;
      text-align: left;
      right: 0;
      strong {
        font-size: 3.6vw;
      }
    }
  }
}

.icon-sanjiao {
  margin: 0 5px;
  display: inline-block;
  width: 12px;
  height: 12px;
  background-image: url("../assets/image/icon-sanjiao.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
