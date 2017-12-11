<template>
  <div class="page">
    <MHeader title="首页"></MHeader>
    <div class="scroll-content" >
      <Swiper :swiperSliders="arr"></Swiper>
      <h3>最新推荐</h3>
      <ul class="hot-list" v-if="books.length">
        <li v-for="book in books" >
          <img :src="book.bookCover" alt="">
          <span>{{book.bookName}}</span>
        </li>
      </ul>
      <Loading ></Loading>
    </div>
  </div>
</template>
<script>
  import MHeader from '../components/Header.vue'
  import Swiper from '../components/Swiper.vue'
  import axios from 'axios';
  import Loading from '../components/Loading.vue'

  export default {
    data(){
      return {
        arr:[],
        books:[]
      }
    },
    components: {MHeader,Swiper,Loading},
    created(){
      axios.get('/api/sliders').then(res=>{
        this.arr=res.data;
      }).catch(err=>{
        console.log(err);
      });
      this.getHot();
    },
    methods:{
      getHot(){
        axios.get('/api/hot').then(res=>{
          setTimeout(()=>{
            this.books=res.data;
          },2000);
        }).catch(err=>{
          console.log(err);
        })
      }
    },
    activated(){
      this.getHot();
    }
  }
</script>
<style scoped lang="less">
  h3{
    line-height: 35px;
    color: red;
    background-color: #fff;
  }
  .hot-list{
    display: flex;
    flex-wrap: wrap;

    li{
      width:50%;
      margin-top: 5px;
      img{
        width: 100%;
      }
      span{
        background-color: white;
        color:black;
        display: inline-block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>
