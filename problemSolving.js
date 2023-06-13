/*
Who likes it?
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

function likes(names)
{
    if (names.length === 1)
    {
        return `${names} likes this`;
    } else if (names.length === 2)
    {
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3)
    {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (names.length > 3)
    {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    } else
    {
        return `no one likes this`;
    }
}
names = ['haz', 'haz'];
console.log(likes(names));

/*
7 kyu
Is this a triangle?

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

function isTriangle(a, b, c)
{
    if (a + b > c && a + c > b && b + c > a)
    {
        return true;
    }
}
console.log(isTriangle(2, 4, 4));
//another solution from website

function isTriangle2(a, b, c)
{
    return a + b > c && a + c > b && c + b > a;
}


/*
8 kyu
Array plus array
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

function arrayPlusArray(arr1, arr2)
{

    const arr4 = [...arr1, ...arr2];
    const resultOfSum = arr4.reduce((acc, curr) => acc + curr, 0);
    return resultOfSum;

    // another solution from website 
    // const arr3 = arr1.concat(arr2);
    //     let result =0;
    //     for(let i = 0;  i<arr3.length ; i++) {
    //         result += arr3[i];
    //     }
    //     return result;
}
haz1 = [1, 2, 3];
haz2 = [1, 2, 3];

console.log(arrayPlusArray(haz1, haz2));


/*
7 kyu
Binary Addition

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

*/

function addBinary(a, b)
{
    const binaryNumber = (a + b).toString(2);
    return binaryNumber;
}
console.log(addBinary(1, 1));




/*
7 kyu
Find the index of the second occurrence of a letter in a string

In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

Examples:

secondSymbol('Hello world!!!','l')  --> 3
secondSymbol('Hello world!!!', 'A') --> -1
Good luck ;) And don't forget to rate this Kata if you liked it

*/

function secondSymbol(s, symbol)
{
    let cont = 0;
    let index = -1;
    for (let i = 0; i < s.length; i++)
    {
        if (s[i] === symbol)
        {
            cont++;
            if (cont === 2)
            {
                index = i
                break;
            }
        }
    }
    return index
}

// => another solution From website
// function secondSymbol(s, symbol) {
//     return s.indexOf(symbol, s.indexOf(symbol) + 1);
// }
console.log(secondSymbol("hazem Badran", "a"));




/*
8 kyu
Convert boolean values to strings 'Yes' or 'No'.

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

function boolToWord(bool)
{
    return bool ? "Yes" : "No";
}
console.log(boolToWord(true));




/*
8 kyu
Opposite number

Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/


function opposite(number)
{
    return -number
}
console.log(opposite(2));



/*
8 kyu

Multiply
This code does not execute properly. Try to figure out why.
*/


function multiply(a, b)
{
    return a * b;
}
console.log(multiply(2, 4));


/*
6 kyu
Find the missing letter
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

*/

function findMissingLetter(array)
{
    const englishAlphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetArray = englishAlphabet.split('');

    const start = array[0]; //w String
    const end = array[array.length - 1]; //z String
    // بدي أجيب موقع الحرف الأول من الحروف المخزنة إللي عندي
    const startIndex = alphabetArray.indexOf(start)
    const endIndex = alphabetArray.indexOf(end)
    const chortAlphabet = alphabetArray.slice(startIndex, endIndex + 1); // زائد واحد عشان السلايس نت إنكلودنق إند
    const theMissingLetter = chortAlphabet.filter((value) =>
    {
        return !array.includes(value);
    });
    return theMissingLetter[0];
}

const hroof = ['w', 'x', 'z'];
const hroof2 = ['A', 'B', 'D'];

console.log(findMissingLetter(hroof), findMissingLetter(hroof2));





/*
8 kyu
Calculate BMI

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/
function bmi(weight, height)
{
    const bmi = weight / (Math.pow(height, 2));
    if (bmi <= 18.5)
    {
        return "Underweight"
    } else if (bmi <= 25.0)
    {
        return
        "Normal"
    } else if (bmi <= 30.0)
    {
        return "Overweight"
    }
    else if (bmi > 30)
    {
        return "Obese"
    }
}
console.log(bmi(2, 4));


/*
6 kyu
Split Strings

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str)
{
    let result = [];
    let twoLetters;
    if (str.length % 2 === 0)
    {
        for (let i = 0; i < str.length; i += 2)
        {
            twoLetters = str[i] + str[i + 1];
            result.push(twoLetters)
        }
        return result;
    } else
    {
        let str2 = str + '_';
        for (let i = 0; i < str2.length; i += 2)
        {
            twoLetters = str2[i] + str2[i + 1];
            result.push(twoLetters)
        }
        return result;
    }
}
// another solution From website
// function solution(s){
//     return (s+"_").match(/.{2}/g)||[]
// }
const text = 'hazem';
console.log(solution('hazem'));


// function findOdd(A) {
//     if(A.length === 1 || A.length === 0 )
//     {   if (A.length === 0) return 0;
//         return A[0];
//     }
//     return 0;
// }
// someNumbers = [7]
// console.log(findOdd(someNumbers));

// const haz = [1,1,2];

// const filterHaz = haz.filter(function name(params) {

//     return params;
// })
// console.log(filterHaz);

/*
6 kyu                      // هاد سؤال مهم فيه فكرة بدها تركيز
Find the odd int
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
function findOdd(A)
{
    //happy coding!ddd
    let result = 0; // متغير لتخزين العدد الذي يظهر عددًا فرديًا من المرات
    for (let num of A)
    {
        result ^= num; // استخدام عملية ال XOR لإيجاد العدد الذي يظهر عددًا فرديًا
    }
    return result;
}
const haz = [1, 1, 3, 3, 4];
console.log(findOdd(haz));



/*
8 kyu
Add Length

What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

function addLength(str)
{

    const words = str.split(' ');
    let addLengthToWord = [];
    for (let i = 0; i < words.length; i++)
    {
        addLengthToWord.push(`${words[i]} ${words[i].length}`)
    }
    return addLengthToWord;
}
let textWill = "you will win";
console.log(addLength(textWill));


/*
8 kyu
Super Duper Easy
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/

function problem(x)
{
    if (typeof x === 'string')
    {
        return 'Error';
    } else
    {
        return x * 50 + 6;
    }
}
console.log(problem(7));

/*
7 kyu
Hello World - Without Strings

You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

You cannot use the following:

"Hello, World!"
'Hello, World!'
`Hello, World!`
*/
const helloWorld = () =>
{
    // feel free to change this into a function :)
    var str = String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33);
    return str;
};
console.log(helloWorld());

/*
7 kyu
Sort array by string length
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:
["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

function sortByLength(array)
{
    const stringArray = array.filter((string) => typeof string === "string");
    const sortedArray = stringArray.sort((a, b) => a.length - b.length);
    return sortedArray;
}
const arr1 = ["Telescopes", "Glasses", "Eyes", "Monocles"];
console.log(sortByLength(arr1));

// another solution From Website
// function sortByLength (array) {
//     return array.sort((a,b) => a.length - b.length);
// };

/*
5 kyu
Calculating with Functions

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

function zero(opre)
{
    return typeof opre === 'function' ? opre(0) : 0;
}
function one(opre)
{
    return typeof opre === 'function' ? opre(1) : 1;
}

function two(opre)
{
    return typeof opre === 'function' ? opre(2) : 2;
}

function three(opre)
{
    return typeof opre === 'function' ? opre(3) : 3;
}
function four(opre)
{
    return typeof opre === 'function' ? opre(4) : 4;
}
function five(opre)
{
    return typeof opre === 'function' ? opre(5) : 5;
}
function six(opre)
{
    return typeof opre === 'function' ? opre(6) : 6;
}
function seven(opre)
{
    return typeof opre === 'function' ? opre(7) : 7;
}
function eight(opre)
{
    return typeof opre === 'function' ? opre(8) : 8;
}
function nine(opre)
{
    return typeof opre === 'function' ? opre(9) : 9;
}

function plus(rightOperand)
{
    return function (leftOperand)
    {
        return leftOperand + rightOperand;
    };
}
function minus(rightOperand)
{
    return function (leftOperand)
    {
        return leftOperand - rightOperand;
    };
}
function times(rightOperand)
{
    return function (leftOperand)
    {
        return leftOperand * rightOperand;
    };
}
function dividedBy(rightOperand)
{
    return function (leftOperand)
    {
        return Math.floor(leftOperand / rightOperand);
    };
}

console.log(one(plus(one())));
console.log(plus(one())(one())); // From Shoman

/*
6 kyu
Roman Numerals Decoder

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Courtesy of rosettacode.org
*/


function solution(roman) // From Aiz
{
    // let sum = 0;

    let obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let number = 0;
    for (let i = 0; i < roman.length; i++)
    {
        const current_char_value_in_number = obj[roman[i]]; // 'I'=> 1
        const next_char_value_in_number = obj[roman[i + 1]]; // 'V'=> 5
        if (next_char_value_in_number > current_char_value_in_number)
        {
            number -= current_char_value_in_number;
        }
        else
        {
            number += current_char_value_in_number;
        }
    }
    return number;

}
console.log(solution("XXI"));




/** From Shoman
 *
 * you should create a function that
 * take an array as parameter with nested arrays
 * and it should return the depth of this arr

 */
const arr = [1, 2, [3, [4, [5]]]]; // 4

const arr2 = [1]; // 1

const arr3 = []; // 1

const arr4 = [
    1,
    2,
    [3, 4, [5], 6, [[[7], 19], [8, [9], [10, [11]]], 12], [[13]], 14],
    15
]; // 6

const arr5 = [1, [2], 3, [4, [5]], 6]; // 3

function getArrayDepth(arr)
{

    if (!Array.isArray(arr))
    {
        return 0;
    }
    let maxDepth = 0;
    for (let i = 0; i < arr.length; i++)
    {
        const currentDepth = getArrayDepth(arr[i]);
        if (currentDepth > maxDepth)
        {
            maxDepth = currentDepth;
        }
    }
    return maxDepth + 1;
}
console.log(getArrayDepth(arr)); // Output: 4
console.log(getArrayDepth(arr2)); // Output: 1
console.log(getArrayDepth(arr3)); // Output: 1
console.log(getArrayDepth(arr4)); // Output: 6
console.log(getArrayDepth(arr5)); // Output: 3


/**5 kyu Last digit of a large number
Define a function that takes in two non-negative integers
\//\/\/\\//\/\/\//\//\/\//\/\//\/\/\/\/\/\//\\/\/
�
a and
�
b and returns the last decimal digit of
�
�
a
b
 . Note that
�
a and
�
b may be very large!

For example, the last decimal digit of
9
7
9
7
  is
9
9, since
9
7
=
4782969
9
7
 =4782969. The last decimal digit of
(
2
200
)
2
300
(2
200
 )
2
300

 , which has over
1
0
92
10
92
  decimal digits, is
6
6. Also, please take
0
0
0
0
  to be
1
1.

You may assume that the input will always be valid.

Examples
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9
lastDigit("10","10000000000")  // returns 0
 */

function lastDigit(str1, str2)
{
    if (str2 === '0')
    {
        return 1; 
    }

    const lastDigit = parseInt(str1.slice(-1));
    const exponent = parseInt(str2.slice(-2)) % 4;

    if (exponent === 0)
    {
        return Math.pow(lastDigit, 4) % 10;
    } else
    {
        return Math.pow(lastDigit, exponent) % 10;
    }
}










/*
4 kyu
Adding Big Numbers

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives



function add(a, b)
{
    let sum = "";
    let carry = 0;
    let maxLength = Math.max(a.length, b.length);

    // إضافة الأرقام بدءًا من الأرقام الأقل أهمية (الأرقام اليمينية) حتى الأرقام الأعلى أهمية (الأرقام اليسارية)
    for (let i = 0; i < maxLength; i++)
    {
        let digitA = Number(a[a.length - 1 - i]) || 0; // الرقم في العدد الأول
        let digitB = Number(b[b.length - 1 - i]) || 0; // الرقم في العدد الثاني
        let digitSum = digitA + digitB + carry; // جمع الرقمين والرقم المنقول

        carry = Math.floor(digitSum / 10); // حساب الرقم المنقول للعمود الأعلى
        sum = (digitSum % 10) + sum; // إضافة الرقم الحالي إلى الجواب
    }
    // إضافة الرقم المنقول الأخير إذا كان موجودًا
    if (carry > 0)
    {
        sum = carry + sum;
    }
    return sum;
}
*/

/* 5 kyu Scramblies

DESCRIPTION:
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

function scramble2(str1, str2)
{
    let charCount1 = {};
    let charCount2 = {};

    // تعداد الحروف في str1
    for (let i = 0; i < str1.length; i++)
    {
        charCount1[str1[i]] = (charCount1[str1[i]] || 0) + 1;
    }

    // تعداد الحروف في str2
    for (let j = 0; j < str2.length; j++)
    {
        charCount2[str2[j]] = (charCount2[str2[j]] || 0) + 1;
    }

    // التحقق من توافق الحروف بين str1 و str2
    for (let char in charCount2)
    {
        if (!charCount1[char] || charCount1[char] < charCount2[char])
        {
            return false;
        }
    }
    return true;
}

console.log(scramble2('rkqodlw', 'world')); //==> True
console.log(scramble2('cedewaraaossoqqyt', 'codewars')); // ==> True
console.log(scramble2('katas', 'steak')); //==> False


/*
5 kyu
Extract the domain name from a URL

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

*/
const url = "http://github.com/carbonfive/raygun" //-> domain name = "github"
const url2 = "http://www.zombie-bites.com" // -> domain name = "zombie-bites"
const url3 = "https://www.cnet.com" // -> domain name = "cnet"

function domainName(url) {

    let clearUrl = url.replace(/^(https?:\/\/)?(www\.)?()/, ''); // هين احنا حذفنا البرتوكول زائد الدبليو
    let domainName;
    domainNameHaz  = clearUrl.split('.')[0];
    return domainNameHaz;
}
// another solution
function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

console.log(domainName(url));
console.log(domainName(url2));
console.log(domainName(url3));


/*
5 kyu
First non-repeating character
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
بحاجة لإعادة وتمكين
For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
function firstNonRepeatingLetter(string)
{
    if (!string)
    {
        return "";
    }

    // تحويل الحروف إلى صغيرة الأحرف
    var stringLowercase = string.toLowerCase();

    // حلقة تفحص السلسلة وتبحث عن حرف يحدث مرة واحدة فقط
    for (var i = 0; i < stringLowercase.length; i++)
    {
        var char = stringLowercase.charAt(i);
        var count = stringLowercase.split(char).length - 1;
        if (count === 1)
        {
            var nonRepeatingChar = string.charAt(i);
            break;
        }
    }
    // يجب التعامل مع حالة عدم وجود حرف يتكرر مرة واحدة
    if (!nonRepeatingChar)
    {
        return "";
    }
    // البحث عن الفهرس للحرف الذي يتكرر مرة واحدة في السلسلة الأصلية
    var index = stringLowercase.indexOf(nonRepeatingChar.toLowerCase());
    var nonRepeatingCharCorrectCase = string.charAt(index);
    // إرجاع الحرف الذي يتكرر مرة واحدة بالحالة الصحيحة
    return nonRepeatingCharCorrectCase;
}

function firstNonRepeatingLetter(string)
*/








































