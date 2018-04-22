const { promisify } = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

(async () => {
  const reactScriptsConfigPath = './node_modules/react-scripts/config/paths.js';
  const indexJsPath = '.';
  try {
    let data = await readFile(reactScriptsConfigPath, 'utf8');
    data = data.replace(/src/g, indexJsPath);
    await writeFile(reactScriptsConfigPath, data, 'utf8');
  } catch(err) {
    console.log(err);
    throw err;
  }
})();
