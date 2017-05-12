const React = require('react');
const { connect } = require('react-redux');

import Todo from 'Todo';

export const TodoList = React.createClass({
    render: function() {
        const { todos } = this.props;
        const renderTodos = () => {
            if (todos.length === 0) {
                return <p className="container__message"> Nothing To Do</p>
            }
            return todos.map((todo) => {
                return (
                    
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
                );
            });
        }

        return(
            <div>
                {renderTodos()}
            </div>
        );
    }
});

export default connect(
    (state) => {
        return {
            todos: state.todos
        };
    }
)(TodoList);
