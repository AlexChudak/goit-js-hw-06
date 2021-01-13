import users from './users.js';

// //Задача №1  Получить массив имен всех пользователей (поле name).
const getUserNames = users => {
  // твой код
  return users.map(user => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//Задача №2  Получить массив объектов пользователей по цвету глаз (поле eyeColor).
const getUsersWithEyeColor = (users, color) => {
  return users.filter(function (user) {
    return user.eyeColor === color;
  });
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//Задача №3 Получить массив имен пользователей по полу (поле gender).
const getUsersWithGender = (users, gender) => {
  return users.filter(function (user) {
    return user.gender === gender;
  });
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//Задача№4 Получить массив только неактивных пользователей (поле isActive).
const getInactiveUsers = users => {
  return users.filter(function (user) {
    return user.isActive === false;
  });
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//задача№5  Получить пользоваля (не массив) по email (поле email, он уникальный).
const getUserWithEmail = (users, email) => {
  return users.find(function (user) {
    return user.email === email;
  });
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//Задача№6 Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
const getUsersWithAge = (users, min, max) => {
  return users.filter(function (user) {
    return user.age > min && user.age < max;
  });
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//Задача№7 Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  // твой код
};

console.log(calculateTotalBalance(users)); // 20916