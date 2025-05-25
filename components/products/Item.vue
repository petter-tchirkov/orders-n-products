<script setup lang="ts">
import type { Product } from '~/types/product'

const props = defineProps<{
  product: Product
}>()
</script>

<template>
  <article class="grid grid-cols-5 gap-3 items-center bg-base-300 mb-4 p-2">
    <img :src="props.product.photo" alt="" class="w-16 h-16">
    <div class="flex flex-col">
      <p>{{ product.title }}</p>
      <p class="text-info">
        {{ product.type }}
      </p>
    </div>
    <span class="badge" :class="{ 'badge-success': product.status === 1, 'badge-warning': product.status === 0 }">
      {{ getProductStatus(product.status) }}
    </span>
    <div class="flex flex-col">
      <p>з {{ useDateFormat(props.product.guarantee.start, 'DD.MM.YYYY') }}</p>
      <p>по {{ useDateFormat(props.product.guarantee.end, 'DD.MM.YYYY') }}</p>
    </div>
    <div class="flex flex-col">
      <p v-for="price in props.product.price" :key="price.symbol">
        {{ price.value }} {{ price.symbol }}
      </p>
    </div>
  </article>
</template>

<style scoped></style>
