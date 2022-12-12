<template>
  <div id="app">
    <h1>IMDB Movie Search</h1>
    <input
      v-model="query"
      placeholder="Search for a movie..."
      @keyup="searchMovies"
    />
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      query: '',
      movies: []
    }
  },
  methods: {
    async searchMovies() {
      const { data } = await axios.get('http://www.omdbapi.com', {
        params: {
          s: this.query,
          apikey: 'e61a7b7d'
        }
      })
      this.movies = data.Search
    }
  }
}
</script>
