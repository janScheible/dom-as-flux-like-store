import { pageReducer } from './page/mutator/page-mutator';
import { domReady, ActionType } from './page/action/page-actions';

(() => {
    document.addEventListener('action', (event: Event) => {
        if (event instanceof CustomEvent) {
            const action = Object.assign({}, event.detail);
            action.type = ActionType[action.type];
            console.log(`action: ${JSON.stringify(action)}`);
            pageReducer(event.detail);
        }
    });

    document.addEventListener('DOMContentLoaded', event => {
        document.dispatchEvent(new CustomEvent('action', { detail: domReady() }));
    });
})();