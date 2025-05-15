'use client'
import { useAppleStore } from '../store/AppleStore'

export default function AppleApple() {
  const { itemsApple, removeFromApple, increaseQtyApple, decreaseQtyApple , clearApple, totalItemsApple} = useAppleStore()
  const total = itemsApple.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <div className="  p-4 z-50 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 flex justify-between">
        Apple
      </h2>
      {itemsApple.length === 0 ? (
        <p>Your Apple Cart is empty</p>
      ) : (
        <>
        <p onClick={() => clearApple()} className="text-red-500 hover:cursor-pointer hover:text-red-300">Empty your Apple Cart </p>
          {itemsApple.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div>
                <p className="font-medium">{item.title}</p>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => decreaseQtyApple(item.id)} className="px-2 hover:cursor-pointer hover:bg-white hover:text-black">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQtyApple(item.id)} className="px-2 hover:cursor-pointer hover:bg-white hover:text-black">+</button>
                <button onClick={() => removeFromApple(item.id)} className="text-red-500 hover:cursor-pointer font-bold">🗑</button>
              </div>
            </div>
          ))}
          <hr className="my-4" />
          <p className="font-bold">Total: ${total.toFixed(2)}</p>
          <button className="mt-2 w-full bg-green-600 text-white py-2 rounded">Checkout</button>
        </>
      )}
      
    </div>
  )
}


