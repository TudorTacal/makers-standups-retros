import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './ItemList'
import './index.css';

let items = [{text: "I am the first item"}, {text: "I am the second item"}];

ReactDOM.render(
  <ItemList data={items} />,
  document.getElementById('root')
);
