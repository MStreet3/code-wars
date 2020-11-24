/* 
Given a string, capitalize the letters that 
occupy even indexes and odd indexes separately, 
and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. 
See test cases for more examples.
The input will be a lowercase string with no spaces.
 */

export const capitalize = (msg: string): [string, string] => {
  const even: string[] = [];
  const odd: string[] = [];
  for (let i = 0; i < msg.length; i++) {
    if (i % 2 === 0) {
      even.push(msg[i].toUpperCase());
      odd.push(msg[i].toLowerCase());
    } else {
      even.push(msg[i].toLowerCase());
      odd.push(msg[i].toUpperCase());
    }
  }
  return [even.join(''), odd.join('')];
};

console.log(capitalize('abracadabra'));
console.log(capitalize('abcdef'));
console.log(capitalize('codewars'));
