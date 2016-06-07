var paths = require('./paths'),
    path  = require('path');

module.exports = {
  makeOutputPath (type) {
    return path.join.apply(path, [paths.devRoot, paths[type].dir]);
  },

  makeMatchPath (type) {
    return path.join.apply(path, [paths.sourceRoot, paths[type].dir, paths[type].match]);
  },

  makeWatchPath (type) {
    return path.join.apply(path, [paths.sourceRoot, paths[type].dir, (paths[type].watch || paths[type].match)]);
  },

  makeDistPath (type) {
    return path.join.apply(path, [paths.distRoot, paths[type].dir]);
  },

  reportChange (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  },

  paths: paths
};
