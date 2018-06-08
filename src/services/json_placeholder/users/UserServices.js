import {HTTP} from './index'
import store from '@/store'
import router from '@/router';

export default {
    getAllUsers() {
        return HTTP
        .get('users?_start=0&_limit=3')
        .then(response => {
            store.dispatch('setUsers', response.data) //JSON ответ будет автоматически распарсен
        })
    },
    deleteThisUser(id) {
        return HTTP
        .delete(`/posts/${id}`)  
    },
    editUsers(id, username, name, email, website) {
        return HTTP
        .put(`users/${id}`, {
            params: {
                'username': username, 
                'name': name, 
                'email': email,
                'website': website
            }
        })
        .then(response => {
            if (response.status < 400) {
                console.info(response.status);
            }
        });
    }
}