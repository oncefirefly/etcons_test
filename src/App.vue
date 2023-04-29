<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
body {
  font-family: var(--font-family);
}

main {
  margin: 50px auto;
  max-width: 1200px;
}
</style>
