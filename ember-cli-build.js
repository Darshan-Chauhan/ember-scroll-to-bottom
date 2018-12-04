/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    sassOptions: {
      extension: 'scss'
    }
  });

  app.import("bower_components/font-awesome/css/font-awesome.css");
  app.import("bower_components/font-awesome/fonts/fontawesome-webfont.eot", { destDir: "fonts" });
  app.import("bower_components/font-awesome/fonts/fontawesome-webfont.svg", { destDir: "fonts" });
  app.import("bower_components/font-awesome/fonts/fontawesome-webfont.ttf", { destDir: "fonts" });
  app.import("bower_components/font-awesome/fonts/fontawesome-webfont.woff", { destDir: "fonts" });
  app.import("bower_components/font-awesome/fonts/fontawesome-webfont.woff2", { destDir: "fonts" });
  app.import("bower_components/font-awesome/fonts/FontAwesome.otf", { destDir: "fonts" });

  return app.toTree();
};
