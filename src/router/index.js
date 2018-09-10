import Vue from 'vue'
import Router from 'vue-router'
import recommend from '../components/recommend/recommend'
import sun from '../components/sun/sun'
import hot from '../components/hot/hot'
import imgs from '../components/imgs/imgs'
import login from '../components/login/login'
import whole from '../components/whole/whole'
import old_img from '../components/old_img/old_img'
import imgs_story from '../components/imgs_story/imgs_story'
import photography from '../components/photography/photography'

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
   		path:'/imgs/',
   		component:imgs,
      children:[
          {
            path:'/',
            component:whole
          },
          {
            path:'whole',
            component:whole
          },
          {
            path:'old_img',
            component:old_img
          },
          {
            path:'imgs_story',
            component:imgs_story
          },
          {
            path:'photography',
            component:photography
          },
      ],
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
