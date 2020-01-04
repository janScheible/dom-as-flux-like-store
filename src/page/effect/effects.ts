import { displayTodos } from '../action/page-actions';

export function loadTodosEffect() {
    setTimeout(() => {
        document.dispatchEvent(new CustomEvent('action', {
            detail: displayTodos([
                { id: 1, text: 'Todo 1', selected: true },
                { id: 2, text: 'Todo 2', selected: true },
                { id: 3, text: 'Todo 3', selected: false }
            ])
        }));
    }, 2000);
}
