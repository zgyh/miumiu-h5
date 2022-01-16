<template>
  <div class="container">
    <div class="title">点击选择一款香水</div>
    <van-grid :border="false" :column-num="2" :gutter="10">
      <van-grid-item @click="selectItem(item, index)" v-for="(item, index) in selectList1" :key="item.id">
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
          subText: "HEAD IN THE CLOUDS"
        },
        {
          bg: "miumiu-chonger.png",
          fullName: "缪缪霓裳宠儿女士香水",
          name: "霓裳宠儿",
          id: 1,
          subText: "DARING DARING"
        },
        {
          bg: "miumiu-wantong.png",
          fullName: "缪缪霓裳玩童女士香水",
          name: "霓裳玩童",
          id: 2,
          subText: "SERIAL PLAYER"
        },
        {
          bg: "miumiu-tianjiao.png",
          fullName: "缪缪霓天骄女士香水",
          name: "霓裳天骄",
          id: 3,
          subText: "EYES ON ME"
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
  /deep/ .van-grid-item__content {
    padding: 0;
  }
  height: 100vh;
  padding: 70vw 0 0 0;

  .image {
    /deep/ .van-image__img {
      border: 3px solid #67c555;
    }
  }

  .item {
    position: relative;
    .selected {
      position: absolute;
      bottom: 10px;
      right: 8px;
      width: 25px;
    }
  }

  background: #fff url("../assets/image/bg01.png") top / contain no-repeat;
  .title {
    font-size: 2vh;
    color: #ccc;
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
