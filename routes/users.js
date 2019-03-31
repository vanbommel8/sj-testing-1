var express = require('express');
var router = express.Router();

var User = require('../models/users');

router.get('/', function(req, res) {
    User.find(function(err, users){
      if (err) return res.status(500).json({error: err});
      res.json(users);
    });
})

router.get('/:id', function(req, res) {
  User.findOne({_id: req.params.id},function(err, user){
    if (err) return res.status(500).json({error: err});
    if(!user) return res.status(404).json({message: 'Utente non trovato'})
    res.json(user);
  });
})

router.post('/', function(req, res) {
    var newUser = new User(req.body);
    newUser.save(function(err){
      if(err) return res.status(500).json({error: err});
      res.status(201).json(newUser);
    })
})

router.put('/:id', function(request, response) {
    User.findOne({_id: request.params.id})
    .exec(function(err, user) {
      if(err) return response.status(500).json({error:err});
      if(!user) return response.status(404).json({message: 'Utente non trovato'})
      var i = 0;
      for(key in request.body) {
        user[key] = request.body[key];
      }
      user.save(function(err) {
        if(err) return response.status(500).json({error: err});
        response.json(user);
      })
    })
})

router.delete('/:id', function(req, res) {
  User.findOne({_id: req.params.id})
    .exec(function(err, user) {
      if(err) return res.status(500).json({error: err});
      if(!user) return res.status(404).json({message: 'Utente non trovato'});
      User.remove({_id: req.params.id}, function(err) {
        if(err) return res.status(500).json({error: err})
        res.json({message: 'Utente eliminato correttamente'})
      })
    })
    
})

module.exports = router
