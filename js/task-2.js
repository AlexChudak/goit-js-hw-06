const numbers = [1, 5, 8, 4, 7, 8, 25, 1];

// numbers.forEach(function (element, index, array) {
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });

// const mappedNumbers = numbers.map(function (element) {
//   return element - 1;
// });

// console.log(numbers);
// console.log(mappedNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Kiwi', timePlayed: 540, points: 88, online: true },
  { id: 'player-3', name: 'Alex', timePlayed: 220, points: 42, online: false },
  { id: 'player-4', name: 'Lemon', timePlayed: 80, points: 12, online: true },
  { id: 'player-5', name: 'Apple', timePlayed: 45, points: 96, online: false },
];

// const mappedPlayers = players.map(player => player.points);

// console.log(mappedPlayers);

// const updatePlayers = players.map(function (player) {
//   console.log(player);
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });
// console.table(updatePlayers);

const newPlayer = 'player-3';

const findToPlayer = players.map(function (player) {
  console.log(player.id);
  if (player.id === newPlayer) {
    return { ...player, timePlayed: player.timePlayed + 1500 };
  }
  return player;
});
console.table(findToPlayer);
