"use client";

import { usebearStore } from "../store/bearStore";
import Link from "next/link";

export default function bearCounter() {
  const bears = usebearStore((state) => state.bears);
  const increase = usebearStore((state) => state.increase);
  const reset = usebearStore((state) => state.reset);
  const decrease=usebearStore((state)=>state.decrease)

  return (
    <div className="mt-10">
         
      <p className="text-white text-2xl text-center font-semibold"> Teddy Bears  🐻 : {bears}</p>
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
