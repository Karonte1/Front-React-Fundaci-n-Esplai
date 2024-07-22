import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  
  return (
    <div className="p-2 bg-white rounded-lg flex items-center justify-center gap-3 flex-col my-8">
      <h2 className="text-2xl font-bold">Counter</h2>
      <h3 className="text-xl font-bold">{counter}</h3>
      <div>
        <button className="bg-blue-200 px-2 py-1 rounded-lg" onClick={() => setCounter(counter - 1)}>-1</button>
        <button className="bg-blue-200 px-2 py-1 rounded-lg" onClick={() => setCounter(counter + 1)}>+1</button>
      </div>
    </div>
  )
}

export default Counter;