import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containers/Home.vue'
import List from '../containers/List.vue'
import Add from '../containers/Add.vue'
import Update from '../containers/Update.vue'
Vue.use(Router);
const routes=[
  {path:'/home',component:Home},
  {path:'/list',component:List},
  {path:'/add',component:Add},
  {path:'/update/:id',component:Update,name:'update'},
  {path:'*',redirect:'/home'}//匹配不到跳转到首页，相当于404
];
export default new Router({
  routes
})
