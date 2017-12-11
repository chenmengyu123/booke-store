<template>
    <div class="header">
        {{title}}
    </div>
</template>
<script>
    export default {
      props:{
        title:{}
      }
    }
</script>
<style scoped>
  .header{
    background-color: white;
    text-align: center;
    height: 45px;
    line-height: 45px;
    width: 100%;
    position: fixed;
    z-index: 200;
  }
</style>
