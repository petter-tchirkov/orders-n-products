<script setup lang="ts">
import type { Product } from '~/types/order'

const { data, error, pending } = await useFetch<Product[]>('/api/products')

const getProductTypes = computed(() => {
  if (!data.value) {
    return []
  }
  return Array.from(new Set(data.value.map(product => product.type)))
})

const filterKey = ref('')

const filteredProducts = computed(() => {
  return data.value?.filter(product => product.type.includes(filterKey.value))
})
</script>

<template>
  <section>
    <p v-if="pending">
      Loading...
    </p>
    <p v-else-if="error">
      Error: {{ error.message }}
    </p>
    <article v-else>
      <app-dropdown :options="getProductTypes" class="mb-10" @filter="filterKey = $event" />
      <ul>
        <li v-for="product in filteredProducts" :key="product.id">
          <products-item :product="product" />
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped></style>
