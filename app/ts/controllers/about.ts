/// <reference path="../app.ts" />

'use strict';

module eventsUiApp {
  export interface IAboutScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class AboutCtrl {

    constructor (private $scope: IAboutScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('eventsUiApp')
  .controller('AboutCtrl', eventsUiApp.AboutCtrl);
