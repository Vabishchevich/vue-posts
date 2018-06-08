import {HTTP} from './index'
import store from '@/store'
import router from '@/router';

export default {

  getPhotos (start, limit) {
    return HTTP
    .get(`photos?_start=${start}&_limit=${limit}`)
    .then(response => {
      store.dispatch('setPhotos', response.data)
    })
  }
}