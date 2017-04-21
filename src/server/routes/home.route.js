const homeRouter = require('express').Router();
let fetch = require('node-fetch');
let allEvents = [];
homeRouter.get('/categories', function showAll(req, res, next){
  fetch('https://api.meetup.com/2/categories',
  {
  method: 'GET',
  headers: {
      authorization: 'Bearer 625c4c511a7c237c6e2e2d374e66313'
    }
  });
});

module.exports = homeRouter;
