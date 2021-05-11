'use strict';
/*********************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array    *
 *                                                                                           *
 * NOTE : Please do not use loops! All tasks can be implmeneted using standard Array methods *
 *                                                                                           *
 *********************************************************************************************/

/**
 * Returns an index of the specified element in array or -1 if element is not found
 * 
 * @param {array} arr
 * @param {any} value
 * @return {number}
 * 
 * @example
 *    ['Ace', 10, true], 10    => 1 
 *    ['Array', 'Number', 'string'], 'Date'    => -1 
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function findElement(arr, value) {
  var ind = arr.indexOf(value);
  return ind;
}
/**
 * Generates an array of odd numbers of the specified length
 * 
 * @param {number} len
 * @return {array}
 * 
 * @example
 *    1 => [ 1 ] 
 *    2 => [ 1, 3 ] 
 *    5 => [ 1, 3, 5, 7, 9 ]
 */


function generateOdds(len) {
  var arr = new Array(len);
  var newArr = arr.fill().map(function (_, ind) {
    return 2 * ind + 1;
  });
  return newArr;
}
/**
 * Returns the doubled array - elements of the specified array are repeated twice using original order
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]  
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => [] 
 */


function doubleArray(arr) {
  return arr.concat(arr);
}
/**
 * Returns an array of positive numbers from the specified array in original order
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => [] 
 */


function getArrayOfPositives(arr) {
  var arrPositive = arr.filter(function (num) {
    return num > 0;
  });
  return arrPositive;
}
/**
 * Returns the array with strings only in the specified array (in original order)
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat, 'dog', 'raccon' ] => [ 'cat', 'dog', 'racoon' ]
 */


function getArrayOfStrings(arr) {
  var arrStringOnly = arr.filter(function (item) {
    return typeof item === 'string';
  });
  return arrStringOnly;
}
/**
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */


function removeFalsyValues(arr) {
  var arrFalsy = [false, null, 0, '', undefined, NaN];
  var arrResult = arr.filter(function (item) {
    if (!arrFalsy.includes(item)) {
      return item;
    }
  });
  return arrResult; // throw new Error('Not implemented');
}
/**
 * Returns the array of useprcase strings from the specified array
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ] => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ]
 *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
 */


function getUpperCaseStrings(arr) {
  return arr.map(function (item) {
    return item.toUpperCase();
  });
}
/**
 * Returns the array of string lengths from the specified string array.
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */


function getStringsLength(arr) {
  var arrayLength = arr.map(function (str) {
    return str.length;
  });
  return arrayLength;
}
/**
 * Inserts the item into specified array at specified index
 * 
 * @param {array} arr
 * @param {any} item
 * @param {number} index 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
 *    [ 1, 'b', 'c'], 0, 'x'  => [ 'x', 1, 'b', 'c' ]
 */


function insertItem(arr, item, index) {
  return arr.splice(index, 0, item);
}
/**
 * Returns the n first items of the specified array
 * 
 * @param {array} arr
 * @param {number} n 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 1, 2 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 */


function getHead(arr, n) {
  return arr.slice(0, n);
}
/**
 * Returns the n last items of the specified array
 * 
 * @param {array} arr
 * @param {number} n 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
 */


function getTail(arr, n) {
  return arr.slice(-n);
}
/**
 * Returns CSV represebtation of two-dimentional numeric array.
 * https://en.wikipedia.org/wiki/Comma-separated_values
 * 
 * @param {array} arr
 * @return {string}
 * 
 * @example
 *    [
 *       [  0, 1, 2, 3, 4 ],
 *       [ 10,11,12,13,14 ],
 *       [ 20,21,22,23,24 ],
 *       [ 30,31,32,33,34 ]
 *    ] 
 *           => 
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */


function toCsvText(arr) {
  var temp = arr.map(function (item) {
    return item.join(',');
  });
  return temp.join('\n');
}
/**
 * Transforms the numeric array into the according array of squares:
 *   f(x) = x * x
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
 *   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
 */


function toArrayOfSquares(arr) {
  return arr.map(function (item) {
    return Math.pow(item, 2);
  });
}
/**
 * Transforms the numeric array to the according moving sum array:
 *     f[n] = x[0] + x[1] + x[2] +...+ x[n] 
 *  or f[n] = f[n-1] + x[n]
 * 
 * @param {array} arr
 * @return {array}
 * 
 * Example :
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0] 
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 */


function getMovingSum(arr) {
  var sum = 0;
  return arr.map(function (item) {
    return sum += item;
  });
}
/**
 * Returns every second item from the specified array:
 * 
 * @param {array} arr
 * @return {array}
 * 
 * Example :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */


function getSecondItems(arr) {
  var temp = arr.map(function (item, ind) {
    if (ind % 2 != 0) {
      return item;
    } else {
      return 'odd';
    }
  }).filter(function (item) {
    return item != 'odd';
  });
  return temp;
}
/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, tree third items etc. 
 * 
 * @param {array} arr 
 * @return {array}
 * 
 * @example :
 *  [] => []
 *  [ 1 ] => [ 1 ]
 *  [ 'a', 'b' ] => [ 'a', 'b','b' ]
 *  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
 *  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
 */


function propagateItemsByPositionIndex(arr) {
  if (arr.length == 0 || arr.length == 1) return arr;
  return arr.reduce(function (acc, v, i) {
    acc.push.apply(acc, _toConsumableArray(Array(i + 1).fill(v)));
    return acc;
  }, []);
}
/** 
 * Returns the 3 largest numbers from the specified array
 * 
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 */


function get3TopItems(arr) {
  function compareNumeric(a, b) {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
  }

  var arrSorted = arr.sort(compareNumeric);
  var arrReturned = arrSorted.slice(0, 3);
  return arrReturned;
}
/**  
 * Returns the number of positive numbers from specified array
 * 
 * @param {array} arr
 * @return {number}
 * 
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 */


function getPositivesCount(arr) {
  var arrPositive = arr.filter(function (item) {
    if (typeof item === 'number' && item > 0) {
      return item;
    }
  });
  return arrPositive.length;
}
/** 
 * Sorts digit names
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */


function sortDigitNamesByNumericOrder(arr) {
  function replaceNameDigitstoToInt(nameOfDigit) {
    switch (nameOfDigit) {
      case 'one':
        return 1;
        break;

      case 'two':
        return 2;
        break;

      case 'three':
        return 3;
        break;

      case 'four':
        return 4;
        break;

      case 'five':
        return 5;
        break;

      case 'six':
        return 6;
        break;

      case 'seven':
        return 7;
        break;

      case 'eight':
        return 8;
        break;

      case 'nine':
        return 9;
        break;

      case 'zero':
        return 0;
        break;
    }
  }

  function replaceNameDigitsToString(nameOfDigitInt) {
    switch (nameOfDigitInt) {
      case 1:
        return 'one';
        break;

      case 2:
        return 'two';
        break;

      case 3:
        return 'three';
        break;

      case 4:
        return 'four';
        break;

      case 5:
        return 'five';
        break;

      case 6:
        return 'six';
        break;

      case 7:
        return 'seven';
        break;

      case 8:
        return 'eight';
        break;

      case 9:
        return 'nine';
        break;

      case 0:
        return 'zero';
        break;
    }
  }

  var resDigitInt = arr.map(function (item) {
    return replaceNameDigitstoToInt(item);
  });

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

  var resDigitIntsorted = resDigitInt.sort(compareNumeric);
  return resDigitIntsorted.map(function (item) {
    return replaceNameDigitsToString(item);
  });
}
/** 
 * Returns the sum of all items in the specified array of numbers
 * 
 * @param {array} arr
 * @return {number}
 * 
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 */


function getItemsSum(arr) {
  var sum = 0;

  if (arr.length === 0) {
    return 0;
  } else {
    return arr.reduce(function (sum, item) {
      sum += item;
      return sum;
    });
  }
}
/** 
 * Returns the number of all falsy value in the specified array
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 */


function getFalsyValuesCount(arr) {
  var arrFalsy = [null, undefined, NaN, false, 0, ''];
  var count = 0;
  var arrFitered = arr.filter(function (item) {
    if (arrFalsy.includes(item)) {
      count++;
    }
  });
  return count;
}
/**
 * Returns a number of all occurences of the specified item in an array  
 * 
 * @param {array} arr
 * @param {any} item 
 * @return {number}
 * 
 * @example
 *    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
 *    [ 1, 2, 3, 4, 5 ], 0 => 0
 *    [ 'a','b','c','c' ], 'c'=> 2
 *    [ null, undefined, null ], null => 2 
 *    [ true, 0, 1, 'true' ], true => 1
 */


function findAllOccurences(arr, item) {
  var arrCounts = arr.filter(function (i) {
    return i === item;
  });
  return arrCounts.length;
}
/**
 * Concatenates all elements from specified array into single string with ',' delimeter  
 * 
 * @param {array} arr 
 * @return {string}
 * 
 * @example
 *    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
 *    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
 *    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
 */


function toStringList(arr) {
  return arr.join(',');
}
/**
 * Sorts the specified array by country name first and city name (if countries are equal) in ascending order.
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]  
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 */


function sortCitiesArray(arr) {
  return arr.sort(function (a, b) {
    if (a.country > b.country) {
      return 1;
    }

    if (a.country < b.country) {
      return -1;
    }

    if (a.city > b.city) {
      return 1;
    }

    if (a.city < b.city) {
      return -1;
    }

    return 0;
  });
}
/**
 * Creates an indentity matrix of the specified size
 * 
 * @param {number} n
 * @return {array}
 * 
 * @example
 *     1  => [[1]]
 *  
 *     2 => [[1,0],
 *           [0,1]]
 * 
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]   
 */


function getIdentityMatrix(n) {
  function fillStroka(arr, n) {
    return arr.map(function (item, ind) {
      if (ind === n) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  var resultArray = new Array(n);
  var temp = new Array(n);
  temp.fill(0);
  resultArray.fill(0);
  return resultArray.map(function (item, ind) {
    return fillStroka(temp, ind);
  }); //     throw new Error('Not implemented');
}
/**
 * Creates an array of integers from the specified start to end (inclusive)
 * 
 * @param {number} start
 * @param {number} end
 * @return {array}
 * 
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */


function getIntervalArray(start, end) {
  var arrResult = new Array(end - start + 1);
  return arrResult.fill().map(function (item, ind) {
    return start + ind;
  });
}
/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
 *   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
 *   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
 */


function distinct(arr) {
  var uniqueSet = new Set(arr);
  return Array.from(uniqueSet);
}
/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ], 
 *     item => item.country, 
 *     item => item.city
 *   )
 *            => 
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"], 
 *    "Poland" => ["Lodz"]
 *   }
 */


function group(array, keySelector, valueSelector) {
  /*
  function groupBy(objectArray, property,value) {
     return objectArray.reduce(function (acc, obj) {
       let key = obj[property]
       if (!acc[key]) {
         acc[key] = []
       }
       acc[key].push(obj[value]);
       return acc
     }, {})
   } 
   let groupedCity = groupBy(array, keySelector,valueSelector);
   return groupedCity;
   */
  throw new Error('Not implemented');
}
/**
 * Projects each element of the specified array to a sequence and flattens the resulting sequences into one array.
 *
 * @param {array} arr
 * @param {Function} childrenSelector, a transform function to apply to each element that returns an array of children
 * @return {array}
 * 
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], x=>x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */


function selectMany(arr, childrenSelector) {
  arr.map(childrenSelector);
  return arr.flatMap(childrenSelector);
}
/**
 * Returns an element from the multidimentional array by the specified indexes.
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 * 
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0]) 
 *   ['one','two','three'], [2]       => 'three'  (arr[2]) 
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */


function getElementByIndexes(arr, indexes) {
  return indexes.reduce(function (acc, ind) {
    return acc[ind];
  }, arr); // throw new Error('Not implemented');
}
/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start. 
 * The middle element (if exists) leave on the same position.
 * 
 *  
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/         
 *     head     tail 
 *
 *   [ 1, 2 ]  => [ 2, 1 ] 
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]   
 * 
 */


function swapHeadAndTail(arr) {
  var head = new Array();
  var tail = new Array();
  var middle = new Array();

  if (arr.length === 1) {
    return arr;
  } else {
    if (arr.length % 2 === 0) {
      head = arr.slice(0, arr.length / 2);
      tail = arr.slice(arr.length / 2, arr.length);
      return tail.concat(head);
    } else {
      head = arr.splice(0, Math.floor(arr.length / 2));
      tail = arr.splice(Math.floor(arr.length / 2), arr.length);
      middle = arr.splice(Math.floor(arr.length / 2), 1);
      return tail.concat(middle).concat(head);
    }
  }
}

module.exports = {
  findElement: findElement,
  generateOdds: generateOdds,
  doubleArray: doubleArray,
  getArrayOfPositives: getArrayOfPositives,
  getArrayOfStrings: getArrayOfStrings,
  removeFalsyValues: removeFalsyValues,
  getUpperCaseStrings: getUpperCaseStrings,
  getStringsLength: getStringsLength,
  insertItem: insertItem,
  getHead: getHead,
  getTail: getTail,
  toCsvText: toCsvText,
  toStringList: toStringList,
  toArrayOfSquares: toArrayOfSquares,
  getMovingSum: getMovingSum,
  getSecondItems: getSecondItems,
  propagateItemsByPositionIndex: propagateItemsByPositionIndex,
  get3TopItems: get3TopItems,
  getPositivesCount: getPositivesCount,
  sortDigitNamesByNumericOrder: sortDigitNamesByNumericOrder,
  getItemsSum: getItemsSum,
  getFalsyValuesCount: getFalsyValuesCount,
  findAllOccurences: findAllOccurences,
  sortCitiesArray: sortCitiesArray,
  getIdentityMatrix: getIdentityMatrix,
  getIntervalArray: getIntervalArray,
  distinct: distinct,
  group: group,
  selectMany: selectMany,
  getElementByIndexes: getElementByIndexes,
  swapHeadAndTail: swapHeadAndTail
};