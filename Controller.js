//AngularJs
var Api=angular.module("Biding",[]);
Api.controller("First",function($scope){
	$scope.Name="Daniel Melero";
	$scope.NewComment={};
	$scope.Coments=[
	{
		comment: "Good practice",
		username: "Melero"
	},
	{
		comment: "Dawn practice",
		username: "Osvaldo"
	}
	];
		$scope.AddComment=function()
		{
			$scope.Coments.push($scope.NewComment);
		}

});