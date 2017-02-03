import path from 'path';
import { Server } from 'http';
import Express from 'express'
import React from 'react';
import { renderToString } from 'react-dom/server';
import HomePage from './components/HomePage';
import RetroPage from './components/RetroPage';
import StandupPage from './components/StandupPage';
import socketIo from 'socket.io';

const app = new Express();
const server = new Server(app);
const io = socketIo(server);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log(path)

app.use(Express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  let markup = renderToString(<HomePage/>)
  res.render('template', {markup});
});

app.get('/standup', (req, res) => {
  let markup = renderToString(<StandupPage/>)
  res.render('template', {markup})
})

app.get('/retro', (req, res) => {
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
