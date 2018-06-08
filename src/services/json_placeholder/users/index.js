import axios from 'axios'

//Axios позволяет нам определить базовый экземпляр, в котором мы можем определить URL-адрес и любые другие элементы конфигурации

export const HTTP = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`,
})