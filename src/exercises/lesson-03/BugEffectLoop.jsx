//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (The Problem was that the effect ran every time we renderd
//  which creates an infinite loop to fix the problem we needed an empty
//  dependency array so it can tell react to only run once when the conponet first loads
//  react runs effects like useEffect whenever any values change if we didnt add the depency array
//  it made it so that it ran again and again but with the array in plcae
//  it bacilly tells react no vlaues are changing so only run once)
//
