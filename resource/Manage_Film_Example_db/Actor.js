const app = require('../../app.js');
const db_Manage_Film_Example_db = require('../../db/Manage_Film_Example_db_schema.js')
const properties = require('../../properties.js');
const handleError = require('../../security/util.js').handleError;
require('./custom/ActorCustom.js');

/*
 * SCHEMA DB Actor
 * 
	{
		birthDate: {
			type: 'Date'
		},
		name: {
			type: 'String', 
			required : true
		},
		surname: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		cast: [{
			type: Schema.ObjectId,
			ref : "Film"
		}],
		
	}
 * 
 */



//CRUD METHODS


//CRUD - CREATE
	
app.post(properties.api + '/actors/', function(req, res){
	obj = new db_Manage_Film_Example_db.Actor(req.body);
	obj.save(function(err){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - REMOVE

app['delete'](properties.api + '/actors/:id', function(req, res){
	db_Manage_Film_Example_db.Actor.findByIdAndRemove(req.params.id, function (err) {
		  if (err) return handleError(err, res);
		  res.send(err);
	});
});
	
//CRUD - GET ONE
	
app.get(properties.api + '/actors/:id', function(req, res){
	db_Manage_Film_Example_db.Actor.findOne({_id:req.params.id}).exec(function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - GET LIST
	
app.get(properties.api + '/actors/', function(req, res){
	db_Manage_Film_Example_db.Actor.find().exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
});

//CRUD - EDIT
	
app.post(properties.api + '/actors/:id', function(req, res){
	db_Manage_Film_Example_db.Actor.findByIdAndUpdate(req.params.id, req.body, {'new': true}, function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */

