interface Product {
  name: string
  cost: number
}

function listProduct(product: Product) {
  const { name, cost } = product
  console.log({ name, cost })

  return product
}

export { listProduct }
