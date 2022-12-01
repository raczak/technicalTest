import { defineStore } from 'pinia'
import axios from 'axios'

const API_KEY = 'e61a7b7d'
const BASE_URL = 'https://omdbapi.com'

export default defineStore({
  state: () => ({
    movies: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchMovies(keyword) {
      await axios
        .get(`${BASE_URL}/?apikey=${API_KEY}&s=${keyword}&page=1`)
        .then((response) => {
          this.movies = response.data.results
        })
    }
  }
})
