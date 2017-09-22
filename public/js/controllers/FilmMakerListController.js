// START - USED SERVICES
/*
 *	FilmMakerService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	FilmMakerService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * FilmMakerService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('FilmMakerListController', ['$scope', 'FilmMakerService',
    function ($scope, FilmMakerService ) {
		
    	$scope.list = FilmMakerService.query();
    	
}]);