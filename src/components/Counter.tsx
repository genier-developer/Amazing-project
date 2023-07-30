import { useState } from 'react';
import classNames from './styles.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button className={classNames.Counter} onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};
