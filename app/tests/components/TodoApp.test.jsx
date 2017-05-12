const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const configureStore = require('configureStore');
import TodoList from 'TodoList';
const TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should render TodoList', () => {
        const store = configureStore.configure();
        const provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <TodoApp />
            </Provider>
        );

        const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
        const todoList = TestUtils.scryRenderedComponentsWithType(provider, TodoList);

        expect(todoList.length).toEqual(1);
    });

});