// Trampoline acts as a generic wrapper for a recursive structured closure
const trampoline = (func) => {
    return (...args) => {
      // Initial pass of arguments to recursive func and prime the recursive loop
      let isFunction = func(...args);
      // Recursive looping regulator to offset stack frames
      // As long as a recursive function definition is received continue to execute that recursive definition
      // Will be bypassed if the initial call produces a result instead of a recursive function definition
      // Arguments no longer need to be passed after the initial call as the recursive function definition handles the tail calls
      while (typeof isFunction === 'function') {
        isFunction = isFunction();
      }
      // Return resolved solution of recursive calls
      return isFunction;
    }
  }
  
  // Recursive structured function
  // Stack limit optimization to be combined with trampoline
  // All recursive cases must instead return an anonymous function that calls the recursive function with appropriate recursive case
  const counter = (count, stop) => {
    if (count === stop) return console.log(`Count Reached`, count);
    if (count !== stop) {
      return () => counter(count + 1, stop);
    }
  };
  
  const wrappedRecursiveFunc = trampoline(counter);
  
  console.log(wrappedRecursiveFunc);
  // example of recursive count to 10000000
  wrappedRecursiveFunc(0,10000000);