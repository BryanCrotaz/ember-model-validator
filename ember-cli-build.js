/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    'ember-prism': {
      theme: 'okaidia',
      components: ['javascript', 'handlebars']
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import('bower_components/semantic-ui/dist/semantic.css');
  app.import('bower_components/semantic-ui/dist/semantic.js');

  // Import Highlight.js
  app.import(app.bowerDirectory + "/highlightjs/highlight.pack.min.js");

  app.import(app.bowerDirectory + "/highlightjs/styles/github-gist.css");
  app.import(app.bowerDirectory + "/highlightjs/styles/hybrid.css");

  return app.toTree();
};
