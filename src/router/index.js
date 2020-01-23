import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
// import Home from '../views/Home.vue'
import Beranda from '../views/Beranda.vue'
import Login from '../views/Login.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'
import Petugas from '../views/Petugas.vue'
import DataSiswa from '../views/DataSiswa.vue'
import Poin from '../views/Poin.vue'
import Pelanggaran from '../views/Pelanggaran.vue'
import InputPelanggaran from '../views/InputPelanggaran.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    components: {default: Login}
  },
  {
    path: '/',
    name: 'beranda',
    components: {default: Beranda, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },

  {
    path: '/petugas',
    name: 'petugas',
    components: {default: Petugas, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/datasiswa',
    name: 'datasiswa',
    components: {default: DataSiswa, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/poin',
    name: 'poin',
    components: {default: Poin, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/pelanggaran',
    name: 'pelanggaran',
    components: {default: Pelanggaran, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/inputpelanggaran',
    name: 'inputpelanggaran',
    components: {default: InputPelanggaran, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/beranda',
    name: 'beranda',
    components: {default: Beranda, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router
