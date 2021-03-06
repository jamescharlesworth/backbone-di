var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

//see https://github.com/karma-runner/karma-requirejs/issues/6
for (var file in window.__karma__.files) {
  window.__karma__.files[file.replace(/^\//, '')] = window.__karma__.files[file];
}

requirejs.config({
  // Karma serves files from '/base'

  baseUrl: '/base/public/javascripts',

  "paths": {
    'jquery': 'vendor/jquery-1.10.2.min',
    'backbone' : 'vendor/backbone-min',
    'underscore': 'vendor/underscore-min'
  },
  shim: {
   'underscore': {
      "exports": '_'
    },
    "backbone": {
      "deps": [
        "underscore",
        "jquery"
      ],
      "exports": "Backbone"
    },
    "backbone-di": {
      "deps": ["backbone", "underscore"]
    }
  },
  // ask Require.js to load these files (all our tests)
  deps: tests,
  // start test run, once Require.js is done
  callback: window.__karma__.start
});
