angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('dashboard', {
    url: '/page7',
    templateUrl: 'templates/dashboard.html',
    controller: 'dashboardCtrl'
  })

  .state('transferPage', {
    url: '/page8',
    templateUrl: 'templates/transferPage.html',
    controller: 'transferPageCtrl'
  })

  .state('myProfile', {
    url: '/page9',
    templateUrl: 'templates/myProfile.html',
    controller: 'myProfileCtrl'
  })

  .state('accountStatment', {
    url: '/page10',
    templateUrl: 'templates/accountStatment.html',
    controller: 'accountStatmentCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});