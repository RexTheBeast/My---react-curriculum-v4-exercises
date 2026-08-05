// TOPIC: Choose the correct tool: useRef vs useState

import { useState } from 'react';

// TASK: Make sure it updates the text *without* triggering a re-render
export default function FindCorrectHook() {
  let [clickCount, setClickCount] = useState(0); // ← incorrect implementation

  function handleClick() {
    setClickCount((c) => c + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

/**
 For this problem are doing some of the mistakes form the previous lessson
 we are trying to update soemthing in the UI but using a standard varible somethign that
 in react doesnt change between renders and updating it doesnt trigger a re-render
 but what does is useState and useRef the difference is you use useState when you want 
 it to rerender the update in the UI and for it to stay. we dont use useRef becasue 
 even if it does also stay after a render it does not cause a trigger to rerender in the UI so 
 you wont see it. 

**/
