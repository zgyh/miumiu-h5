<template>
  <div class="container">
    <div class="top-box">
      <div>
        <img class="logo" src="../assets/image/logo.png" alt="" />
      </div>
      <div>
        <img class="chose" src="../assets/image/chose-text.png" alt="" />
      </div>
    </div>
    <div class="title">点击选择一款香水</div>
    <van-grid :border="false" :column-num="2" :gutter="10">
      <van-grid-item
        @click="selectItem(item, index)"
        v-for="(item, index) in selectList1"
        :key="item.id"
      >
        <div class="item">
          <van-image :class="item.selected ? 'image' : ''" :src="item.img" />
          <img v-if="item.selected" class="selected" src="../assets/image/selected.png" alt="" />
        </div>
      </van-grid-item>
    </van-grid>
    <div class="footer">
      <van-button round type="primary" @click="nextPage()">
        <div class="btn">完成选择</div>
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      item: {},
      selectList1: [
        {
          id: 0,
          img: require("../assets/image/choose-test/1.png"),
          selected: false
        },
        {
          id: 1,
          img: require("../assets/image/choose-test/2.png"),
          selected: false
        },
        {
          id: 2,
          img: require("../assets/image/choose-test/3.png"),
          selected: false
        },
        {
          id: 3,
          img: require("../assets/image/choose-test/4.png"),
          selected: false
        }
      ],
      commodity: [
        {
          bg: "miumiu-yunxiao.png",
          fullName: "缪缪霓裳云霄女士香水",
          name: "霓裳云霄",
          id: 0,
          code: 766460,
          CNY: 569,
          subText: "HEAD IN THE CLOUDS",
          desc: "缪缪云朵香",
          desc1: ` <div>由调香大师</div>
            <div><strong>Nicolas Beaulieu</strong>全新创作</div>`,
          desc2: `<div><strong>大黄</strong>的微酸多汁</div>
        <div>糅合<strong>牡丹</strong>的清新细腻</div>
        <div>丝滑柔软的<strong>白琥珀</strong>香气在鼻尖回荡</div>
        <div>沉醉在恣意自由的梦幻时分</div>`
        },
        {
          bg: "miumiu-chonger.png",
          fullName: "缪缪霓裳宠儿女士香水",
          name: "霓裳宠儿",
          id: 1,
          code: 766452,
          CNY: 569,
          subText: "DARING DARING",
          desc: "缪缪迷幻香",
          desc1: ` <div>调香师<strong>Alexis Dadier</strong></div>
            <div>灵感源于成熟老练</div>
            <div>与青春热忱的碰撞</div>`,
          desc2: `<div>清脆爽口的<strong>黑加仑</strong></div>
        <div>与丝绒般<strong>薰衣草</strong>互相吸引</div>
        <div>缓缓散发出令人迷醉的<strong>麝香</strong>气氛</div>`
        },
        {
          bg: "miumiu-wantong.png",
          fullName: "缪缪霓裳玩童女士香水",
          name: "霓裳玩童",
          id: 2,
          code: 766466,
          CNY: 569,
          subText: "SERIAL PLAYER",
          desc: "缪缪潮玩香",
          desc1: ` <div>由缪缪长期合作调香师</div>
            <div><strong>Daniela Andrier</strong>精心创作</div>
            <div>诠释生活是一个游乐场的理念</div>`,
          desc2: `<div>晶莹剔透的<strong>荔枝</strong></div>
        <div>令人垂涎欲滴</div>
        <div>与清冽明亮的<strong>橙花</strong>相互碰撞</div>
        <div>天然<strong>香草</strong>散发出愉悦迷人的香气</div>`
        },
        {
          bg: "miumiu-tianjiao.png",
          fullName: "缪缪霓天骄女士香水",
          name: "霓裳天骄",
          id: 3,
          code: 766454,
          CNY: 569,
          subText: "EYES ON ME",
          desc: "缪缪 C 位香",
          desc1: ` <div>由调香大师</div>
            <div><strong>Daniela Andrier</strong>精心调制</div>`,
          desc2: `<div><strong>山梅马卡龙</strong>的颓废香气</div>
        <div>拥抱新鲜<strong>玫瑰</strong>的迷人馥郁</div>
        <div>温暖<strong>安息香</strong>尽现闪耀无畏的现代优雅</div>`
        }
      ]
    };
  },
  methods: {
    nextPage() {
      if (this.item.id >= 0) {
        this.$store.commit("SET_COMMODITY", this.item);
        this.$router.push("fragrance-result");
      } else {
        this.$toast("请您选择一款香水~");
      }
    },
    selectItem(item, index) {
      this.selectList1.forEach(v => (v.selected = false));
      item.selected = !item.selected;
      this.item = this.commodity[index];
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  background-color: #ffede9;
  .top-box {
    padding-top: 4vw;
    background-color: #ffede9;
    text-align: center;
    .logo {
      width: 35vw;
    }
    .chose {
      margin-top: 4vw;
      width: 80vw;
    }
  }
  /deep/ .van-grid-item__content {
    padding: 0;
  }
  height: 100vh;

  .image {
    /deep/ .van-image__img {
      border: 3px solid #67c555;
    }
  }

  .item {
    font-size: 0;
    position: relative;
    .selected {
      position: absolute;
      bottom: 10px;
      right: 8px;
      width: 25px;
    }
  }

  .title {
    font-size: 2vh;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .footer {
    padding: 20px 0;
    display: flex;
    justify-content: center;
    .btn {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url("../assets/image/icon_result.png") no-repeat;
      background-size: contain;
      background-position-x: 75%;
    }
  }
}
</style>
