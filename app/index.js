var angular = require('angular');
var app = angular.module('app', []);

require('./controllers')(app);
require('./directives')(app);
