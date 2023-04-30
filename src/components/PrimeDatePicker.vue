<script setup lang="ts">
import { ref, type Ref } from 'vue'
import Calendar from 'primevue/calendar'
import { renderTime } from '@/utils/utils'

const time: Ref<string> = ref<string>('')
</script>

<template>
  <div class="prime-datepicker_container">
    <label class="prime-datepicker_label" for="time">Time</label>
    <Calendar class="prime-datepicker" id="time" v-model="time" timeOnly />
  </div>
  <div v-if="time">{{ renderTime(time) }}</div>
</template>

<style>
.prime-datepicker_container {
  display: flex;
  flex-direction: column;
}

.prime-datepicker {
  width: 30%;
}
</style>
