var path = require('path');
var fs   = require('fs');

const routesPath = path.resolve('docs', 'routes.js');
const sideBarPath = path.resolve('docs', 'components', 'Sidebar', 'Sidebar.js');

module.exports = {
  description() {
    return 'Generates a container component to be used for documentation';
  },

  afterInstall(options) {
    this.writeImportStatement(options.entity.name);
    this.writeNewRoute(options.entity.name);
    this.writeSideBarLink(options.entity.name);
  },

  writeImportStatement(name) {
    this.ui.writeCreate('Adding import statement to routes');
    const containerName = `${name}Container`;
    const templateString = `import ${containerName} from 'containers/${containerName}';`;

    const content = fs.readFileSync(routesPath).toString().split('\n');
    const importIndex = content.indexOf('// Container Views');
    const addIndex = importIndex + 1;

    content.splice(addIndex, 0, templateString);

    fs.writeFileSync(routesPath, content.join('\n'), 'utf8');
    this.ui.writeCreate('Successfully added import statement for new container');
  },

  writeNewRoute(name) {
    this.ui.writeCreate('Adding new route to your routes.js file.');
    const containerName = `${name}Container`;
    const templateString = `      <Route path="${this.downcase(name)}" component={${containerName}} />`;

    const content = fs.readFileSync(routesPath).toString().split('\n');
    const importIndex = content.indexOf('    <Route path="components" component={CompLayout}>');
    const addIndex = importIndex + 1;

    content.splice(addIndex, 0, templateString);
    fs.writeFileSync(routesPath, content.join('\n'), 'utf8');
    this.ui.writeCreate('Successfully added new route');
  },

  writeSideBarLink(name) {
    this.ui.writeCreate('Adding link to the sidebar');
    const templateString = `        <SidebarLink to="/components/${this.downcase(name)}">${name}</SidebarLink>`

    const content = fs.readFileSync(sideBarPath).toString().split('\n');
    const importIndex = content.indexOf('      </div>');

    content.splice(importIndex, 0, templateString);
    fs.writeFileSync(sideBarPath, content.join('\n'), 'utf8');
    this.ui.writeCreate('Successfully added new link to sidebar');
  },

  downcase(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  },
};
