/**
 * angular-strap
 * @version v2.0.0-beta.4 - 2015-04-03
 * @link http://mgcrea.github.io/angular-strap
 * @author [object Object]
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function(window, document, undefined) {
'use strict';
// Source: dist/modules/aside.tpl.js
angular.module('mgcrea.ngStrap.aside').run(['$templateCache', function($templateCache) {
$templateCache.put('aside/aside.tpl.html',
    "<div class=\"aside\" tabindex=\"-1\" role=\"dialog\"><div class=\"aside-dialog\"><div class=\"aside-content\"><div class=\"aside-header\" ng-show=\"title\"><button type=\"button\" class=\"close\" ng-click=\"$hide()\">&times;</button><h4 class=\"aside-title\" ng-bind=\"title\"></h4></div><div class=\"aside-body\" ng-bind=\"content\"></div><div class=\"aside-footer\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"$hide()\">Close</button></div></div></div></div>"
  );

}]);

// Source: dist/modules/datepicker.tpl.js
angular.module('mgcrea.ngStrap.datepicker').run(['$templateCache', function($templateCache) {
$templateCache.put('datepicker/datepicker.tpl.html',
    "<div class=\"dropdown-menu datepicker\"><table tabindex=\"-1\" height=\"100%\"><thead><tr class=\"text-center\"><th><button type=\"button\" class=\"btn btn-default pull-left\" ng-click=\"$selectPane(-1)\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th><th colspan=\"5\" style=\"width: 100%\"><button type=\"button\" class=\"btn btn-default btn-block text-strong\" ng-click=\"$toggleMode()\"><strong style=\"text-transform: capitalize\" ng-bind=\"title\"></strong></button></th><th><button type=\"button\" class=\"btn btn-default pull-right\" ng-click=\"$selectPane(+1)\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th></tr><tr ng-show2=\"labels\" ng-bind-html=\"labels\"></tr></thead><tbody><tr ng-repeat=\"(i, row) in rows\"><td colspan=\"7\" style=\"letter-spacing: -4px\"><span ng-repeat=\"(j, el) in row\" class=\"text-center\"><button type=\"button\" class=\"btn btn-default\" style=\"height:{{height}}px;width:{{width}}%\" ng-class=\"{'btn-primary': el.selected}\" ng-click=\"$select(el.date)\" ng-disabled=\"el.disabled\"><span ng-class=\"{'text-muted': el.muted}\" ng-bind=\"el.label\"></span></button></span></td></tr></tbody></table></div>"
  );

}]);

// Source: dist/modules/dropdown.tpl.js
angular.module('mgcrea.ngStrap.dropdown').run(['$templateCache', function($templateCache) {
$templateCache.put('dropdown/dropdown.tpl.html',
    "<ul tabindex=\"-1\" class=\"dropdown-menu\" role=\"menu\"><li role=\"presentation\" ng-class=\"{divider: item.divider}\" ng-repeat=\"item in content\"><a role=\"menuitem\" tabindex=\"-1\" href=\"{{item.href}}\" ng-if=\"!item.divider\" ng-click=\"$eval(item.click);$hide()\" ng-bind=\"item.text\"></a></li></ul>"
  );

}]);

// Source: dist/modules/modal.tpl.js
angular.module('mgcrea.ngStrap.modal').run(['$templateCache', function($templateCache) {
$templateCache.put('modal/modal.tpl.html',
    "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\" ng-show=\"title\"><button type=\"button\" class=\"close\" ng-click=\"$hide()\">&times;</button><h4 class=\"modal-title\" ng-bind=\"title\"></h4></div><div class=\"modal-body\" ng-bind=\"content\"></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"$hide()\">Close</button></div></div></div></div>"
  );

}]);

// Source: dist/modules/popover.tpl.js
angular.module('mgcrea.ngStrap.popover').run(['$templateCache', function($templateCache) {
$templateCache.put('popover/popover.tpl.html',
    "<div class=\"popover\" ng-show=\"content\"><div class=\"arrow\"></div><h3 class=\"popover-title\" ng-bind=\"title\" ng-show=\"title\"></h3><div class=\"popover-content\" ng-bind=\"content\"></div></div>"
  );

}]);

// Source: dist/modules/select.tpl.js
angular.module('mgcrea.ngStrap.select').run(['$templateCache', function($templateCache) {
$templateCache.put('select/select.tpl.html',
    "<ul tabindex=\"-1\" class=\"select dropdown-menu\" ng-show=\"$isVisible()\" role=\"select\"><li role=\"presentation\" ng-repeat=\"match in $matches\" ng-class=\"{active: $isActive($index)}\"><a style=\"cursor: default\" role=\"menuitem\" tabindex=\"-1\" ng-click=\"$select($index, $event)\"><span ng-bind=\"match.label\"></span> <i class=\"glyphicon glyphicon-ok pull-right\" ng-if=\"$isMultiple && $isActive($index)\"></i></a></li></ul>"
  );

}]);

// Source: dist/modules/tab.tpl.js
angular.module('mgcrea.ngStrap.tab').run(['$templateCache', function($templateCache) {
$templateCache.put('tab/tab.tpl.html',
    "<ul class=\"nav nav-tabs\"><li ng-repeat=\"pane in panes\" ng-class=\"{active: $index == active}\"><a data-toggle=\"tab\" ng-click=\"setActive($index, $event)\" data-index=\"{{$index}}\">{{pane.title}}</a></li></ul><div class=\"tab-content\"><div ng-repeat=\"pane in panes\" class=\"tab-pane\" ng-class=\"[$index == active ? 'active' : '']\" ng-include=\"pane.template || '$pane'\"></div></div>"
  );

}]);

// Source: dist/modules/tooltip.tpl.js
angular.module('mgcrea.ngStrap.tooltip').run(['$templateCache', function($templateCache) {
$templateCache.put('tooltip/tooltip.tpl.html',
    "<div class=\"tooltip\" ng-show=\"title\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" ng-bind=\"title\"></div></div>"
  );

}]);

// Source: dist/modules/typeahead.tpl.js
angular.module('mgcrea.ngStrap.typeahead').run(['$templateCache', function($templateCache) {
$templateCache.put('typeahead/typeahead.tpl.html',
    "<ul tabindex=\"-1\" class=\"typeahead dropdown-menu\" ng-show=\"$isVisible()\" role=\"select\"><li role=\"presentation\" ng-repeat=\"match in $matches\" ng-class=\"{active: $index == $activeIndex}\"><a role=\"menuitem\" tabindex=\"-1\" ng-click=\"$select($index, $event)\" ng-bind=\"match.label\"></a></li></ul>"
  );

}]);

})(window, document);
