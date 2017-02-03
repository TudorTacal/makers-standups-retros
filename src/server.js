import path from 'path';
import { Server } from 'http';
import Express from 'express'
import React from 'react';
import { renderToString } from 'react-dom/server';
import HomePage from './components/HomePage';
import RetroPage from './components/RetroPage';
import StandupPage from './components/StandupPage';
import socketIo from 'socket.io';
import generateRandomId from './helpers/randomIdAlgorithm';


const app = new Express();
const server = new Server(app);
const io = socketIo(server);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static(path.join(__dirname, 'static')));
app.use('/standups', Express.static(path.join(__dirname, 'static')));
app.use('/retros', Express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  let markup = renderToString(<HomePage/>)
  res.render('template', {markup});
});

app.post('/standups', (req, res) => {
  let randomId = generateRandomId();
  let standup = { id: randomId};
  res.json(standup);
})

app.post('/retros', (req, res) => {
  let randomId = generateRandomId();
  let retro = { id: randomId};
  res.json(retro);
})

app.get('/standups/:id', (req, res) => {
  let markup = renderToString(<StandupPage/>)
  res.render('template', {markup})
})

app.get('/retros/:id', (req,res) => {
  let markup = renderToString(<RetroPage/>)
  res.render('template', {markup})
})

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('comment event', function(data) {
    socket.broadcast.emit('update list', data);
  });
  socket.on('counter event', function(data) {
    socket.broadcast.emit('update counter', data);
  });
});

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
})

//Saving this command for later use to start the server "nodemon --exec babel-node --presets 'react,es2015' src/server.js"
