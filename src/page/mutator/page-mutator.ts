import { PageAction, ActionType } from '../action/page-actions';
import { SelectedTodoCounter } from '../component/selected-todo-counter';
import { TodoList } from '../component/todo-list/todo-list';
import { loadTodosEffect } from '../effect/effects';
import { Page } from '../page';

export function pageReducer(action: PageAction) {
    if (action.type === ActionType.DOM_READY) {
        Page.init();
        SelectedTodoCounter.updateCounter(Page.selectedTodoCounterEl, getNumberOfSelectedTodos(Page.todoContainerEl));
    } else if(action.type === ActionType.RELOAD_TODOS) {
        TodoList.showLoadMask(Page.todoContainerEl, true);
        Page.reloadButtonEl.disabled = true;
        loadTodosEffect();
    } else if (action.type === ActionType.DISPLAY_TODOS) {
        TodoList.showLoadMask(Page.todoContainerEl, false);
        Page.reloadButtonEl.disabled = false;
        TodoList.updateTodos(Page.todoContainerEl, action.todos);
        SelectedTodoCounter.updateCounter(Page.selectedTodoCounterEl, getNumberOfSelectedTodos(Page.todoContainerEl));
    } else if (action.type === ActionType.TOGGLE_TODO) {
        TodoList.toggleTodo(Page.todoContainerEl, action.id);
        SelectedTodoCounter.updateCounter(Page.selectedTodoCounterEl, getNumberOfSelectedTodos(Page.todoContainerEl));
    }

    return action;
}

function getNumberOfSelectedTodos(el: HTMLElement) {
    return TodoList.getTodoSummary(el).filter(todo => todo.selected).length;
}