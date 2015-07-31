(function() {
  var App;

  App = (function() {
    function App() {
      angular.element(document).ready((function(_this) {
        return function() {
          return _this.start();
        };
      })(this));
      return ['ngAria', 'ngRoute', 'ngLodash', 'ngAnimate'];
    }

    App.prototype.start = function() {
      return angular.bootstrap(document, ['app']);
    };

    return App;

  })();

  angular.module('app', new App());

}).call(this);

(function() {
  var Routes;

  Routes = (function() {
    function Routes($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider.when('/', {
        controller: 'view1Controller',
        templateUrl: 'pages/view1.html'
      }).when('/view2', {
        controller: 'view2Controller',
        templateUrl: 'pages/view2.html'
      }).otherwise({
        redirectTo: '/'
      });
    }

    return Routes;

  })();

  angular.module('app').config(['$locationProvider', '$routeProvider', Routes]);

}).call(this);

(function() {
  var View1;

  View1 = (function() {
    function View1($scope) {
      console.log('view1 controller');
      $scope.pageClass = 'view1';
    }

    return View1;

  })();

  angular.module('app').controller('view1Controller', ['$scope', View1]);

}).call(this);

(function() {
  var View2;

  View2 = (function() {
    function View2($scope) {
      console.log('view2 controller');
      $scope.pageClass = 'view2';
    }

    return View2;

  })();

  angular.module('app').controller('view2Controller', ['$scope', View2]);

}).call(this);

(function() {
  var Browser;

  Browser = (function() {
    function Browser() {
      var desktop, md, mobile, tablet;
      md = new MobileDetect(window.navigator.userAgent);
      mobile = md.mobile() === null ? false : true;
      tablet = md.tablet() === null ? false : true;
      desktop = (mobile && tablet) === false;
      return {
        mobile: mobile,
        tablet: tablet,
        desktop: desktop
      };
    }

    return Browser;

  })();

  angular.module('app').factory('Browser', [Browser]);

}).call(this);
