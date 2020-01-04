import { Todo } from '../component/todo-list/model/todo';

export type PageAction =
    | { type: ActionType.DOM_READY }
    | { type: ActionType.RELOAD_TODOS }
    | { type: ActionType.DISPLAY_TODOS; todos: Todo[] }
    | { type: ActionType.TOGGLE_TODO; id: number };

export enum ActionType {
    DOM_READY,
    RELOAD_TODOS,
    DISPLAY_TODOS,
    TOGGLE_TODO
}

export function domReady(): PageAction {
    return { type: ActionType.DOM_READY };
}

export function reloadTodos() {
    return { type: ActionType.RELOAD_TODOS };
}

export function displayTodos(todos: Todo[]): PageAction {
    return { type: ActionType.DISPLAY_TODOS, todos: todos };
}


export function toggleTodo(id: number): PageAction {
    return { type: ActionType.TOGGLE_TODO, id: id };
}
