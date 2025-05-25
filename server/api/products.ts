import type { OrderWithProducts, Product } from '~/types/order'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

export default defineEventHandler(() => {
  const dbPath = path.join(process.cwd(), 'server/db.json')

  try {
    const dbData = fs.readFileSync(dbPath, 'utf-8')
    const orders: OrderWithProducts[] = JSON.parse(dbData)

    const allProducts: Product[] = orders.reduce((products, order) => {
      return products.concat(order.products)
    }, [])
    return allProducts
  }
  catch (error) {
    console.error('Error reading or parsing db.json:', error)
    return { error: 'Could not fetch data' }
  }
})
