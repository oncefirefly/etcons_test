<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'

const inputValue = ref('')

const getTitle = async (url: string) => {
  if (url.length) {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, { mode: 'no-cors' })
      .then((response) => {
        if (response.ok) return response.json()
        throw new Error('Network response was not ok.')
      })
      .then((data) => console.log(data.contents))
  }

  return
}
</script>

<template>
  <div class="prime-link_container">
    <label class="prime-link_label" for="link">Link</label>
    <InputText
      class="prime-link_input"
      id="link"
      v-model="inputValue"
      placeholder="https://"
      v-on:blur="getTitle(inputValue)"
    />
  </div>
</template>

<style scoped>
.prime-link_container {
  display: flex;
  flex-direction: column;
}

.prime-link_label {
  margin-bottom: 5px;
}

.prime-link_input {
  width: 30%;
}
</style>
