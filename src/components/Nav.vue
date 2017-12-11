<template>
    <nav>
        <router-link to="/home">
          <i class="iconfont icon-all"></i>
          <span>首页</span>
        </router-link>
        <router-link to="/list">
          <i class="iconfont icon-viewlist"></i>
          <span>列表</span>
        </router-link>
        <router-link to="/add">
          <i class="iconfont icon-edit"></i>
          <span>添加</span>
        </router-link>
    </nav>
</template>
<script>
    export default {
        data() {
            return {}
        },
        created() {
        },
        methods: {},
        computed: {},
        mounted() {
        }
    }
</script>
<style scoped lang="less">
  nav{
    position: fixed;
    left: 0;
    width: 100%;bottom: 0;
    height:50px;
    display: flex;
    border-top:1px solid #ccc;
    background-color: white;
    a{
      display: flex;;
      flex:1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .router-link-active{
      color: red;
    }
  }
</style>
