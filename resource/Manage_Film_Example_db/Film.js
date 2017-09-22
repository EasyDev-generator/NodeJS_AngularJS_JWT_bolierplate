const app = require('../../app.js');
const db_Manage_Film_Example_db = require('../../db/Manage_Film_Example_db_schema.js')
const properties = require('../../properties.js');
const handleError = require('../../security/util.js').handleError;
require('./custom/FilmCustom.js');

/*
 * SCHEMA DB Film
 * 
	{
		genre: {
			type: 'String',
			enum : ["Action","Crime","Fantasy","Horror"], 
		},
		title: {
			type: 'String', 
			required : true
		},
		year: {
			type: 'Number'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		cast: [{
			type: Schema.ObjectId,
			ref : "Film"
		}],
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
	
app.post(properties.api + '/films/', function(req, res){
	obj = new db_Manage_Film_Example_db.Film(req.body);
	obj.save(function(err){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - REMOVE

app['delete'](properties.api + '/films/:id', function(req, res){
	db_Manage_Film_Example_db.Film.findByIdAndRemove(req.params.id, function (err) {
		  if (err) return handleError(err, res);
		  res.send(err);
	});
});

//CRUD - FIND BY cast
	
app.get(properties.api + '/films/findBycast/:key', function(req, res){

	db_Manage_Film_Example_db.Film.find({ 'cast' : req.params.key}).exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
	
});

//CRUD - FIND BY filmMaker
	
app.get(properties.api + '/films/findByfilmMaker/:key', function(req, res){

	db_Manage_Film_Example_db.Film.find({ 'filmMaker' : req.params.key}).exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
	
});
	
//CRUD - GET ONE
	
app.get(properties.api + '/films/:id', function(req, res){
	db_Manage_Film_Example_db.Film.findOne({_id:req.params.id}).exec(function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - GET LIST
	
app.get(properties.api + '/films/', function(req, res){
	db_Manage_Film_Example_db.Film.find().exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
});

//CRUD - LINK LIST cast
	
app.post(properties.api + '/films/cast/:key', function(req, res){

	db_Manage_Film_Example_db.Film.find({ cast: req.params.key }, function (err, list){
		var listInsert = req.body.list;
		var key = req.params.key;
		db_Manage_Film_Example_db.Film.update({ cast : key, '_id': {$nin: listInsert}}, {$pull: { 'cast': key}}, {multi: true}, function (err) {
			if (err) return handleError(err, res);
			db_Manage_Film_Example_db.Film.update({'_id': {$in: listInsert}}, {$addToSet: { 'cast': key}}, {multi: true}, function (err) {
				if (err) return handleError(err, res);
				res.send(err);  
			});
		});
	});
	
});

//CRUD - LINK LIST filmMaker
	
app.post(properties.api + '/films/filmMaker/:key', function(req, res){

	db_Manage_Film_Example_db.Film.find({ filmMaker: req.params.key }, function (err, list){
		var listInsert = req.body.list;
		var key = req.params.key;
		db_Manage_Film_Example_db.Film.update({ filmMaker : key, '_id': {$nin: listInsert}}, {$pull: { 'filmMaker': key}}, {multi: true}, function (err) {
			if (err) return handleError(err, res);
			db_Manage_Film_Example_db.Film.update({'_id': {$in: listInsert}}, {$addToSet: { 'filmMaker': key}}, {multi: true}, function (err) {
				if (err) return handleError(err, res);
				res.send(err);  
			});
		});
	});
	
});

//CRUD - EDIT
	
app.post(properties.api + '/films/:id', function(req, res){
	db_Manage_Film_Example_db.Film.findByIdAndUpdate(req.params.id, req.body, {'new': true}, function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */

