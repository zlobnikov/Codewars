'use strict';

// Source: https://www.codewars.com/kata/551f23362ff852e2ab000037

// DESCRIPTION:

// Lyrics...
// Pyramids are amazing! Both in architectural and mathematical sense. If you have 
// a computer, you can mess with pyramids even if you are not in Egypt at the time. 
// For example, let's consider the following problem. Imagine that you have a 
// pyramid built of numbers, like this one here:

//    /3/
//   \7\ 4 
//  2 \4\ 6 
// 8 5 \9\ 3

// Here comes the task...
// Let's say that the 'slide down' is the maximum sum of consecutive numbers from 
// the top to the bottom of the pyramid. As you can see, the longest 'slide down' 
// is 3 + 7 + 4 + 9 = 23

// Your task is to write a function longestSlideDown that takes a pyramid 
// representation as argument and returns its' largest 'slide down'. For example,

// longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]) => 23

// By the way...
// My tests include some extraordinarily high pyramids so as you can guess, 
// brute-force method is a bad idea unless you have a few centuries to waste. You 
// must come up with something more clever than that.


function longestSlideDown(originalPyramid) {
    let pyramid = originalPyramid.slice();

    let pyramidHeight = pyramid.length;
    if (!pyramidHeight) return 0;
    if (pyramidHeight === 1) return pyramid[0][0];

    for (let level = pyramidHeight - 2; level >= 0; level--) {
        for (let i = 0; i < pyramid[level].length; i++) {
            let biggestChild = Math.max(
                pyramid[level + 1][i],
                pyramid[level + 1][i + 1]
            );
            pyramid[level][i] += biggestChild;
        }
    }

    return pyramid[0][0];
}
