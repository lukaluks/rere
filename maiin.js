// ПЕРЕТВОРЕННЯ В РЯДОК ЗА ДОПОМОГОЮ FOR

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"]
// let friendlist =""
// for (const friend of friends) {
//     friendlist += friend + ","

// }
// console.log(friendlist);


// ПЕРЕТВОРЕННЯ В РЯДОК ЗА ДОПОМОГОЮ JOIN

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"]
// const friendlist = friends.join(",");
// console.log(friendlist);




const cards = ["карточка 1", "карточка 2", "карточка 3", "карточка 4", "карточка 5"];
// cards.splice(1, 3);
// console.log(cards);


// cards.indexOf("карточка 3");
// console.log(cards);


// cards.splice(5, 0, "карточка 6")
// console.log(cards);


cards.splice(4, 1,"карточка 4", "карточка 1");
console.log(cards);