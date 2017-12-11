<template>
    <div class="page">
      <MHeader title="编辑页"></MHeader>
      <div class="scroll-content">
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
            <button @click="add">添加图书</button>
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
              book:{
                bookName:'',
                bookCover:'',
                bookInfo:''
              }
            }
        },
    components:{MHeader},
    created() {
        },
    methods: {
          add(){
            axios.post('/api/book',this.book).then(res=>{
              this.$router.push('/list')
            })
          }
        },
    computed: {},
    mounted() {

    }
  }
</script>
<style scoped lang="less">
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
