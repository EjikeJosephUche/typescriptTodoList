# typescriptTodoList
A command line implementation of a Todo List Using Typescript 

# Todo List Application - TypeScript

This is a simple command line Todo List application implemented using TypeScript. It allows users to:
- Add new todo items
- Mark todos as completed
- Remove todos
- List all todos
- Filter todos by their completion status
- Update the task description of a todo item
- Clear all completed todos
- Handle and format due dates for each todo item

The application uses TypeScript to ensure type safety and proper use of interfaces and classes.

## Features

- **Add a Todo Item**: Add a new todo with a description and a due date.
- **Complete a Todo Item**: Mark a todo as completed.
- **Remove a Todo Item**: Delete a specific todo item by its ID.
- **List All Todos**: List all todos with their `id`, `task`, `completed` status, and formatted `dueDate`.
- **Filter Todos by Completion Status**: Retrieve todos that are either completed or not completed.
- **Update Todo Task Description**: Modify the task description of a todo item.
- **Clear Completed Todos**: Remove all todos that are marked as completed.
- **Format Due Dates**: All todo items include a `dueDate` that is formatted to `YYYY-MM-DD` format.

## Requirements

- Node.js (version 14 or later)
- npm (version 6 or later)

## Installation

To get started with this project, follow the steps below:

### 1. Clone the repository

```
git clone https://github.com/EjikeJosephUche/typescriptTodoList.git
```

2. Install dependencies
Navigate to the project directory and install the required dependencies:

cd typscriptTodoList
```npm install```
3. Run the project
To compile and run the project:


```npm run start```
This will transpile the TypeScript code into JavaScript and execute it.



## Project Structure
The project has the following structure:

**typescriptTodoList/**: The root directory or the repository name.
**src/**: This maintains all my Typescript codes resides.
**src/classes/**: This is where all my typscript classes resides.
**src/interfaces/**: This is wher all my typescript interfaces resides.
**app.ts**: This is the start point or the main entrance of the typescript code.
**dist/**: This is the transpiled Javascript code with corresponding folders with that of the typscript above.
**package.json**: Project metadata and dependencies
**tsconfig.json**: TypeScript configuration
**README.md**: This README file



## TodoItem.ts
The TodoItem interface defines the structure for a todo item, including:

**id:** Unique identifier (number).
**task:** The task description (string).
**completed:** Whether the task is completed (boolean).
**dueDate:** The due date of the task (Date).

## TodoList.ts
The TodoList class implements the following methods to manage todo items:

- addTodo(task: string): void: Adds a new todo item.
- completeTodo(id: number): void: Marks a todo item as completed.
- removeTodo(id: number): void: Removes a todo item by ID.
- listTodos(): TodoItem[]: Lists all todos.
- filterByCompletion(completed: boolean): TodoItem[]: Filters todos by completion status.
- updateTaskDescription(id: number, newTask: string): void: Updates the task description of a todo item.
- clearCompleted(): void: Clears all completed todos.
- formatDate(date: Date): string: Formats the due date as YYYY-MM-DD using the toLocaleDateString method.

## app.ts
This is the main entry point for running the application in a development environment. It demonstrates how to use the TodoList class and interact with the todos.

## package.json
This file contains the project's dependencies, scripts, and metadata.

**Example Usage**
Below is an example of how to use the TodoList class in the application:

```
import { TodoList } from "./classes/TodoList";

// Initialize TodoList
const todoList = new TodoList();

// Add Todo items
todoList.addTodo("Repair my phone");
todoList.addTodo("Go to church");
todoList.addTodo("Complete my mentorship session");

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
```

**Expected Output:**

```
✅ Todo Added successfully
✅ Todo Added successfully
✅ Todo Added successfully
[
  {
    id: 1,
    task: 'Repair my phone',
    completed: false,
    dueDate: 2025-03-01T00:00:00.000Z
  },
  {
    id: 2,
    task: 'Go to church',
    completed: false,
    dueDate: 2025-02-28T00:00:00.000Z
  },
  {
    id: 3,
    task: 'Complete my mentorship session',
    completed: false,
    dueDate: 2025-03-05T00:00:00.000Z
  }
]
✅ Todo with ID: 1 completed
Completed Todos are:
[
  {
    id: 1,
    task: 'Repair my phone',
    completed: true,
    dueDate: 2025-03-01T00:00:00.000Z
  }
]
❌ Todo Item with 99 was not found
✅ The Todo with ID: 2 was removed successfully
Remaining Todos: [
  {
    id: 1,
    task: 'Repair my phone',
    completed: true,
    dueDate: 2025-03-01T00:00:00.000Z
  },
  {
    id: 3,
    task: 'Complete my mentorship session',
    completed: false,
    dueDate: 2025-03-05T00:00:00.000Z
  }
]
✅ Task updated successfully
Updated Todos: [
  {
    id: 1,
    task: 'Repair my phone',
    completed: true,
    dueDate: 2025-03-01T00:00:00.000Z
  },
  {
    id: 3,
    task: 'Finish reading TypeScript book',
    completed: false,
    dueDate: 2025-03-05T00:00:00.000Z
  }
]
✅ Completed Todos cleared Successfully
Todos after clearing completed: [
  {
    id: 3,
    task: 'Finish reading TypeScript book',
    completed: false,
    dueDate: 2025-03-05T00:00:00.000Z
  }
]
```

## TypeScript Configuration
The project uses TypeScript, and the configuration is stored in the tsconfig.json file. The key properties include:

**target:** Specifies the ECMAScript target version (e.g., ES2016).
**module:** Specifies the module system (e.g., CommonJS).
**strict:** Enables all strict type-checking options.
**rootDir:** Specify the root folder within your source files.
**outDir:** Specify an output folder for all emitted files.