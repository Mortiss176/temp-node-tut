const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first, second)

writeFileSync('./content/siema.txt','Siema nigga')
writeFileSync('./content/polaczenie.txt',`Wynik: ${first}, ${second}`,{flag:'a'}) // domyslnie nadpisuje, flag: a dodaje