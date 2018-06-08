import axios from 'axios'
import store from '@/store'

//Axios позволяет нам определить базовый экземпляр, в котором мы можем определить URL-адрес и любые другие элементы конфигурации

const baseUrl = 'https://jsonplaceholder.typicode.com'
const postsGetUrl = `${baseUrl}/posts?_start=0&_limit=5`
const postsPostUrl = 'https://jsonplaceholder.typicode.com/posts'

export default {
    //Создаем запрос, когда компонент будет создан
    getAllPosts() {
        return axios
        .get(postsGetUrl)
        .then(response => {
            store.dispatch('setPosts', response.data) //JSON ответ будет автоматически распарсен
        })
    },
    postNewPost(data) {
        return axios
        .post(postsPostUrl, {
          params: {
            'userId': data.userId, 
            'title': data.title, 
            'body': data.body
            }
        })
        .then(response => {
            if (response.status === 201) {
                store.dispatch('setPosts', response.data)
            }
            else (console.info(response.status));
        })
    },
    deleteThisPost(id) {
        return axios
        .delete(baseUrl + `/posts/${id}`)  
    },
    editPost(id, userId, title, body) {
        return axios
        .put(baseUrl + `/posts/${id}`, {
          params: {
          'userId': userId, 
          'title': title, 
          'body': body
          }
        })
        .then(response => {
            if (response.status < 400) {
                console.info(response.status);
            }
        });
    }
}