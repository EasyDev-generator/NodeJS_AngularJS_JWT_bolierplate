// START - USED SERVICES
/*
 *	FilmMakerService.create
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	FilmService.findByfilmMaker
 *		PARAMS: 
 *					Objectid key - Id della risorsa filmMaker da cercare
 *		
 *
 *	FilmMakerService.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 *	FilmService.list
 *		PARAMS: 
 *		
 *
 *	FilmService.strictLinkListOffilmMaker
 *		PARAMS: 
 *					Objectid key - Id Film to link list
 *					Array list - List of linked resource
 *		
 *
 *	FilmMakerService.update
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * FilmService  
 * FilmMakerService  
 */
// END - REQUIRED RESOURCES

app.controller('FilmMakerEditController', ['$scope', '$location', '$routeParams', '$q', 'FilmService', 'FilmMakerService', 'FilmService',
    function ($scope, $location, $routeParams, $q, FilmService , FilmMakerService , FilmService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = FilmMakerService.get({_id: $scope.id});
        	$scope.external._FilmfilmMaker = FilmService.findByfilmMaker({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new FilmMakerService();
        	$scope.external._FilmfilmMaker = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/filmmakers/');
    		});
    	}
    	
    	$scope.remove = function(){
    		FilmMakerService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/filmmakers/');
    		});
    	}
    	
    		
        //manage External relation filmMaker
        		
    	$scope.list_FilmfilmMaker = FilmService.query();
    	
}]);