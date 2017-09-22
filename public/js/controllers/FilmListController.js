// START - USED SERVICES
/*
 *	FilmService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	FilmService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * FilmService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('FilmListController', ['$scope', 'FilmService',
    function ($scope, FilmService ) {
		
    	$scope.list = FilmService.query();
    	
}]);