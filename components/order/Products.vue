<script setup lang="ts">
import type { Product } from '~/types/order'

const props = defineProps<{
  title: string
  products: Product[]
}>()

const isModalShown = ref(false)
provide('isModalShown', isModalShown)
function openModal() {
  isModalShown.value = true
}
</script>

<template>
  <div class="flex flex-col bg-base-300 p-2 grow">
    <h2>{{ props.title }}</h2>
    <ul class="flex flex-col gap-3">
      <li v-for="product in props.products" :key="product.id">
        <NuxtLink to="" class="flex items-center w-full justify-between">
          <div class="flex items-center gap-3">
            <img :src="product.photo" :alt="product.title" class="w-16 h-16">
            {{ product.title }}
          </div>
          <button class="btn btn-circle" @click="openModal">
            <Icon name="lucide:trash-2" />
          </button>
        </NuxtLink>
        <RemoveProductModal :product="product" />
      </li>
    </ul>
  </div>
</template>
