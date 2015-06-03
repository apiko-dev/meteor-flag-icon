Package.describe({
  name: 'jss:flag-icon',
  version: '0.7.1',
  summary: 'CSS for vector based country flags.',
  git: 'https://github.com/JSSolutions/meteor-flag-icon'
});


addDirectory = function () {
  if (!arguments.length) {
    throw 'You must specify directory name!'
  }
  var _ = Npm.require('underscore');
  var path = Npm.require('path');
  var fs = Npm.require('fs');

  var dir = arguments[0];
  var otherArgs = _.rest(arguments);
  // XXX COMPAT WITH 0.8.x
  var addFiles = this.addFiles || this.add_files;


  var srcPath;
  if (process.env.PACKAGE_DIRS) {
    srcPath = process.env.PACKAGE_DIRS;
  } else {
    srcPath = path.join(
      path.resolve('.'), 'packages'
    );
  }
  srcPath = path.join(srcPath, dir);
  var files = fs.readdirSync(srcPath);
  files.forEach(function (file) {
    file = path.join(dir, file);
    var args = [file].concat(otherArgs);
    addFiles.apply(this, args);
  });
};


Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.constructor.prototype.addDirectory = addDirectory;

  var path = Npm.require('path');
  api.addDirectory(path.join(
    'flag-icon', 'flags', '1x1'
  ), [
    'client'
  ],{
    isAsset: true
  });
  api.addDirectory(path.join(
    'flag-icon', 'flags', '4x3'
  ), [
    'client'
  ],{
    isAsset: true
  });
  api.addFiles('flag-icon.css', 'client');
});
