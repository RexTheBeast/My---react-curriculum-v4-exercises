// TOPIC: Correct useRef usage to control DOM elements

import { useRef } from 'react';

// TASK: Implement focusing an input field when the button is clicked.
export default function FillRefFocus() {
  const textRef = useRef(null);

  function focusInput() {
    textRef.current.focus();
  }
  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={textRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

/**
For thiw we want the button to focus on the inpit text area
but in the beginning it had to conection to the input element 
and since react does give acces to DOM nodes when we click the button 
we call on focusInput but the function focusInput had no idea what to focus on 
so nothing happens to fix this we use useRef by creating a ref we can attach it to the text area
once we do the button calls on .focus to what it was attached to which in this case is the textarea


**/
