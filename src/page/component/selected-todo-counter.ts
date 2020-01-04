export class SelectedTodoCounter {

    static init(el: HTMLElement) {
        const counterEl = el.querySelector('.counter');
        if (!counterEl) {
            el.insertAdjacentHTML('beforeend', `<span class="counter">-</span>`);
        }
    }

    static updateCounter(el: HTMLElement, count: number) {
        el.dataset.count = count.toString();
        el.querySelector('.counter')!.innerHTML = count.toString();
    }
}
