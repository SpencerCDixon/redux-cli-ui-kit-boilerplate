const fs = require('fs');
const path = require('path');

module.exports = {
  description() {
    return 'Generates a UI component template';
  },
  afterInstall(options) {
    const name = options.entity.name;
    const srcIndexPath = path.resolve(__dirname, '..', '..', 'src', 'index.js');
    const exportString = `export { ${name} } from './components/${name}';\n`;

    fs.appendFile(srcIndexPath, exportString, function(err) {
      if (err) {
        console.log(err);
        console.log('ERROR: wasnt able to append component in index exports');
      }
    });

    this.ui.writeLine('SUCCESS: added your component to src/index.js');
  },
};
