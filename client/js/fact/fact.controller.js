angular.module('fact.controller', [])
	.directive('ans', function (){
		return{
			restrict: 'EA',
			templateUrl: 'views/answer.html'
		}
	})
	.controller('FactController', function ($scope, factResource) {
		$scope.getShow = function () {
			factResource.query({
				name: $scope.name
			}, function (response) {
				$scope.fact = response;
			});	
		};
		// TODO Implement getTrivia and getDate
});