const redux = require('redux');

const {
  searchTextReducer,
  showCompletedReducer,
  todosReducer
} = require('reducers');

export const configure = () => {
  const reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
  });

  const store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
