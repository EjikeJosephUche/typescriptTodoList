"use strict";
/**
 * Feature: A todo list using Typescript and nodejs which can:
 * - add a todo
 * - remove a todo
 * - update a todo's description
 * - show completed todos etc
 * Author: Joseph Uche
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TodoList_1 = require("./classes/TodoList");
const todoList = new TodoList_1.TodoList();
// Add Todo items
todoList.addTodo("Repair my phone");
todoList.addTodo("Go to church");
todoList.addTodo("Complete my mentorship session");
// const formattedDate = todoList.dueDate.toLocaleDateString('en-CA'); // 'en-CA' uses the 'YYYY-MM-DD' format
// console.log(formattedDate);
// console.log(todoList.formattedTodos(todoList))
// List all Todos
console.log(todoList.listTodos());
// Complete a Todo item
todoList.completedTodo(1); // This sets the task with ID: 1 as completed
console.log(todoList.filterCompletedTodos(true));
// Remove a Todo item
todoList.removeTodo(99); // This throws error as ID of 99 was not found
todoList.removeTodo(2); // This removes the task with ID number 2
console.log("Remaining Todos:", todoList.listTodos());
// Update task description
todoList.updateTaskDescription(3, "Finish reading TypeScript book");
console.log("Updated Todos:", todoList.listTodos());
// Clear completed Todos
todoList.clearAllCompletedTodos();
console.log("Todos after clearing completed:", todoList.listTodos());
