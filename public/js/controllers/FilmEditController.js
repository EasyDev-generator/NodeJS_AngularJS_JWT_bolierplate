// START - USED SERVICES
/*
 *	FilmService.create
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	FilmService.findBycast
 *		PARAMS: 
 *					Objectid key - Id della risorsa cast da cercare
 *		
 *
 *	FilmService.findByfilmMaker
 *		PARAMS: 
 *					Objectid key - Id della risorsa filmMaker da cercare
 *		
 *
 *	FilmService.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 *	FilmService.list
 *		PARAMS: 
 *		
 *
 *	FilmService.list
 *		PARAMS: 
 *		
 *
 *	FilmService.strictLinkListOfcast
 *		PARAMS: 
 *					Objectid key - Id Film to link list
 *					Array list - List of linked resource
 *		
 *
 *	FilmService.strictLinkListOffilmMaker
 *		PARAMS: 
 *					Objectid key - Id Film to link list
 *					Array list - List of linked resource
 *		
 *
 *	FilmService.update
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

app.controller('FilmEditController', ['$scope', '$location', '$routeParams', '$q', 'FilmService', 'ActorService', 'FilmMakerService',
    function ($scope, $location, $routeParams, $q, FilmService , ActorService, FilmMakerService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = FilmService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new FilmService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/films/');
    		});
    	}
    	
    	$scope.remove = function(){
    		FilmService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/films/');
    		});
    	}
    	
    		
        //manage relation cast
        		
    	$scope.list_Actor = ActorService.query();

    	$scope.contain_Actor = function(item){
    		if (!$scope.obj.cast) return false;
    		return $scope.obj.cast.indexOf(item) != -1;
    	}
		    	
		$scope.add_Actor = function(item){
			if(!$scope.obj.cast)
				$scope.obj.cast = [];
			$scope.obj.cast.push(item);
		}
		
		$scope.remove_Actor = function(index){
			$scope.obj.cast.splice(index, 1);
		}
    		
        //manage relation filmMaker
        		
    	$scope.list_FilmMaker = FilmMakerService.query();

}]);