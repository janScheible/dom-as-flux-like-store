import { TodoList } from './component/todo-list/todo-list';
import { reloadTodos } from './action/page-actions';
import { SelectedTodoCounter } from './component/selected-todo-counter';

export class Page {

    static readonly SELECTED_TODO_COUNTER_ID = 'selected-todo-counter';
    static readonly TODO_CONTAINER_ID = 'todo-container';
    static readonly RELOAD_BUTTON_ID = 'reload-button';

    static get selectedTodoCounterEl() {
        return document.getElementById(Page.SELECTED_TODO_COUNTER_ID) as HTMLElement;
    }

    static get todoContainerEl() {
        return document.getElementById(Page.TODO_CONTAINER_ID) as HTMLElement;
    }

    static get reloadButtonEl() {
        return document.getElementById(Page.RELOAD_BUTTON_ID) as HTMLButtonElement;
    }

    static init() {
        SelectedTodoCounter.init(Page.selectedTodoCounterEl);
        TodoList.init(Page.todoContainerEl);

        (document.getElementById(Page.RELOAD_BUTTON_ID) as HTMLElement).addEventListener('click', event => {
            document.dispatchEvent(new CustomEvent('action', { detail: reloadTodos() }))
        });
    }
}
