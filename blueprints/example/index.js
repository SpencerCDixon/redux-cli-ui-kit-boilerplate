function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  description() {
    return 'Generates an example component to be used to teach people how to use component';
  },

  locals: function(options) {
    var componentName = options.entity.options.comp;

    return {
      componentName: capitalizeFirstLetter(componentName)
    }
  },

  fileMapTokens: function(options) {
    var componentName = options.entity.options.comp;

    if (!componentName) {
      throw new Error('Needs a component name...');
    }

    return {
      __component__: function(options){
        return capitalizeFirstLetter(componentName);
      },
    };
  },
};
