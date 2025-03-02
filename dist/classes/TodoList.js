"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
class TodoList {
    constructor() {
        this.todos = [];
        this.idIncrement = 1;
    }
    // A function to add a Todo Item
    addTodo(task) {
        const newTodo = {
            id: this.idIncrement++,
            task,
            completed: false,
            dueDate: this.formatDate(),
        };
        this.todos.push(newTodo);
        console.log(`✅ Todo Added successfully`);
    }
    // A function to mark a Todo Item as completed
    completedTodo(id) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.completed = true;
            console.log(`✅ Todo with ID: ${id} completed`);
        }
        else {
            throw new Error(`❌ Todo Item with ${id} was not found`);
        }
    }
    // A function to remove a todo Item from the list
    removeTodo(id) {
        const filteredTodos = this.todos.filter(todo => todo.id === id);
        if (filteredTodos.length > 0) {
            this.todos = this.todos.filter((todo) => todo.id !== id);
            console.log(`✅ The Todo with ID: ${id} was removed successfully`);
        }
        else {
            console.error(`❌ Todo Item with ${id} was not found`);
        }
    }
    // List all the todo items in the list
    listTodos() {
        if (this.todos.length === 0) {
            console.error(`📭 Your Todo List is empty`);
        }
        // console.log(`📃 All Todos:`)
        return this.todos;
    }
    // Filter the completed todos
    filterCompletedTodos(completed) {
        console.log(`Completed Todos are:`);
        return this.todos.filter((todo) => todo.completed === completed);
    }
    // A method to Update The Todo Task Description 
    updateTaskDescription(id, updatedTask) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.task = updatedTask;
            console.log(`✅ Task updated successfully`);
        }
        else {
            console.error(`❌ The Todo Item with ID: ${todo} was not found!!`);
        }
    }
    // Clear all completed Todos
    clearAllCompletedTodos() {
        this.todos = this.todos.filter((todo) => !todo.completed);
        console.log(`✅ Completed Todos cleared Successfully`);
    }
    formatDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
    }
}
exports.TodoList = TodoList;
