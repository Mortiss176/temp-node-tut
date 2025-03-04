const os = require('os');

// informacja a aktuanym uzytkowniku
const user = os.userInfo()
console.log(user);

// zwraca czas systemowy w sekundach
console.log(`The System Uptime is ${os.uptime()} seconds`)

// zwraca informacje o systemie
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)