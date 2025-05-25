<script setup lang="ts">
import type { OrderWithProducts } from '~/types/order'
import type { Product } from '~/types/product'

const props = defineProps<{
  data: OrderWithProducts[]
}>()

const productsShown = ref(false)
const selectedOrder = ref<OrderWithProducts | null>(null)
function showProducts(order: OrderWithProducts) {
  selectedOrder.value = order
  productsShown.value = true
}

function closeProducts() {
  productsShown.value = false
}
function orderCost(currency: 'UAH' | 'USD', products: Product[]) {
  let total = 0
  products.map((product) => {
    const priceEntry = product.price.find(price => price.symbol === currency)
    total += priceEntry?.value || 0
    return total
  })
  return total
}
</script>

<template>
  <div class="overflow-x-auto flex items-start max-h-[480px]">
    <table class="table">
      <thead>
        <tr>
          <th v-if="!productsShown">
            Назва
          </th>
          <th>Кількість товару</th>
          <th>Дата поставки</th>
          <th v-if="!productsShown">
            Сума поставки
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in props.data" :key="order.id">
          <td v-if="!productsShown">
            {{ order.title }}
          </td>
          <td>
            <span class="badge">{{ order.products.length }}</span>
          </td>
          <td>
            <div class="flex flex-col">
              <p>{{ useDateFormat(order.date, 'DD.MM.YYYY') }}</p>
              <p>{{ useDateFormat(order.date, 'HH:MM') }}</p>
            </div>
          </td>
          <td v-if="!productsShown">
            <div class="flex flex-col">
              <p class="text-secondary-content text-xs">
                {{ orderCost('USD', order.products) }} USD
              </p>
              <p> {{ orderCost('UAH', order.products) }} UAH</p>
            </div>
          </td>
          <td>
            <button class="btn btn-circle group-hover:text-secondary-content" @click="showProducts(order)">
              <Icon name="lucide:chevron-right" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <order-products-table
      v-if="productsShown" :products="selectedOrder!.products" :title="selectedOrder!.title"
      @close="closeProducts()"
    />
  </div>
</template>
