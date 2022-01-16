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
    <div
      class="center-box"
      :style="{ backgroundImage: `url(${require(`../assets/image/dress/${colorVal.bgImg}`)}` }"
    >
      <div class="top" :style="{ backgroundColor: caseTopItem.color }">
        <div class="case-name">
          <span>{{ caseTopItem.name }}</span>
          <i class="icon-sanjiao"></i>
        </div>
        <img class="top-img" :src="caseTopItem.img" alt="" />
        <div class="case-name case-name-right">
          <div class="name1">{{ commodity.subText }}</div>
          <strong>{{ commodity.name }}</strong>
          <span>女士香水</span>
        </div>
      </div>
      <div class="center">
        <div class="case-name case-name-right">
          <span>Eau de toilette</span>
          <span>50 ml</span>
        </div>
      </div>
      <div class="bottom" :style="{ backgroundColor: caseBottomItem.color }">
        <div class="case-name">
          <span>{{ caseBottomItem.name }}</span>
          <i class="icon-sanjiao"></i>
        </div>
        <img class="bottom-img" :src="caseBottomItem.img" alt="" />
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
    <div class="footer">
      <van-button class="btn" round type="primary" @click="nextPage()">
        <div>确定搭配</div>
      </van-button>
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
        img: require("../assets/image/dress/top-lanse.png"),
        color: "#24394c",
        name: "缪缪蓝色顶部外壳"
      },
      caseTop: [
        {
          id: 0,
          img: require("../assets/image/dress/top-lanse.png"),
          color: "#24394c",
          name: "缪缪蓝色顶部外壳"
        },
        {
          id: 1,
          img: require("../assets/image/dress/top-zise.png"),
          color: "#8d75be",
          name: "缪缪紫色顶部外壳"
        },
        {
          id: 2,
          img: require("../assets/image/dress/top-meihong.png"),
          color: "#f5a695",
          name: "缪缪粉色顶部外壳"
        },
        {
          id: 3,
          img: require("../assets/image/dress/top-shenhong.png"),
          color: "#cf3d3e",
          name: "缪缪深红顶部外壳"
        }
      ],
      caseBottomItem: {
        id: 0,
        img: require("../assets/image/dress/bottom-huangse.png"),
        color: "#f9e08c",
        name: "缪缪黄色底部外壳"
      },
      caseBottom: [
        {
          id: 0,
          img: require("../assets/image/dress/bottom-huangse.png"),
          color: "#f9e08c",
          name: "缪缪黄色底部外壳"
        },
        {
          id: 1,
          img: require("../assets/image/dress/bottom-chengse.png"),
          color: "#f08929",
          name: "缪缪橙色底部外壳"
        },
        {
          id: 2,
          img: require("../assets/image/dress/bottom-lvse.png"),
          color: "#028075",
          name: "缪缪绿色底部外壳"
        },
        {
          id: 3,
          img: require("../assets/image/dress/bottom-zise.png"),
          color: "#18263f",
          name: "缪缪蓝色底部外壳"
        }
      ]
    };
  },
  created() {
    console.log(this.colorVal);
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
      position: relative;
      background-color: #fff;
      height: 30px;
      .case-name {
        padding: 0 10px;
        color: #000;
        font-size: 10px;
        display: flex;
        justify-content: space-between;
      }
    }
    .bottom {
      position: relative;
      height: 120px;
      background-color: #ff8400;
      text-align: center;
      .case-name {
        top: 10px;
      }
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
      font-size: 10px;
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

.footer {
  display: flex;
  padding: 0 20px;
  position: relative;
  top: -14px;
  justify-content: center;
  .van-button {
    width: 150px;
  }
  .btn {
    background: #000 url("../assets/image/icon_dress.png") no-repeat;
    background-size: 16px;
    background-position: 85%;
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
