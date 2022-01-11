<template>
  <div class="container" :style="{ backgroundImage: `url(${bg})` }">
    <!--    <div>-->
    <!--      <div class="p1">-->
    <!--        <div class="a">DARING DARING</div>-->
    <!--        <div class="b">缪缪霓裳宠儿女士香水</div>-->
    <!--      </div>-->
    <!--      <div class="p2">缪缪迷幻想</div>-->
    <!--      <div>-->
    <!--        <div>调香师Alexis Dadier</div>-->
    <!--        <div>灵感源于成熟老练</div>-->
    <!--        <div>与青春热忱的碰撞</div>-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <div>清脆爽口的黑加仑</div>-->
    <!--        <div>与丝绒般薰衣草互相吸引</div>-->
    <!--        <div>缓缓散发出令人迷醉的麝香气氛</div>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="footer">
      <van-button style="border: 1px solid #1b1b1b; margin-right: 10px" round @click="back()">
        返回上一步
      </van-button>
      <van-button class="btn" round type="primary" @click="nextPage()">
        <div>为TA装扮</div>
      </van-button>
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
  created() {},
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
.container {
  height: 100vh;
  padding: 90vh 0 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .footer {
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
  .p1 {
    //padding: 8vw 0 0 43.3vw;
    .a {
      font-size: 3.5vw;
    }
    .b {
      font-weight: 900;
      font-size: 4.8vw;
    }
  }
  .p2 {
    font-size: 3.4vw;
    padding: 4.3vw 0 0 43.3vw;
  }
}
</style>
