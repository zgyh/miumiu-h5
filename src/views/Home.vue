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
      PICK你喜欢的2张香调图片(<i style="color: #1b1b1b">{{ selectedArr1.length }}</i
      >/2)
    </div>
    <van-grid :border="false" :column-num="4" :gutter="10">
      <van-grid-item
        @click="selectItem('selectedArr1', selectList1, index)"
        v-for="(item, index) in selectList1"
        :key="item.id"
      >
        <div class="item">
          <van-image :class="item.selected ? 'image' : ''" :src="item.img" />
          <img v-if="item.selected" class="selected" src="../assets/image/selected.png" alt="" />
        </div>
      </van-grid-item>
    </van-grid>
    <div class="title title-2">PICK你喜欢的2张时尚图片({{ selectedArr2.length }}/2)</div>
    <van-grid :border="false" :column-num="4" :gutter="10">
      <van-grid-item
        @click="selectItem('selectedArr2', selectList2, index)"
        v-for="(item, index) in selectList2"
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
      selectList1: [
        {
          id: 0,
          img: require("../assets/image/choose-test/1-1.png"),
          selected: false
        },
        {
          id: 1,
          img: require("../assets/image/choose-test/1-2.png"),
          selected: false
        },
        {
          id: 2,
          img: require("../assets/image/choose-test/1-3.png"),
          selected: false
        },
        {
          id: 3,
          img: require("../assets/image/choose-test/1-4.png"),
          selected: false
        },
        {
          id: 4,
          img: require("../assets/image/choose-test/1-7.png"),
          selected: false
        },
        {
          id: 5,
          img: require("../assets/image/choose-test/1-8.png"),
          selected: false
        },
        {
          id: 6,
          img: require("../assets/image/choose-test/1-5.png"),
          selected: false
        },
        {
          id: 7,
          img: require("../assets/image/choose-test/1-6.png"),
          selected: false
        }
      ],
      selectList2: [
        {
          id: 0,
          img: require("../assets/image/choose-test/2-1.png"),
          selected: false
        },
        {
          id: 1,
          img: require("../assets/image/choose-test/2-2.png"),
          selected: false
        },
        {
          id: 2,
          img: require("../assets/image/choose-test/2-3.png"),
          selected: false
        },
        {
          id: 3,
          img: require("../assets/image/choose-test/2-4.png"),
          selected: false
        },
        {
          id: 4,
          img: require("../assets/image/choose-test/2-5.png"),
          selected: false
        },
        {
          id: 5,
          img: require("../assets/image/choose-test/2-6.png"),
          selected: false
        },
        {
          id: 6,
          img: require("../assets/image/choose-test/2-7.png"),
          selected: false
        },
        {
          id: 7,
          img: require("../assets/image/choose-test/2-8.png"),
          selected: false
        }
      ],
      selectedArr1: [],
      selectedArr2: [],
      commodity: {
        yunxiao: {
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
        chonger: {
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
        wantong: {
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
        tianjiao: {
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
      }
    };
  },
  methods: {
    nextPage() {
      const key = this.getCommdity();
      console.log(key);
      if (this.selectedArr1.length === 2 && this.selectedArr2.length === 2) {
        this.$store.commit("SET_COMMODITY", this.commodity[key]);
        this.$router.push("fragrance-result");
      } else {
        this.$toast("请您选择完成后再看结果~");
      }
    },
    selectItem(slk, list, index) {
      const id = list[index].id;
      const item = this[slk].find(v => v.id === id);
      if (item) {
        this[slk] = this[slk].filter(v => v.id !== id);
        list[index].selected = false;
      } else {
        if (this[slk].length < 2) {
          this[slk].push(list[index]);
          list[index].selected = !list[index].selected;
        } else {
          this.$toast("您已经选两张了");
        }
      }
    },
    getCommdity() {
      const obk = {
        0: "yunxiao",
        1: "yunxiao",
        2: "chonger",
        3: "chonger",
        4: "wantong",
        5: "wantong",
        6: "tianjiao",
        7: "tianjiao"
      };
      const arr = [...this.selectedArr1, ...this.selectedArr2];
      const se = [];
      for (let i = 0; i < arr.length; i++) {
        se.push(obk[arr[i].id]);
      }
      const yunxiao = se.filter(v => v === "yunxiao").length;
      const chonger = se.filter(v => v === "chonger").length;
      const wantong = se.filter(v => v === "wantong").length;
      const tianjiao = se.filter(v => v === "tianjiao").length;

      const result = [yunxiao, chonger, wantong, tianjiao];

      if (result.filter(v => v === 1).length === 4) {
        const list = ["yunxiao", "chonger", "wantong", "tianjiao"];
        return list[Math.floor(Math.random() * list.length)];
      } else if (result.filter(v => v === 2).length === 2) {
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
        return list[Math.floor(Math.random() * list.length)];
      } else {
        const list = ["yunxiao", "chonger", "wantong", "tianjiao"];
        return list[this.arrayMaxIndex(result)];
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
