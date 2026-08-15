// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick(event) {
    event.stopPropagation();
    alert('Button Clicked ✅');
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

/**
This one was a bit tricky so form the understanding this isnt react but a DOM bug/problem
called buble up meaning once you click a button the others get affected as well 
so it goes from buttonhandleInnerClick to anything else in the div which inclueded 
the buttonhandleOuterClick then to the document so in oder to do that we need to specify that 
when we click the inner one that is all we want and dont want it to trickle the click up to the rest 
and we do that by using a pramter and using the method stopPropagation()
**/
