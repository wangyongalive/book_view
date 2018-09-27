import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import MovieDetail from '../pages/movieDetail.vue'
import NewDetail from '../pages/newDetail.vue'
import MovieList from '../pages/moviesList.vue'
import LoginPage from '../pages/loginPage.vue'
import UserInfo from '../pages/userInfo.vue'
import RegisterPage from '../pages/registerPage.vue'
import FindPasswordPage from '../pages/findPasswordPage.vue'
import SendEmail from '../pages/sendEmail.vue'
import Home from '../pages/index'
Vue.use(Router)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'home'
    }
  },
  {
    path: '/movieDetail',
    component: MovieDetail
  },
  {
    path: '/newDetail',
    component: NewDetail
  },
  {
    path: '/movieList',
    component: MovieList
  },
  {
    path: '/loginPage',
    component: LoginPage
  },
  {
    path: '/userInfo',
    component: UserInfo
  },
  {
    path: '/register',
    component: RegisterPage
  },
  {
    path: '/findPassword',
    component: FindPasswordPage
  },
  {
    path: '/sendEmail',
    component: SendEmail
  }
]
const router = new Router({routes})
export default router
