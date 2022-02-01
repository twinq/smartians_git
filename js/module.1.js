//indicated the length of the royal tract in league
const lgKingsRoad = 625; 
//indicated how many km in 1 league
let kmKingsRoad = lgKingsRoad * 4.82803; 
//indicated how many ml in 1 league
let mlKingsRoad = lgKingsRoad * 3; 
//indicater how many yd in 1 league
let ydKingsRoad = lgKingsRoad * 5280; 

//rounds the value to the second decimal place0
kmKingsRoad = Math.floor(kmKingsRoad * 100) / 100;
mlKingsRoad = Math.floor(mlKingsRoad * 100) / 100;
ydKingsRoad = Math.floor(ydKingsRoad * 100) / 100;

console.log(`Длина королевского тракта ${lgKingsRoad} лиг.`);
console.log(`Длина королевского тракта ${kmKingsRoad} километров.`);
console.log(`Длина королевского тракта ${mlKingsRoad} миль.`);
console.log(`Длина королевского тракта ${ydKingsRoad} ярдов.`);