// let arr = [0,1,4,5,9,6,3,2]
// console.log(arr.sort((a,b) => a - b))

// let arr = ['b','d', 'f', 'j', 'a', 'c', 'e']
// console.log(arr.sort((a,b) => a < b? -1 : 1 ))

// let arr = [
//     {
//         name: 'Max',
//         salary: 100,
//     },
//     {
//         name: 'Yrys',
//         salary: 77,
//     },
//     {
//         name: 'Medet',
//         salary: 45,
//     },
//     {
//         name: 'Nur',
//         salary: 66,
//     }
// ]
// console.log(arr.sort((a,b) => a.salary < b.salary ? 1 : -1))

// const foo = (arg) => {
//     for (let i = 0; i <= arg; i++) { // if i-- то будет выполнено обратное действие
//         // console.log(i)
//         if (i % 2 === 0){
//             console.log('even')
//         } else {
//             console.log('odd')
//         }
//     }
// }
//
// foo(7)

// const str = (arg) => {
//     for (let i = 0; i < arg.length; i++)
//         console.log(arg[i])
// }
//
// str('Hi there!')


// hw08

// function sum(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total;
// }
//
// console.log(sum([1, 2, 3, 4]));


// function reversed(str) {
//     let rev = '';
//     for (let i = str.length -1; i >= 0; i--) {
//         rev += str[i];
//     }
//     return rev;
// }
//
// console.log(reversed('ohayo!'))


// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <=n; i++) {
//         result *=i;
//     }
//     return result;
// }
//
// console.log(factorial(6))

// function countVowels(str) {
//     let count = 0;
//     const vowels = 'aeiouAEIOU';
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// }
//
// console.log(countVowels('hello world ohohoh! '))

// function isPrime(n) {
//     if (n <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i ===0) {
//             return false
//         }
//     }
//     return true;
// }
//
// console.log(isPrime(4));
// console.log(isPrime(22));

// function countPositivesSumNegatives(input) {
//
//     if (input && input.length !==0) {
//         let positiveCount = input.filter((el) => el > 0).length;
//
//         let negativeSum = input.filter((el) => el < 0)
//             .reduce((tot, item) => tot + item,0);
//         let result = [positiveCount, negativeSum]
//         return result
//     } else if (input === null || input.length === 0) {
//         return [];
//     }
// }
//
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))


// function reverseWords(str) {
//     // Go for it
//     return str.split('').reverse().join('').split(' ').reverse().join(' ')
// }
//
// console.log(reverseWords('omae wo'))

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     let dad = dadYearsOld;
//     let son = sonYearsOld;
//     let result = dad - (son * 2);
//
//     if (result <= 0) {
//         return Math.abs(result);
//     }
//     return result;
// }
//
// console.log(twiceAsOld(55,30))

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }