const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
/*
//Tableau Nom prenom 
entrepreneurs.forEach(nomPrenom => { console.log([nomPrenom.first, nomPrenom.last])});
*/

/*
//Remplacer l'année par l'âge de l'entrepreneur (version féniant)
entrepreneurs.forEach(i => {        
    console.log(["first:" + " " + i.first, "last:" + " " + i.last, 'year :'+ " " + (2023 - i.year)]);     
 });
//Version 2 pour changer le tableau original
for (let i=0; i < entrepreneurs.length; i++){
    entrepreneurs[i] = { first: entrepreneurs[i].first, last: entrepreneurs[i].last, age: (2023 - entrepreneurs[i].year)};
}
console.log(entrepreneurs)
*/

//Changer le tableau avec firstname et lastname
/*
for (let i=0; i < entrepreneurs.length ; i++){
    entrepreneurs[i]={firstName: entrepreneurs[i].first, lastName: entrepreneurs[i].last, age: (2023 - entrepreneurs[i].year)};    
  }
console.log(entrepreneurs)
*/

//filtrer la liste des gens qui sont nés dans les années 70's
entrepreneurs.forEach(elementDuTableau => {
    if (elementDuTableau.year > 1969 && elementDuTableau.year < 1980) {
        console.log(elementDuTableau);        
    }
});