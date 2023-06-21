import { create } from 'zustand'
import { Product } from '../types/item'
import { persist } from 'zustand/middleware'

interface CartStore {
  itemsCart: Product[]
  addtoCart: (product: Product) => void
  aumtQuantity: (product: Product) => void
  decrenebtQuantity: (product: Product) => void
  removeItem: (product: Product) => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      itemsCart: [],
      addtoCart: (product: Product) => {
        // verificamos si el producto ya existe en el carrito
        const isProductInCart = get().itemsCart.find(
          (item) => item.id === product.id
        )
        // si el producto ya existe en el carrito
        if (isProductInCart !== undefined) {
          // actualizamos el carrito
          set((state) => ({
            itemsCart: state.itemsCart.map((item) => {
              if (item.id === product.id) {
                return {
                  ...item,
                  quantity: (item.quantity ?? 0) + 1
                }
              }
              return item
            })
          }))
        } else {
          // si el producto no existe en el carrito
          set((state) => ({
            itemsCart: [...state.itemsCart, { ...product, quantity: 1 }]
          }))
        }
      },
      aumtQuantity: (product: Product) => {
        // verificamos si el producto ya existe en el carrito
        const isProductInCart = get().itemsCart.find(
          (item) => item.id === product.id
        )
        // si el producto ya existe en el carrito
        if (isProductInCart !== undefined) {
          // actualizamos el carrito
          set((state) => ({
            itemsCart: state.itemsCart.map((item) => {
              if (item.id === product.id) {
                return {
                  ...item,
                  quantity: (item.quantity ?? 0) + 1
                }
              }
              return item
            })
          }))
        }
      },
      decrenebtQuantity: (product: Product) => {
        // verificamos si el producto ya existe en el carrito
        const isProductInCart = get().itemsCart.find(
          (item) => item.id === product.id
        )
        // si el producto ya existe en el carrito
        if (isProductInCart !== undefined) {
          // si la cantidad es 1, eliminamos el producto del carrito al hacer click en el boton de decrementar
          if (isProductInCart.quantity === 1) {
            const newItemsCart = get().itemsCart.filter(
              (item) => item.id !== product.id
            )
            // actualizamos el carrito
            set(() => ({
              itemsCart: newItemsCart
            }))
          } else {
            // en caso de que la cantidad sea mayor a 1, actualizamos el carrito restando 1 a la cantidad
            set((state) => ({
              itemsCart: state.itemsCart.map((item) => {
                if (item.id === product.id) {
                  return {
                    ...item,
                    quantity: (item.quantity ?? 0) - 1
                  }
                }
                return item
              })
            }))
          }
        }
      },
      removeItem: (product: Product) => {
        // eliminamos el producto del carrito
        const newItemsCart = get().itemsCart.filter(
          (item) => item.id !== product.id
        )
        set(() => ({
          itemsCart: newItemsCart
        }))
      }
    }),
    {
      name: 'cart-storage'
    }
  )
)

interface Cart {
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}
export const useCart = create<Cart>((set) => ({
  isOpen: false,
  openCart: () => set(() => ({ isOpen: true })),
  closeCart: () => set(() => ({ isOpen: false }))
}))

interface Products {
  products: Product[]
  getProducts: () => Promise<void>
  filterProducts: (category: string) => void
  filterPrices: (price: number) => void
}
export const useProducts = create<Products>((set, get) => ({
  products: [],
  getProducts: async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    set(() => ({ products: data }))
  },
  filterProducts: (category: string) => {
    if (category === 'all') {
      set(() => ({ products: [] }))
      void useProducts.getState().getProducts()
    } else {
      const filteredProducts = useProducts
        .getState()
        .products.filter((product) => product.category === category)
      set(() => ({ products: filteredProducts }))
    }
  },
  filterPrices: (price: number) => {
    console.log(price)
    const { products } = get()
    const filteredProducts = products.filter((product) => product.price >= price)
    console.log(filteredProducts)
    set(() => ({ products: filteredProducts }))
  }
}))
