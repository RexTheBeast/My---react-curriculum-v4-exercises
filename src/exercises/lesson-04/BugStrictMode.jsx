// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const clean = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(clean);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
/**
 From my understanding this only happens in development mode only and this strictMode
 helps in cathing bugs such as this it is making the component mount unmount and mount again
 trying to stress/break your code in react we need to clean up when there might be side effects 
 in this case since we didnt claen up the effect mounted twice and caused it to count by 2 and not 1.
 since we are counting but never cleaing up when counting then when we unmount the counting continues and 
 if we remount then we start counting by 2 and so on 

**/
