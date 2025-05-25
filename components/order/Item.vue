<script setup lang="ts">
import type { OrderWithProducts } from '~/types/order'

const props = defineProps<{
  order: OrderWithProducts
  productsShown: boolean
}>()

function orderCost(currency: 'UAH' | 'USD') {
  let total = 0
  props.order.products.map((product) => {
    const priceEntry = product.price.find(price => price.symbol === currency)
    total += priceEntry?.value || 0
    return total
  })
  return total
}

const formattedDate = useDateFormat(props.order.date, 'DD.MM.YYYY')
const formattedTime = useDateFormat(props.order.date, 'HH:MM')
</script>

<template>
  <div
    class="gap-3 items-center p-2 cursor-pointer rounded-xs grow"
    :class="productsShown ? 'flex' : 'grid grid-cols-[50%_1fr_1fr_1fr_1fr_1fr] w-full'"
  >
    <h2 v-if="!productsShown" class="group-hover:text-secondary-content">
      {{ order.title }}
    </h2>
    <h3 class="group-hover:text-secondary-content">
      {{ order.products.length }}
      <span>продукти</span>
    </h3>
    <div class="flex flex-col group-hover:text-secondary-content">
      <p>{{ formattedDate }}</p>
      <p>{{ formattedTime }}</p>
    </div>
    <div v-if="!productsShown" class="flex flex-col group-hover:text-secondary-content">
      <p>{{ orderCost('UAH') }} uah</p>
      <p>{{ orderCost('USD') }} usd</p>
    </div>
    <button v-if="!productsShown" class="btn btn-circle group-hover:text-secondary-content">
      <Icon name="lucide:trash-2" />
    </button>
  </div>
</template>

<style scoped></style>
