<script setup>
import { onMounted, ref } from 'vue'
import Movies from '../components/Movies.vue'
import Search from '../components/Search.vue'
import IsLoading from '../components/IsLoading.vue'
import useMoviesStore from '../store/movies'

const store = useMoviesStore()

const keyword = ref(
  localStorage.getItem('keyword')
    ? localStorage.getItem('keyword')
    : 'One Piece'
)
const scrollComponent = ref(null)

let totalPage = 0
setTimeout(() => {
  totalPage = Math.ceil(store.totalResults / 10)
}, 1000)

const handleScroll = (e) => {
  const element = scrollComponent.value
  if (element) {
    if (element.getBoundingClientRect().bottom < window.innerHeight) {
      store.page++
      if (store.page <= totalPage) {
        store.nextPage(store.page)
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  store.fetchMovies(keyword.value)
})
</script>

<template>
  <main>
    <Search />

    <article ref="scrollComponent">
      <Movies :movies="store.movies" />
    </article>
    <IsLoading v-if="store.isLoading" />
  </main>
</template>
