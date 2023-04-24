const express = require('express')
const path = require('path')
const { Product, User, Note } = require('../db');
const jwt = require('jsonwebtoken');

const app = express.Router();

app.get('/:token', async(req, res, next)=> {
  try{
    const user = await User.findByToken(req.params.token);
    const notes = await Note.findAll({
      where: {
        userId: user.id
      }
    });
    res.send(notes);
  }
  catch(ex){
    next(ex);
  }
});


module.exports = app;

