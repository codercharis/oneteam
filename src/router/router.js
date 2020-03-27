import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../Home')
const Work = () => import('../views/Work')
const Member = () => import('../views/Member')
const Calendar = () => import('../views/Calendar')
const News = () => import('../views/News')
const Profile = () => import('../views/Profile')
const Login = () => import('../views/Login')
const Rigister = () => import('../views/Rigister')
const Skip = () => import('../views/Skip')
const False = () => import('../views/False')
const Revise = () => import('../views/Revise')

Vue.use(VueRouter)

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/home',
      component: Home,
      children: [
        // {
        //   path: '*',
        //   redirect: 'work'
        // },
        {
          path: 'work',
          component: Work,
          meta: {
            title: '工作'
          }
        },
        {
          path: 'member',
          component: Member,
          meta: {
            title: '成员'
          }
        },
        {
          path: 'calendar',
          component: Calendar,
          meta: {
            title: '日历'
          }
        },
        {
          path: 'news',
          component: News,
          meta: {
            title: '消息'
          }
        },
        {
          path: 'profile',
          component: Profile,
          meta: {
            title: '个人中心'
          }
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/rigister',
      component: Rigister,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/revise',
      component: Revise,
      meta: {
        title: '修改密码'
      }
    },
    {
      path: '/skip',
      component: Skip,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/false',
      component: False,
      meta: {
        title: '404'
      }
    }
  ]
})

// 前置守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
