var Animal = require('./../models/animal');

var AnimalController = {
	
	index: function(req, res){
		Animal.find({}, function(err, animal){
			if(err)
				res({err: 'Não foi possível retornar os dados do animal!'});
			else
				res.render('animal/index', { animals: animal });
		});
	},

	show: function(req, res){
	    // Animal.findById({},function(err, userLogado){
	    //   if err
	    //     res(err);
	    //   res(userLogado);
	    // });

		Animal.findById(req.params.id, function(err, animal){
			if(err)
				res({err: 'Não foi possível retornar os dados do animal!'});
			else
				res(animal);
		});
	},

	create: function(req, res){
		var animal = new Animal();

		animal({
			name: name,
			numberChip: numberChip,
			category: category,
			type: type,
			dateBorn: dateBorn,
			colors: colors,
			fur: fur,
			size: size,
			neutered: neutered,
			vaccinated: vaccinated,
			vermifugated: vermifugated,
			history: history,
			photos: photos,
			specitalAdoption: specitalAdoption,
			gender: gender,
			sociable: sociable,
			playful: playful,
			affectionate: affectionate,
			temporaryPlace: temporaryPlace,
			createdDate: new Date()
	}).save(function(err, animal){
			if(err)
				res({err: 'Não foi possível retornar os dados do animal!'});
			else
				res(animal);
		});
	},
	
	update: function(req, res){
		Animal.findById(req.params.id, function(err, animal){
			if(err)
				res({err: 'Não foi possível retornar os dados do animal!'});
			

			Animal.save(function(err, animal){
				if(error)
					callback({error: 'Não foi possível atualizar o usuário!'});
				else
					callback(Animal);
			});
		});
	},

	patch: function(req, res){
		Animal.find({}, function(err, animal){
			if(err)
				res({err: 'Não foi possível retornar os dados do animal!'});
			else
				res(animal);
		});
	},
	
	destroy: function(req, res){
		Animal.findById(req.params.id, function(err, animal){
			if(err){
				res({err: 'Não foi possível retornar os dados do animal!'});
			}else{
				Animal.remove(function(err){
					if(!err)
						res({response:'Animal excluido com sucesso!'});
				});
			}
		});
	}
};
module.exports = AnimalController;
