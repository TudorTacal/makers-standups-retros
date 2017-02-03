import path from 'path';
import {Server} from 'http';
import Express from 'express'
import React from 'react';
import { renderToString } from 'react-dom/server';
import HomePage from './components/HomePage'
import RetroPage from './components/RetroPage'
import StandupPage from './components/StandupPage'
import generateRandomId from './helpers/randomIdAlgorithm'

import Standup from './models/standup.js'

import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost/standups');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('We\'re connected!');
});

const app = new Express();
const server = new Server(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log(path)

app.use(Express.static(path.join(__dirname, 'static')));
app.use('/standups', Express.static(path.join(__dirname, 'static')));
app.use('/retros', Express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  let markup = renderToString(<HomePage/>)
  res.render('template', {markup});
});

app.get('/standups', (req, res) => {
  let markup = renderToString(<StandupPage/>)
  res.render('template', {markup})
})

app.post('/standups', (req, res) => {
  var element;
  var mongoStandup = new Standup();
  mongoStandup.board = 'I am the board';
  mongoStandup.save(function(err) {
  if (err)
    res.send(err);
  });
  element
  console.log(mongoStandup)
  res.json(mongoStandup)
})

app.post('/retros', (req, res) => {
  let randomId = generateRandomId();
  let retro = { id: randomId};
  res.json(retro);
})

app.get('/retro', (req, res) => {
  let markup = renderToString(<RetroPage/>)
  res.render('template', {markup})
})

app.get('/standups/:id', (req, res) => {
  let markup = renderToString(<StandupPage/>)
  res.render('template', {markup})
})

app.get('/retros/:id', (req,res) => {
  let markup = renderToString(<RetroPage/>)
  res.render('template', {markup})
})

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
})

//Saving this command for later use to start the server "nodemon --exec babel-node --presets 'react,es2015' src/server.js"
