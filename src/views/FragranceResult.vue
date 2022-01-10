<template>
  <div class="container">
    <div>
      <div class="p1">
        <div class="a">DARING DARING</div>
        <div class="b">缪缪霓裳宠儿女士香水</div>
      </div>
      <div class="p2">缪缪迷幻想</div>
      <div>
        <div>调香师Alexis Dadier</div>
        <div>灵感源于成熟老练</div>
        <div>与青春热忱的碰撞</div>
      </div>
      <div>
        <div>清脆爽口的黑加仑</div>
        <div>与丝绒般薰衣草互相吸引</div>
        <div>缓缓散发出令人迷醉的麝香气氛</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FragranceResult",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  padding: 89vw 0 0 0;
  background: #fff url("../assets/image/fragranceResult/miumiu-chong_er.png") top / contain
    no-repeat;

  .p1 {
    padding: 8vw 0 0 43.3vw;
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
