# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook: an infinite loop caused by a missing dependency array.  The `useEffect` hook, without a proper dependency array, runs after every render, creating a continuous cycle.

## Bug Description
The `bug.js` file contains a component with a `useEffect` hook that lacks a dependency array. This results in the effect running on every render, causing an infinite loop of log messages to the console.  The application may become unresponsive.

## Solution
The `bugSolution.js` file provides the corrected code.  By adding the `count` variable to the dependency array, the `useEffect` hook runs only when `count` changes, resolving the infinite loop.

## How to Reproduce
1. Clone the repository.
2. Run `npm install` to install dependencies (if needed).
3. Run the application. Observe the infinite loop and console logs in the `bug.js` version.
4. Compare the console output and behavior with the corrected version in `bugSolution.js`. 
