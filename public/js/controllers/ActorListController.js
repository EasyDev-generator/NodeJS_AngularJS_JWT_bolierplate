// START - USED SERVICES
/*
 *	ActorService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	ActorService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ActorService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('ActorListController', ['$scope', 'ActorService',
    function ($scope, ActorService ) {
		
    	$scope.list = ActorService.query();
    	
}]);