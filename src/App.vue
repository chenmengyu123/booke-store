<template>
  <div class="page">
    <!--keep-alive缓存-->
    <transition name="slide">
      <keep-alive>
        <router-view style="position: absolute;top:0;left: 0;width: 100%;"></router-view>
      </keep-alive>
    </transition>
    <MNav></MNav>
  </div>
</template>

<script>
  import MNav from './components/Nav.vue'
export default {
  name: 'app',
  components:{MNav}
}
</script>

<style>
  .slide-enter{
    transform: translateX(100%);
  }
  .slide-enter-active{
    transition:all .3s;
  }
  .slide-leave-active{
    transform: translateX(-100%);
    transition:all .3s;
  }
</style>
