<template>
  <div class="container mx-auto px-6 py-7 lg:py-14">
    <Header />
    <router-view v-slot="{ Component, route }">
      <transition
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import Header from './views/header.vue'
</script>

<style></style>
