<template>
    <div class="page">
       <MHeader title="列表页"></MHeader>
      <div class="scroll-content">
        <ul class="list">
          <li v-for="book in books">
            <img :src="book.bookCover" alt="">
            <div>
              <h3>{{book.bookName}}</h3>
              <p>{{book.bookInfo}}</p>
              <div class="btn-list">
                <button @click="remove(book.id)">删除</button>
                <!--通过对象传递params，需要给路径起个名字，否则不生效-->
                <router-link tag="button" :to="{name:'update',params:{id:book.id}}">修改</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import MHeader from '../components/Header.vue'
  import axios from 'axios'
  export default {
    data() {
      return {
        books: []
      }
    },
    methods:{
      getBooks(){
        axios.get('/api/book').then(res=>{
          this.books=res.data;
        })
      },
      remove(id){
        axios.delete('/api/book?id='+id).then(res=>{
          this.books=this.books.filter(item=>item.id!=id);
        })
      }

    },
    components: {MHeader},
    created() {
        this.getBooks();

    },
    activated(){//缓存后依然会执行的函数
      this.getBooks();
    }
  }
</script>
<style scoped lang="less">
  .list{
    margin: 10px 2%;
    li{
      padding:20px 0;
      display: flex;
      border-bottom: 1px solid grey;
      img{
        width: 120px;
        height: 90px;
      }
      div{
        margin-left:15px;
        display: flex;
        flex-direction: column;
        .btn-list{
          margin-left: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          button{
            width: 50px;
            height: 30px;
          }
        }
      }

    }
  }
</style>
