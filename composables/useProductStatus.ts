export function getProductStatus(status: 0 | 1) {
  switch (status) {
    case 0:
      return 'Ремонт'
    case 1:
      return 'Готовий'
    default:
      break
  }
  return 'Невідомо'
}
