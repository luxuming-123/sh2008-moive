<template>
  <div class="detail">
    <div class="img">
      <img v-lazy="film.poster" />
    </div>
    <div>
      <div>{{ film.name }}</div>
      <div>{{ film.category }}</div>
      <div>{{ film.premiereAt | parsePremiereAt }}上映</div>
      <div>{{ film.nation }} | {{ film.runtime }} 分钟</div>
      <div>
        {{ film.synopsis }}
      </div>
      <div class="s2">
        <Swiper :key="'actors_' + film.actors.length">
          <!-- 循环输出图片信息 -->
          <div
            v-for="(item, index) in film.actors"
            :key="index"
            class="swiper-slide"
          >
            <img v-lazy="item.avatarAddress" alt="" />
          </div>
        </Swiper>
      </div>
      <div>
        <p>剧照</p>
        <br>
        <Swiper :key="'photos_' + film.photos.length">
          <!-- 循环输出图片信息 -->
          <div
            v-for="(item, index) in film.photos"
            :key="index"
            class="swiper-slide"
            id="one"
          >
            <img v-lazy="item" alt="" />
          </div>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { moiveDetailData } from "@/api/api";
// 引入moment
import moment from "moment";
import Swiper from "@/components/Swiper";
export default {
  data() {
    return {
      film: {
        actors: [],
        photos:[]
      },
    };
  },
  async mounted() {
    let ret = await moiveDetailData(this.$route.params.filmId);
    this.film = ret.data.data.film;
  },
  filters: {
    parsePremiereAt: function (value) {
      return moment(value * 1000).format("YYYY-MM-DD");
    },
  },
  components: {
    Swiper,
  },
  created() {
    //发起通知，通知app.vue组件移除菜单
    this.eventBus.$emit('footernav',false)
  },
  beforeDestroy() {
    //发起通知，通知app.vue组件恢复菜单
    this.eventBus.$emit('footernav',true)
  },
};
</script>

<style lang="scss" scoped>
.detail {
  .swiper-slide {
    img {
      width: 85px;
    }
  }
  #one{
    img{
      width: 150px;
      height: 200px;
      padding: 0 8px;
    }
  }
  .img {
    width: 100%;
    height: 260px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .s2{
    width: 100%;
    min-height: 200px;

  }
}
</style>