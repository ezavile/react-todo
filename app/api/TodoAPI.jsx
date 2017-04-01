var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      throw new Error(e);
    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text ? todo.text.toLowerCase() : '';
      searchText = searchText ? searchText.toLowerCase() : '';
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // Sort todos with non-completed first
    filteredTodos = filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1; 
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
}