import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //Текущее состояние приложения лежит здесь
    posts: [],
    users: [],
    photos: []
  },
  getters: { 
    //Вычисляем производное состояние на основе текущего состояния. Больше похоже на вычисленное свойств 
    posts: state => state.posts,
    users: state => state.users,
    photos: state => state.photos,
    photosLength: state => state.photos.length
  }, 
  mutations: {
    //Mutate текущее состояние
    setPosts: (state, posts) => state.posts = posts,
    setUsers: (state, users) => state.users = users,
    setPhotos: (state, items) => state.photos = state.photos.concat(items)
  },
  actions: {
    //Получаем данные с сервера и отправляем их мутациям для изменения текущего состояния
    setPosts: ({commit}, payload) => commit('setPosts', payload),
    setUsers: ({commit}, payload) => commit('setUsers', payload),
    setPhotos: ({commit}, payload) => commit('setPhotos', payload)
  }
})
