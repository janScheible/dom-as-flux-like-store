export interface TodoSummary {
    id: number,
    selected: boolean;
}

export interface Todo extends TodoSummary {
    text: string
}