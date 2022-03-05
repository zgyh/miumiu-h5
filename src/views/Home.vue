<template>
  <div class="container">
    <div class="top-box">
      <div>
        <p style="font-size: 3.5vw"><strong>STEP1</strong></p>
        <p style="font-size: 5vw"><strong>选图</strong>测试</p>
      </div>
      <div>
        <img class="logo" src="../assets/image/logo.png" alt="" />
      </div>
    </div>

    <div style="padding: 2.5vw 4vw">
      <p style="font-size: 3.5vw"><strong>CHOOSE</strong></p>
      <p style="font-size: 3.5vw">THE PICTURES YOU LIKE.</p>
    </div>

    <div class="title">
      PICK你喜欢的5张图片(<i style="color: #1b1b1b">{{ selectedList.length }}</i
      >/5)
    </div>
    <van-grid :border="false" :column-num="4" :gutter="8">
      <van-grid-item @click="selectItem(imgs, index)" v-for="(item, index) in imgs" :key="item.id">
        <div class="item">
          <van-image :class="item.selected ? 'image' : ''" :src="item.img" />
          <img v-if="item.selected" class="selected" src="../assets/image/selected.png" alt="" />
        </div>
      </van-grid-item>
    </van-grid>
    <div class="footer">
      <van-button round type="primary" @click="nextPage()">
        <div class="btn">查看结果</div>
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
      imgs: [],
      selectedList: [],
      commodity: {
        yunxiao: {
          bg: "miumiu-yunxiao.png",
          banner: "1-6.png",
          banner1: "2-5.png",
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
        chonger: {
          bg: "miumiu-chonger.png",
          banner: "1-1.png",
          banner1: "2-4.png",
          fullName: "缪缪霓裳宠儿女士香水",
          name: "霓裳宠儿",
          id: 1,
          code: 766452,
          CNY: 569,
          subText: "DARING DARLING",
          desc: "缪缪迷幻香",
          desc1: ` <div>调香师<strong>Alexis Dadier</strong></div>
            <div>灵感源于成熟老练</div>
            <div>与青春热忱的碰撞</div>`,
          desc2: `<div>清脆爽口的<strong>黑加仑</strong></div>
        <div>与丝绒般<strong>薰衣草</strong>互相吸引</div>
        <div>缓缓散发出令人迷醉的<strong>麝香</strong>气氛</div>`
        },
        wantong: {
          bg: "miumiu-wantong.png",
          banner: "1-3.png",
          banner1: "2-1.png",
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
        tianjiao: {
          bg: "miumiu-tianjiao.png",
          banner: "2-3.png",
          banner1: "1-4.png",
          fullName: "缪缪霓裳天骄女士香水",
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
      }
    };
  },
  created() {
    const imgs = [
      require("../assets/image/choose-test/1-1.png"),
      require("../assets/image/choose-test/1-2.png"),
      require("../assets/image/choose-test/1-3.png"),
      require("../assets/image/choose-test/1-4.png"),
      require("../assets/image/choose-test/1-5.png"),
      require("../assets/image/choose-test/1-6.png"),
      require("../assets/image/choose-test/1-7.png"),
      require("../assets/image/choose-test/1-8.png"),
      require("../assets/image/choose-test/2-1.png"),
      require("../assets/image/choose-test/2-2.png"),
      require("../assets/image/choose-test/2-3.png"),
      require("../assets/image/choose-test/2-4.png"),
      require("../assets/image/choose-test/2-5.png"),
      require("../assets/image/choose-test/2-6.png"),
      require("../assets/image/choose-test/2-7.png"),
      require("../assets/image/choose-test/2-8.png")
    ];
    this.imgs = imgs.map((v, index) => {
      return {
        id: index,
        img: v,
        selected: false
      };
    });
  },
  methods: {
    nextPage() {
      const commdity = this.getCommdity();
      if (this.selectedList.length === 5) {
        this.$store.commit("SET_COMMODITY", commdity);
        this.$router.push("fragrance-result");
      } else {
        this.$toast("请您选择完成后再看结果~");
      }
    },
    selectItem(list, index) {
      const id = list[index].id;
      const item = this.selectedList.find(v => v.id === id);
      if (item) {
        this.selectedList = this.selectedList.filter(v => v.id !== id);
        list[index].selected = false;
      } else {
        if (this.selectedList.length < 5) {
          this.selectedList.push(list[index]);
          list[index].selected = !list[index].selected;
        } else {
          this.selectedList[4].selected = false;
          this.selectedList.splice(4, 1);
          list[index].selected = true;
          this.selectedList.push(list[index]);
        }
      }
    },
    getCommdity() {
      const obk = {
        0: "chonger",
        1: "yunxiao",
        2: "wantong",
        3: "tianjiao",
        4: "tianjiao",
        5: "yunxiao",
        6: "chonger",
        7: "wantong",
        8: "wantong",
        9: "tianjiao",
        10: "tianjiao",
        11: "chonger",
        12: "yunxiao",
        13: "wantong",
        14: "chonger",
        15: "yunxiao"
      };
      const arr = [...this.selectedList];
      const se = [];
      for (let i = 0; i < arr.length; i++) {
        se.push(obk[arr[i].id]);
      }

      const yunxiao = se.filter(v => v === "yunxiao").length;
      const chonger = se.filter(v => v === "chonger").length;
      const wantong = se.filter(v => v === "wantong").length;
      const tianjiao = se.filter(v => v === "tianjiao").length;

      const result = [yunxiao, chonger, wantong, tianjiao];
      if (result.filter(v => v === 2).length === 2) {
        const list = [];
        if (yunxiao === 2) {
          list.push("yunxiao");
        }
        if (chonger === 2) {
          list.push("chonger");
        }
        if (wantong === 2) {
          list.push("wantong");
        }
        if (tianjiao === 2) {
          list.push("tianjiao");
        }
        const index = list[Math.floor(Math.random() * list.length)];
        return this.commodity[index];
      } else {
        const list = ["yunxiao", "chonger", "wantong", "tianjiao"];
        const index = list[this.arrayMaxIndex(result)];
        return this.commodity[index];
      }
    },
    arrayMaxIndex(arrs) {
      let max = arrs[0];
      let index = 0;
      for (let i = 1, ilen = arrs.length; i < ilen; i++) {
        if (arrs[i] > max) {
          max = arrs[i];
          index = i;
        }
      }
      return index;
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  background-color: #fff;
  .top-box {
    padding: 0 4vw;
    height: 18vw;
    background-color: #ffede9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 25vw;
    }
  }
  /deep/ .van-grid-item__content {
    padding: 0;
  }
  height: 100vh;

  .image {
    /deep/ .van-image__img {
      border: 3px solid #67c555;
      //border-radius: 20px;
    }
  }

  .item {
    position: relative;
    display: flex;
    .selected {
      position: absolute;
      bottom: 10px;
      right: 8px;
      width: 25px;
    }
  }

  .title {
    font-size: 2vh;
    color: #ccc;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .title-2 {
    margin-bottom: 3vw;
    color: #1b1b1b;
    text-align: center;
    background: url("../assets/image/choose_test_title_bg.png") center / 100% no-repeat;
    height: 10vw;
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
