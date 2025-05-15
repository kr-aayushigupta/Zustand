import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <div>
      <div className="mt-10">
        <div className="flex justify-around items-center gap-4 bg-slate-800 bg-gradient-to-l from-green-900 via-green-800 to-green-700 px-6 py-2">
        <Link href={"/"}>
            {" "}
            <h1 className="text-2xl font-bold  text-center hover:bg-white/25 hover:cursor-pointer px-4 py-2 rounded-md">
              Home
            </h1>
          </Link>
          <Link href={"/products"}>
            {" "}
            <h1 className="text-2xl font-bold  text-center hover:bg-white/25 hover:cursor-pointer px-4 py-2 rounded-md">
              Products
            </h1>
          </Link>
          <Link href={"/bears"}>
            {" "}
            <h1 className="text-2xl font-bold  text-center hover:bg-white/25 hover:cursor-pointer px-4 py-2 rounded-md">
              Bears
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
