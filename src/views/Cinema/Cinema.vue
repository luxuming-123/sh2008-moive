<template>
  <div class="header">
    <ul>
      <div class="hend">
        <p @click="city()">城市</p>
      </div>
      <li v-for="(item, index) in cinemas" :key="index">
        <div class="two">{{ item.name }}</div>
        <div class="one"><b>{{ item.address }}</b> <span>{{item.lowPrice / 100}}元</span></div>
      </li>
    </ul>
  </div>
</template>

<script>
import { cinemaListData } from "@/api/api";
export default {
  data() {
    return {
      cinemas: [],
    };
  },
  async mounted() {
    let ret = await cinemaListData();
    this.cinemas = ret.data.data.cinemas;
  },
  methods: {
    city: function () {
      this.$router.push({ path: "/city" });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  .hend {
    width: 90%;
    height: 30px;
    margin: 5px auto;
  }
  p {
    border: 1px solid red;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  li {
    min-height: 50px;
    width: 90%;
    border: 1px solid #000;
    margin: 5px 5%;
    padding: 5px 0;
    
  }
  .one{
    width: 90%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .two{
    width: 100%;
  }
  span{
    width: 40px;
    height: 30px;
    float: right;
    margin-right: 10px;
    color: red;
  }
  b{
    float: left;
    width: 70%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
}
</style>