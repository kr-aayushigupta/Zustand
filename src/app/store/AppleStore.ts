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
  items: AppleItem[]
  addToApple: (item: AppleItem) => void
  removeFromApple: (id: string) => void
  clearApple: () => void
  increaseQty: (id: string) => void
  decreaseQty: (id: string) => void
  totalItems: number
  totalPrice: number
}

export const useAppleStore = create<AppleStore>((set, get) => ({
  items: [], //initial state

  addToApple:(item)=>{
    const {items} =get();
    const existing =items.find((i)=>{
      i.id===item.id
    })
    // if item is already in Apple then - just increase the quantity
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

  removeFromApple: (id) => {
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
  // empty the Apple
  clearApple: () => set({ items:[]}),
  totalItems: 0,
  totalPrice: 0,
}))
