// 1
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];  
// let string = '';
// for (let i = 0; i < friends.length; i += 1){
// string += friends[i];
// if (i < friends.length - 1){
//     string += ', ';
// }
// }
// console.log(string);
// 1.2
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];  
// console.log(friends.join(', '));
// 2
// 2.1
// const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5']; 
// cards.splice(2, 1);
// console.log(cards);
// 2.2
// const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5']; 
// cardsAdd = cards.push('Карточка-6');
// console.log(cards);
// 2.3
const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5']; 
cards.splice(3, 1, 'Hello');
console.log(cards);