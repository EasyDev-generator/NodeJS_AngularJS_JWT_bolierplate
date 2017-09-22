/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE ImpiegatiService PLEASE EDIT js/services/custom/FilmCustomService.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */


app.factory('FilmService', ['$resource', '$rootScope', 'FilmServiceCustom',
  function($resource, $rootScope, FilmServiceCustom){
    return $resource( $rootScope.baseUrl + "/films/:_id", {_id:'@_id'}, $.extend({
        'findBycast': { 
        	url: $rootScope.baseUrl + '/films/findBycast/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		key: '@key',
        		 
        	}
        },
        'findByfilmMaker': { 
        	url: $rootScope.baseUrl + '/films/findByfilmMaker/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		key: '@key',
        		 
        	}
        },
        'strictLinkListOfcast': { 
        	url: $rootScope.baseUrl + '/films/cast/:key',
        	method: 'POST',
        	isArray: true,
        	params: {
        		key: '@key',
        		 
        	}
        },
        'strictLinkListOffilmMaker': { 
        	url: $rootScope.baseUrl + '/films/filmMaker/:key',
        	method: 'POST',
        	isArray: true,
        	params: {
        		key: '@key',
        		 
        	}
        },
    }, FilmServiceCustom));
}]);