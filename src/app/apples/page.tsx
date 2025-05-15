"use client";

import { useAppleStore } from "../store/AppleStore";
export default function AppleCounter() {
  const apples = useAppleStore((state) => state.Apples);
  const increase = useAppleStore((state) => state.increase);
  const reset = useAppleStore((state) => state.reset);
  const decrease=useAppleStore((state)=>state.decrease)

  return (
    <div className="mt-10">
         
      <p className="text-white text-2xl text-center font-semibold">Apples : {apples}</p>
      <div className="flex justify-center gap-4 mt-8">
      <button onClick={increase} className="btn text-white bg-green-600 hover:cursor-pointer hover:bg-green-500 rounded-md px-4 py-2">
        ADD 
      </button>
      <button onClick={decrease} className="btn text-white bg-green-600 hover:cursor-pointer hover:bg-green-500 rounded-md px-4 py-2">
        REMOVE 
      </button>
      <button onClick={reset} className="btn text-white bg-green-600 hover:cursor-pointer hover:bg-green-500 rounded-md px-4 py-2">
        RESET
      </button>
      </div>
    </div>
  );
}
