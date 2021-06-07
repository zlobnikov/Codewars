'use strict';

// Source: https://www.codewars.com/kata/52a382ee44408cea2500074c/

// DESCRIPTION:

// Write a function that accepts a square matrix (N x N 2D array) and returns 
// the determinant of the matrix.

// How to take the determinant of a matrix -- it is simplest to start with the 
// smallest cases:

// A 1x1 matrix |a| has determinant a.

// A 2x2 matrix [ [a, b], [c, d] ] or

// |a  b|
// |c  d|

// has determinant: a*d - b*c.

// The determinant of an n x n sized matrix is calculated by reducing the 
// problem to the calculation of the determinants of n matrices of n-1 x n-1
// size.

// For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or

// |a b c|  
// |d e f|  
// |g h i|  

// the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) 
// where det(a_minor) refers to taking the determinant of the 2x2 matrix created 
// by crossing out the row and column in which the element a occurs:

// |- - -|
// |- e f|
// |- h i|  

// Note the alternation of signs.

// The determinant of larger matrices are calculated analogously, e.g. if M is a 
// 4x4 matrix with first row [a, b, c, d], then:

// det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * 
// det(d_minor)


function determinant(m) {
    let size = m.length;
    let result = 0;
    let modifier = 1;

    if (size === 0) return null;
    if (size === 1) return m[0][0];
    if (size === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

    for (let i = 0; i < size; i++) {
        result += modifier * m[0][i] * determinant(m.slice(1).map(a => {
            return a.slice(0, i).concat(a.slice(i + 1))
        }));
        modifier *= -1;
    }

    return result;
}
