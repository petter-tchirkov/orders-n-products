<script setup lang="ts">
const { error, pending } = await useProducts()

const products = computed(() => useProductsStore().products)
const filterKey = ref('')

const getProductTypes = computed(() => {
  if (!products.value) {
    return []
  }
  return Array.from(new Set(products.value.map(product => product.type)))
})

const filteredProducts = computed(() => products.value?.filter(product => product.type.includes(filterKey.value)))
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
