Package.describe({
  name: 'planettraining:meteor-angular-inview',
  version: '1.5.0',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  describe : 'angular inview meteor package'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('angular-inview/angular-inview.js');
});
