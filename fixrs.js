const fs = require('fs');
const path = './node_modules/react-scripts/config/paths.js';
const folder = '.';

fs.readFile(path, 'utf8', (err, data) => {
 if (err) throw err;
 data = data.replace(/src/g, folder);
 fs.writeFile(path, data, 'utf8');
});