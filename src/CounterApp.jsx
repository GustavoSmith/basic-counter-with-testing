import { useState } from "react";

const CounterApp = ({ value }) => {
  const [count, setCount] = useState(value);

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-24 bg-slate-800 text-white">
      <h1 className="text-semibol text-6xl">CounterApp</h1>
      <h2
        aria-label="value"
        className="rounded-full bg-blue-600 px-16 py-2 text-3xl font-semibold text-white"
        /* data-testid="test-value" */
      >
        {count}
      </h2>
      <div className="flex gap-6">
        <button
          aria-label="increase"
          className="rounded-xl border bg-red-500 px-4 text-white"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
        <button
          aria-label="decrease"
          className="rounded-xl border bg-red-500 px-4 text-white"
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>
        <button
          aria-label="reset"
          className="rounded-xl border bg-red-500 px-4 text-white"
          onClick={() => setCount(value)}
        >
          Reset
        </button>
      </div>
    </main>
  );
};

export default CounterApp;
