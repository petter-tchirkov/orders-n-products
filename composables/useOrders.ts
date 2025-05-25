import type { OrderWithProducts } from '~/types/order'
import { useOrdersStore } from '~/stores/orders'

export async function useOrders() {
  const ordersStore = useOrdersStore()
  const { data, pending, error } = await useFetch<OrderWithProducts[]>('/api/orders')
  ordersStore.orders = data.value ?? []

  return { pending, error }
}
