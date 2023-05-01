<script setup lang="ts">
import MultiSelect from 'primevue/multiselect'
import { ref, type Ref } from 'vue'
import type OptionItem from '@/utils/types'

const selectedItems: Ref<Array<OptionItem>> = ref<Array<OptionItem>>([])

const options: Ref<Array<OptionItem>> = ref([
  { name: 'item1', code: '1' },
  { name: 'item2', code: '2' },
  { name: 'item3', code: '3' },
  { name: 'item4', code: '4' },
  { name: 'item5', code: '5' }
])

const handleResetClick = (): void => {
  selectedItems.value = []

  return
}
</script>

<template>
  <div class="multiselect_container">
    <MultiSelect
      v-model="selectedItems"
      :options="options"
      optionLabel="name"
      placeholder="Select Items"
      class="w-full md:w-20rem"
    >
      <template #option="slotProps">
        <div class="option_container">
          <img
            :alt="slotProps.option.name"
            src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
            :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
            style="width: 18px"
          />
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>
    </MultiSelect>
    <div v-if="selectedItems.length" class="reset-btn" :onClick="handleResetClick">
      <i class="pi pi-times"></i>
    </div>
  </div>
</template>

<style scoped>
.multiselect_container {
  display: flex;
  align-items: center;
}

.option_container {
  display: flex;
  align-items: center;
}

.reset-btn {
  margin-left: 10px;
  height: 100%;
  padding: 5px;
  border: 1px solid darkgray;
  border-radius: 5px;
}

.reset-btn:hover {
  background-color: darkgrey;
}
</style>
