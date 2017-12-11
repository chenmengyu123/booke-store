<template>
    <div class="update">
      <header>
        <i class="iconfont icon-houtui" @click="back"></i>
          修改
      </header>
      <ul class="form-list">
        <li>
          <label for="bookName">书名</label>
          <input type="text" placeholder="请输入书名" id="bookName" v-model="book.bookName">
        </li>
        <li>
          <label for="bookCover">封面地址</label>
          <input type="text" placeholder="请输入封面地址" id="bookCover" v-model="book.bookCover">
        </li>
        <li>
          <label for="bookInfo">摘要</label>
          <input type="text" placeholder="请输入摘要" id="bookInfo" v-model="book.bookInfo">
        </li>
        <li>
          <button @click="update">修改图书</button>
        </li>
      </ul>
    </div>
</template>
<script>
  import axios from 'axios';
    export default {
        data() {
            return {
              book:{
                bookName:'',
                bookCover:'',
                bookInfo:''
              }
            }
        },
        created() {
        },
        methods: {
          back(){
            this.$router.go(-1);
          },
          getBook(){
            axios.get('/api/book?id='+this.$route.params.id).then(res=>{
              this.book=res.data;
            })
          },
          update(){
            axios.put('/api/book?id='+this.book.id,this.book).then(res=>{
              this.back();
            })
          }
        },
      created(){
        this.getBook();
      },
      activated(){
        this.getBook();
      }
    }
</script>
<style scoped lang="less">
  .update{
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 9999;
    header{
      height: 45px;
      background: #f1f1f1;
      align-items: center;
      display: flex;
      position: relative;
      justify-content: center;
      i{
        position: absolute;
        left: 20px;
      }
    }
  }
  .form-list{
    padding: 10px 30px;
    li{
      display: flex;
      flex-direction: column;
      height: 65px;
      input {
        margin-top: 5px;
        box-shadow: none;
        border: 1px solid #666;
        height: 25px;
      }
      button{
        height: 30px;
      }
    }
  }
</style>
