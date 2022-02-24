const sumLargestNumbers = function(arr) {
  const arrSorted = arr.sort((a, b) => a - b);
   return arrSorted[arr.length - 1] + arrSorted[arr.length -2];
 };
 
 console.log(sumLargestNumbers([1, 10]));
 console.log(sumLargestNumbers([1, 2, 3]));
 console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));