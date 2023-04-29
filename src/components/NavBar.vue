<script setup lang="ts"></script>

<template>
  <nav>
    <router-link to="/">home</router-link>
    <router-link to="/prime-link">prime link</router-link>
  </nav>
</template>

<style scoped>
nav {
  margin: 0 auto;
  height: 50px;
  max-width: 1200px;
  display: flex;
  align-items: center;
  column-gap: 10px;
}

a {
  text-transform: uppercase;
  text-decoration: none;
  color: #111;
}
</style>
