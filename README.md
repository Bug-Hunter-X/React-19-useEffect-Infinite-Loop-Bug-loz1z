# React 19 useEffect Infinite Loop Bug

This repository demonstrates a common but easily missed bug in React 19's `useEffect` hook: creating an infinite loop by updating state within `useEffect` without proper dependency management.

## Bug Description
The `bug.js` file contains a component that uses `useEffect` to update a state variable.  The issue is the absence of a condition or proper dependency array, resulting in an infinite loop that crashes the application. 

## Solution
The `bugSolution.js` file provides a corrected version that addresses the issue.