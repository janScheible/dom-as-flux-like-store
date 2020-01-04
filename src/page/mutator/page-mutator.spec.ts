import { pageReducer } from './page-mutator';
import { displayTodos } from '../action/page-actions';
import { TodoList } from '../component/todo-list/todo-list';
import { Page } from '../page';

function prepareDom() {
    document.body.innerHTML = `
      <div id="${Page.SELECTED_TODO_COUNTER_ID}"></div>
      <div id="${Page.TODO_CONTAINER_ID}"></div>
      <button id="${Page.RELOAD_BUTTON_ID}">Reload</button>`;
      
    Page.init();
}

test('displayTodos', () => {
    prepareDom();

    pageReducer(displayTodos([{ id: 42, selected: false, text: 'test todo' }]));
    const todoSummary = TodoList.getTodoSummary(document.getElementById(Page.TODO_CONTAINER_ID)!);

    expect(todoSummary.length).toBe(1);
});
