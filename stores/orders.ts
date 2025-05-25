import type { OrderWithProducts } from '~/types/order'

export const useOrdersStore = defineStore('orders', () => {
  const orders = ref<OrderWithProducts[]>([])

  return { orders }
})
