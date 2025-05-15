"use client";

import { usebearStore } from "../store/bearStore";

export default function bearCounter() {
  const bears = usebearStore((state) => state.bears);
  const increase = usebearStore((state) => state.increase);
  const reset = usebearStore((state) => state.reset);

  return (
    <div>
      <p>Bears: {bears}</p>
      <button onClick={increase} className="btn">
        ADD BEAR
      </button>
      <button onClick={reset} className="btn">
        RESET
      </button>
    </div>
  );
}
