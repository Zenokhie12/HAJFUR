<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'

const showAbout = ref(false)
</script>

<template>
  <nav>
    <a href="#" @click.prevent="showAbout = false">Furnitures</a>
    <a href="#" @click.prevent="showAbout = true">Package</a>
  </nav>
  <HelloWorld v-if="!showAbout" msg="Vite + Vue" />
  <About v-if="showAbout" />
</template>

<style scoped>
nav {
  min-width: 200px;
  max-width: auto;
  margin: 0 auto 20px auto;
  padding: 15px 18px;
  background-color: #9D4EDD; 
  border-radius: 8px;
  box-shadow: 1px 1px 8px #000;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
