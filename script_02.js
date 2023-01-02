const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
/*
  //liste des livres du CDI
  books.forEach(elementTab => {
    console.log(elementTab.title)
  });
*/
/*
//Est-ce que tous les livres ont été empruntés au moins une fois ?
console.log(books.every(emprunter => emprunter.rented > 0));
*/
/*
//Quel est le livre le plus emprunté ?

let mostRented = books.reduce((max, book) => max.rented > book.rented ? max : book);
console.log(`The most rented book is ${mostRented.title}`);


//Quel est livre le moins emprunté ?
let lessRented = books.reduce((min, book) => min.rented < book.rented ? min : book);
console.log(`The less rented book is ${lessRented.title}`);
*/

//Supprime le livre avec l'ID 133712
console.log(books.filter(id => id.id !== 133712 ));

