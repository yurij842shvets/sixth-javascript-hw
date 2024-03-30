const arr = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = "";

const joinMeth = arr.join(" ");
console.log(joinMeth);

for(let i = 0; i < arr.length; i++) {
  string += arr[i];
  if (i !== arr.length -1) {
    string += ", "
  }
}
console.log(string);

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];

const cardToRemove = cards.indexOf('Карточка-3');
const splice = cards.splice(2, 1, cardToRemove);
console.log(cards)
 
const cardToInsert = 'Карточка-6';
const pushMeth = cards.push(cardToInsert);
console.log(cards);

