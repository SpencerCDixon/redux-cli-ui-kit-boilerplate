require("babel-register");

var Handlebars = require('handlebars'),
    fs = require('fs'),
    path = require('path');

function normalizeProps(props) {
  return Object.keys(props).map(function(key) {
    var type;
    if (props[key].type.name === 'enum') {
      type = props[key].type.value.map(function(val) {
        return val.value;
      }).join(', ');
    } else {
      type = props[key].type.name;
    }

    return  {
      name: key,
      description: props[key].description,
      required: props[key].required,
      type: type,
      defaultValue: props[key].defaultValue && props[key].defaultValue.value,
    };
  });
}

function generateDocumentation(name, reactAPI) {
  const templatePath = path.resolve(__dirname, 'documentation-template.hbs');
  const source       = fs.readFileSync(templatePath, 'utf8');
  const template     = Handlebars.compile(source);

  const data = {
    title: name,
    description: reactAPI.description,
    props: normalizeProps(reactAPI.props),
  };
  const markdownString = template(data);

  return markdownString;
}

module.exports = generateDocumentation;
