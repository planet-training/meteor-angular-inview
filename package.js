Package.describe({
  name: 'planettraining:angular-inview',
  version: '1.5.0_2',

  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/planet-training/meteor-angular-inview.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  summary : 'angular inview meteor package'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('angular:angular@1.4.0',['client']);
  api.addFiles('bower_components/angular-inview/angular-inview.js',['client']);
});
