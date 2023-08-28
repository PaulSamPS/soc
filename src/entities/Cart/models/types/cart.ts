interface IProductCart {
    name: string
    count: number
    image: string
    price: number
    weight: string
    in_stock: number
    productId: number
}

export interface ICart {
    id: number
    products: IProductCart[]
    total_price: number
    createdAt: Date
    updatedAt: Date
    user: number
}
