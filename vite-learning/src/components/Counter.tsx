import React, { useState, useCallback } from 'react';
//Child Component
const ChildComponent = React.memo(({ handleClick }) => {
  return (
    <button onClick={handleClick}>Click me</button>
  );
});

//Parent Component
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <ChildComponent handleClick={increment} />
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;