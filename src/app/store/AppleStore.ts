// import {create} from 'zustand'; // "create" is used to create global state store

// type AppleStore={
//     Apples: number;
//     increase:()=> void;
//     reset:()=> void;
//     decrease:()=> void;
// };

// export const useAppleStore=create<AppleStore> ((set)=>({
//     Apples:0,
//     increase:()=>set((state)=>({Apples:state.Apples +1})),
//     reset:()=>set({Apples:0}),
//     decrease:()=>set((state)=>({Apples:state.Apples-1}))
// }))

import { create } from 'zustand'
export interface AppleItem {
  id: string
  title: string
  price: number
  quantity: number
  image?: string
}
interface AppleStore {
  itemsApple: AppleItem[]
  addToApple: (item: AppleItem) => void
  removeFromApple: (id: string) => void
  clearApple: () => void
  increaseQtyApple: (id: string) => void
  decreaseQtyApple: (id: string) => void
  totalItemsApple: number
  totalPriceApple: number
}

export const useAppleStore = create<AppleStore>((set, get) => ({
  itemsApple: [], //initial state

  addToApple: (item:AppleItem) => {
    const { itemsApple } = get()
    const existing = itemsApple.find((i) => i.id === item.id)

    if (existing) {
      set({
        itemsApple: itemsApple.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      })
    } else {
      set({ itemsApple: [...itemsApple, { ...item, quantity: 1 }] })
    }
  },

  removeFromApple: (id) => {
    set((state) => ({
      itemsApple: state.itemsApple.filter((item) => item.id !== id),
    }))
  },

  
  increaseQtyApple: (id) => {
    set((state) => ({
      itemsApple: state.itemsApple.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }))
  },

  // decrease the QtyApple by 1
  decreaseQtyApple: (id) => {
    set((state) => ({
      itemsApple: state.itemsApple
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity >= 1 ? item.quantity - 1 : 0 }
            : item
        )
        .filter((item) => item.quantity > 0),
    }))
  },
  // empty the Apple
  clearApple: () => set({ itemsApple:[]}),
  totalItemsApple: 0,
  totalPriceApple: 0,
}))
