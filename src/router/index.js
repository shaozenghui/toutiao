import Vue from 'vue'
import Router from 'vue-router'
import recommend from '../components/recommend/recommend'
import sun from '../components/sun/sun'
import hot from '../components/hot/hot'
import imgs from '../components/imgs/imgs'
import login from '../components/login/login'

Vue.use(Router)
export default new Router({
  routes: [
   	{
   		path:'/recommend',
   		component:recommend
   	},
   	{
   		path:'/sun',
   		component:sun
   	},
   	{
   		path:'/hot',
   		component:hot
   	},
   	{
   		path:'/imgs',
   		component:imgs
   	},
   	{
   		path:'/login',
   		component:login
   	},
   	{
   		path:'*',
   		redirect:'recommend'
   	}
  ],
  linkActiveClass:'nav_class'
})
