import Vue from 'vue'
import Router from 'vue-router'
//import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if(to.params.name){
          next()
        } else {
          next({ name: 'Login' })
        }
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
/*     {
      path: '/login',
      name: 'Login',
      component: Login
    } */
  ]
})
