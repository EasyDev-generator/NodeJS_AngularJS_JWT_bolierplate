const app = require('../../app.js');
const db_Manage_Film_Example_db = require('../../db/Manage_Film_Example_db_schema.js')
const properties = require('../../properties.js');
const handleError = require('../../security/util.js').handleError;
require('./custom/FilmMakerCustom.js');

/*
 * SCHEMA DB FilmMaker
 * 
	{
		name: {
			type: 'String', 
			required : true
		},
		surname: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		filmMaker: {
			type: Schema.ObjectId, 
			required : true,
			ref : "Film"
		},
		
	}
 * 
 */



//CRUD METHODS


//CRUD - CREATE
	
app.post(properties.api + '/filmmakers/', function(req, res){
	obj = new db_Manage_Film_Example_db.FilmMaker(req.body);
	obj.save(function(err){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - REMOVE

app['delete'](properties.api + '/filmmakers/:id', function(req, res){
	db_Manage_Film_Example_db.FilmMaker.findByIdAndRemove(req.params.id, function (err) {
		  if (err) return handleError(err, res);
		  res.send(err);
	});
});
	
//CRUD - GET ONE
	
app.get(properties.api + '/filmmakers/:id', function(req, res){
	db_Manage_Film_Example_db.FilmMaker.findOne({_id:req.params.id}).exec(function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - GET LIST
	
app.get(properties.api + '/filmmakers/', function(req, res){
	db_Manage_Film_Example_db.FilmMaker.find().exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
});

//CRUD - EDIT
	
app.post(properties.api + '/filmmakers/:id', function(req, res){
	db_Manage_Film_Example_db.FilmMaker.findByIdAndUpdate(req.params.id, req.body, {'new': true}, function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */

