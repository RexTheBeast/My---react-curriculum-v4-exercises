export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

/**
  For this part of the problme the cli function wants to do somtihing on click which is to incremnt the counter 
  but the child doesnt know want function to call in order to increamtn and doesnt have a way to tell teh parent 
  what function it is so we need a prop that allows us to talk to the parent which in this case was the 
  {onIncreament}
**/
