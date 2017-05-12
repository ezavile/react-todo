var React = require('react');
var ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

const actions = require('actions');
const store = require('configureStore').configure();

// load app.css
require('style!css!sass!applicationStyles');

$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
