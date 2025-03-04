// npm - globalna komenda, instalowana razem z node
// npm -- version

// local dependency - uzywane tylko w lokalnych projektach
// npm i <nazwaPakietu>

// global dependency - uzywane w kazdym projekcie (globalnie)
// npm install -g <nazwaPakietu>
// sudo npm install -g <nazwaPakietu> (jezeli trzeba sudo)

// package.json - plik, w ktorym znajduja sie inforacje na temat projektu/pakietu
// manualne tworzenie (stworzyc package.json w root, stworzyc wlasciwosci/ustawienia itp.)
// npm init (krok po kroku, nacisnij enter zeby skipnac)
// npm init -y (wszystko domyslnie)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);