// 1.

// function sumDigits(num1, num2, ...args) {
//   let sum = 0;
//   let firstTwoNum = num1 + num2;
//   for (let num of args) {
//     sum += num;
//   }

//   return [firstTwoNum, sum];
// }
// console.log(sumDigits(1, 2, 3, 4));

// 2.

// const user = {
//   banks: [
//     { address: { city: "Tbilisi" } },
//     { address: { city: "Kutaisi" } },
//     { address: { city: "Batumi" } },
//   ],
// };
// function destructuring({ banks: [, { address: { city } = {} }] }) {
//   console.log(city);
// }
// destructuring(user);

// 3.

const user = {
  firstName: "giorgi",
  lastName: "zandaradze",
  profile: {
    age: 20,
    hobby: "playing basketball",
  },
  cars: ["Porsche", "Audi"],
};
function deepCopy(obj) {
  let clone = {
    ...obj,
    profile: {
      ...obj.profile,
    },
    cars: [...obj.cars],
  };
  return clone;
}
console.log(deepCopy(user));
