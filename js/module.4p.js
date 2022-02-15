let usaPresident = 'Дональд Трамп';
let germanyChancellor = 'Ангела Меркель';
let theMostBeautifulMan = 'Роберт Паттинсон';

function myOwnSocietyScope() {
//   Локальная область видимости
  let myFriend = "Фрэнклин"; 
  console.log(usaPresident);
  let country = 'Ukraine';
  if (country === 'Ukraine') {
    var theMostBeautifulMan = 'Олег Винник';
  }
  console.log(theMostBeautifulMan);
  
}


myOwnSocietyScope();

