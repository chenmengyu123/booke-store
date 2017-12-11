<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide,index) in swiperSliders" class="swiper-item" :key="index">
        <img :src=slide alt="" style="width: 100%">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    props:['swiperSliders'],
    data() {
      return {
        swiperOption: {
          setWrapperSize:true,
          observeParents:true,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          loop:true
        },

      }
    }
  }
</script>
<style scope lang="less">

  .swiper-item{
    /*float: left;*/
    img{
      width:100%;
    }

  }
</style>
