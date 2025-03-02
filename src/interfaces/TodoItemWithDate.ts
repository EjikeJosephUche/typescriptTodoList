// import the Todo Item which it's inheriting its properties
import { TodoItem } from "./TodoItem"

export interface TodoItemWithDate extends TodoItem{
    dueDate: string;
}