angular.module('emailParser', [])
    .factory('EmailParser', [
        '$interpolate',
        function($interpolate) {
            return {
                parse: function(text, context) {
                    var template = $interpolate(text);
                    return template(context);
                }
            }
        }
    ]);

angular.module('myApp.filters', [])
    .filter('capitalise', function() {
        return function(input) {
            if (input) {
                return input[0].toUpperCase() + input.slice(1);
            }
        }
    });

angular.module('myApp', ['emailParser', 'myApp.filters'])
    .controller('PlayController', [
        '$scope',
        '$filter',
        function($scope, $filter) {
            $scope.$watch('inName', function(inName) {
                if (inName) {
                    $scope.name = $filter('lowercase')(inName);
                }
            });
        }
    ])
    .directive('myDirective', function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                myUrl: '=someAttr',
                myLinkText: '@'
            },
            template: '<div><label>My Url Field:</label><input type="text" ng-model="myUrl"/><a href="{{myUrl}}">{{myLinkText}}</a></div>'
        };
    });
