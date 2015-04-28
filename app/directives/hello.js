module.exports = function (app) {
  app.directive('hello', function () {
    return {
      restrict: 'E',
      scope: {},
      replace: true,
      templateUrl: 'directives/hello.tpl.html',
      controller: 'HelloCtrl',
      link: function ($scope, $element) {
        console.warn('my directive');
      }
    };
  });
};