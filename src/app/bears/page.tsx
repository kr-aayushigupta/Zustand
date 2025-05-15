"use client";

import { usebearStore } from "../store/bearStore";
import Link from "next/link";

export default function bearCounter() {
  const bears = usebearStore((state) => state.bears);
  const increase = usebearStore((state) => state.increase);
  const reset = usebearStore((state) => state.reset);

  return (
    <div className="mt-10">
         <div className="flex justify-around items-center gap-4">
      <Link href={"/"}> <h1 className="text-2xl font-bold mb-6 text-center hover:bg-white/25 hover:cursor-pointer px-4 py-2">Products</h1></Link>
      <Link href={"/bears"}> <h1 className="text-2xl font-bold mb-6 text-center hover:bg-white/25 hover:cursor-pointer px-4 py-2">Bears</h1></Link>
      </div>
      <p className="text-white text-2xl text-center font-semibold"> Teddy Bears  🐻 : {bears}</p>
      <div className="flex justify-center gap-4 mt-8">
      <button onClick={increase} className="btn text-white bg-green-600 hover:cursor-pointer hover:bg-green-500 rounded-md px-4 py-2">
        ADD BEAR
      </button>
      <button onClick={reset} className="btn text-white bg-green-600 hover:cursor-pointer hover:bg-green-500 rounded-md px-4 py-2">
        RESET
      </button>
      </div>
    </div>
  );
}
