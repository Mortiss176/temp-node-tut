// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const siema = require('./5-utils');
const data = require('./6-alternative_flavor')
require('./7-mind_grenade')
siema('aurora')
siema(names.mati)
siema(names.marianka)
console.log(data);
