import axios from 'axios'

const api = axios.create({
    baseURL: 'https://my-app-movies-default-rtdb.firebaseio.com'
})

const apiMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key : "15fc20296b50ae1f528d142eb6fc541c"
    }
})


export { api, apiMovies }