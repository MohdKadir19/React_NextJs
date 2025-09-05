import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        className="bg-amber-400 p-3"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Add - {count}
      </button>
    </>
  );
};

export default Counter;
