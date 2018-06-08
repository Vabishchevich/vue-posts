import Vue from 'vue'
import Router from 'vue-router'
import Posts from '../components/posts/Posts.vue'
import PostCreation from '../components/posts/PostCreation.vue'
import Users from '../components/users/Users.vue'
import Photos from '../components/photos/Photos.vue'

Vue.use(Router)

export default new Router({
//Режимом по умолчанию для Vue-router является hash mode, использующий хэш URL'а для симуляции полного URL-адреса, 
//что позволяет избежать перезагрузки страницы при изменении URL. Мы можем обойтись без хэша, используя history mode, 
//который работает с API history.pushState для достижения той же цели 
mode: 'history', 
  routes: [ //Каждый объект пути в конфигурации routes называется записью пути
    {
      path: '/',
      redirect: '/posts' //переадресация
    },
    {
      path: '', 
      redirect: '/posts' //переадресация
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/posts/create',
      name: 'postCreation',
      component: PostCreation
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    }
  ]
})
