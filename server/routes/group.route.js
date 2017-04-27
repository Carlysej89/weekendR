const groupRouter = require('express').Router();

let fetch = require('node-fetch');
let allGroups = [];

groupRouter.get('/groups', function showAllGroups(req, res, next){
  fetch('https://api.meetup.com/2/groups?zip=20007&key=6c3f627cb3159597874394e545dd5d',
    {
      method: 'GET'
    }
  ).then(function handleRes(resObj){
    return resObj.json();
  }).then(function resData(data){
    return res.json(data);
  }).catch(function handleErr(err){
    console.log(err);
    res.status(500);
    res.json({ error:'unable to load data from the Meetup API' });
  });
});

module.exports = groupRouter;
