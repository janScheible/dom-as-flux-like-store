import { Todo, TodoSummary } from './model/todo';
import { toggleTodo } from '../../action/page-actions';

export class TodoList {

    static init(el: HTMLElement) {
        TodoList.registerToggleActions(el);
    }

    static updateTodos(el: HTMLElement, todos: Todo[]) {
        const todoHtmlTemplate = (id: number, text: string, selected: boolean, checked: string) => {
            return `
                <div class="todo" data-id="${id}" data-selected="${selected}">
                    <input type="checkbox" ${checked}"> ${text}
                </div>`;
        };
        let todoHtml = '';

        todos.forEach(todo => {
            todoHtml += todoHtmlTemplate(todo.id, todo.text, todo.selected, todo.selected ? 'checked="checked"' : '');
        });

        el.innerHTML = todoHtml;
        TodoList.registerToggleActions(el);
    }

    private static registerToggleActions(el: HTMLElement) {
        el.querySelectorAll('.todo').forEach(todoEl => {
            todoEl.addEventListener('click', event => {
                event.preventDefault();
                setTimeout(() => document.dispatchEvent(new CustomEvent('action',
                    { detail: toggleTodo(parseInt((todoEl as HTMLElement).dataset.id!)) })), 0);
            });
        });
    }

    static showLoadMask(el: HTMLElement, show: boolean) {
        if (show) {
            el.classList.add('masked');
        } else {
            el.classList.remove('masked');
        }
    }

    static toggleTodo(el: HTMLElement, id: number) {
        const todoInputEl = el.querySelector(`[data-id='${id}'] > input`) as HTMLInputElement;
        todoInputEl!.checked = !todoInputEl.checked;
        todoInputEl!.parentElement!.dataset.selected = todoInputEl.checked.toString();
    }

    static getTodoSummary(el: HTMLElement): TodoSummary[] {
        const todos: TodoSummary[] = [];

        Array.prototype.map.call(el.querySelectorAll('.todo'), node => {
            const todoEl = node as HTMLElement;
            todos.push({
                id: parseInt(todoEl.dataset.id!),
                selected: todoEl.dataset.selected! === 'true'
            });
        });

        return todos;
    }
}
