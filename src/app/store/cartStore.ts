import { create } from 'zustand'
export interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
  image?: string
}
interface CartStore {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  increaseQty: (id: string) => void
  decreaseQty: (id: string) => void
  totalItems: number
  totalPrice: number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [], //initial state

  addToCart:(item)=>{
    const {items} =get();
    const existing =items.find((i)=>{
      i.id===item.id
    })
    // if item is already in cart then - just increase the quantity
    if(existing){
      set({
        items:items.map((i)=>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      })
    }
    else{
      set({items :[...items, { ...item, quantity: 1 }] })
    }
  },

  removeFromCart: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }))
  },

  
  increaseQty: (id) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }))
  },

  // decrease the qty by 1
  decreaseQty: (id) => {
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity >= 1 ? item.quantity - 1 : 0 }
            : item
        )
        .filter((item) => item.quantity > 0),
    }))
  },
  // empty the cart
  clearCart: () => set({ items:[]}),
  totalItems: 0,
  totalPrice: 0,
}))
