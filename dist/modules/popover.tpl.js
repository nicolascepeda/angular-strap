/**
 * angular-strap
 * @version v2.0.0-beta.4 - 2014-03-25
 * @link http://mgcrea.github.io/angular-strap
 * @author [object Object]
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('mgcrea.ngStrap.popover').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('popover/popover.tpl.html',
    "<div class=\"popover\" ng-show=\"content\"><div class=\"arrow\"></div><h3 class=\"popover-title\" ng-bind=\"title\" ng-show=\"title\"></h3><div class=\"popover-content\" ng-bind=\"content\"></div></div>"
  );

}]);
