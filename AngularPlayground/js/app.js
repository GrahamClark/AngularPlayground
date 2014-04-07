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

angular.module('myApp', ['emailParser'])
    .controller('PlayController', [
        '$scope',
        '$filter',
        function($scope, $filter) {
            $scope.name = $filter('lowercase')($scope.inName);
        }
    ]);
