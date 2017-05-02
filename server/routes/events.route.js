const eventRouter = require('express').Router();

let fetch = require('node-fetch');

let AllGroupEvents = [];

eventRouter.get('/events', function showAllEvents(req, res, next){

  fetch('https://api.meetup.com/find/events?&sign=true&photo-host=public&lon=-77.0315170&lat=38.8986010&key=6c3f627cb3159597874394e545dd5d',
    {
      method:'GET'
    }
  ).then(function handleRes(resObj){
    return resObj.json();
  }).then(function resData(data){
    return res.json(data);
  }).catch(function handleErr(err){
    console.log(err);
    res.status(500);
    res.json({ error: 'Unable to load your data from the Meetup API'});
  });
});
module.exports = eventRouter;
