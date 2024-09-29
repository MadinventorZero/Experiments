// Create a function reduce that takes an array, a callback, and an optional initial value as arguments
function reduce(array, callback, initialValue) {
    // create an accumulator variable
    // if an initial value is provided, then initialize the accumulator variable to the initial value
    // if an initial value is not provided, then initialize the accumulator variable to the first element of the array
    let result = initialValue ? initialValue : array[0];
    // depending on if an initial value is provided, the loop counter will either start at 0 or 1
    let startIndex = initialValue ? 0 : 1;
    // iterate through the array
    for (let i = startIndex; i < array.length; i++) {
      console.log('iteration', i);
      // invoke the callback function on each element of the array, passing in the accumulator and the current element as arguments
      // reassign the accumulator to the return value
      result = callback(result, array[i]);
    }
    // return the accumulator
    return result;
  }
  
  // Test array of objects to evaluate the reduce function
  const testScores = [
    {
      test: 1,
      score: 97
    },
    { test: 31,
      score: 77
    },
    {
      test: 28,
      score: 66
    },
    {
      test: 72,
      score: 85
    },
    {
      test: 51,
      score: 99
    }
  ];
  
  // Callback to aggregate passing scores from an array of test scores
  const passingScores = (passed, test) => {
    console.log('Accumulator', passed);
    console.log('Next Element', test);
    if (test.score >= 80) {
      passed.push(test.score);
    }
    return passed;
  };
  
  // Callback to aggregate passing scores from an array of test scores
  // Also handles edge case where passed is not an array
  // const passingScoresComplete = (passed, test) => {
  //   if (!Array.isArray(passed)) {
  //     const newAcc = [];
  //     if (passed.score >= 80) {
  //       newAcc.push(passed.score);
  //     }
  //     passed = newAcc;
  //   }
  //   console.log('Accumulator', passed);
  //   console.log('Next Element', test);
  //   if (test.score >= 80) {
  //     passed.push(test.score);
  //   }
  //   return passed;
  // };
  
  console.log(reduce(testScores, passingScores, []));