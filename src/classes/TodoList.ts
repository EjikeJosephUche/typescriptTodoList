import { TodoItemWithDate } from "../interfaces/TodoItemWithDate";

export class TodoList {
    private todos: TodoItemWithDate[] = [];
    private idIncrement: number = 1;

    // A function to add a Todo Item
    addTodo(task: string): void{
        const newTodo: TodoItemWithDate = {
            id: this.idIncrement++,
            task,
            completed: false,
            dueDate: this.formatDate(),
        };
        this.todos.push(newTodo);
        console.log(`✅ Todo Added successfully`)   
    }

    // A function to mark a Todo Item as completed
    completedTodo(id:number): void{
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo){
            todo.completed = true;
            console.log(`✅ Todo with ID: ${id} completed`)
        } else {
            throw new Error(`❌ Todo Item with ${id} was not found`);
        }
    }

    // A function to remove a todo Item from the list
    removeTodo(id:number): void{
        const filteredTodos = this.todos.filter(todo => todo.id === id);

        if (filteredTodos.length > 0){

            this.todos = this.todos.filter((todo) => todo.id !== id);
            console.log(`✅ The Todo with ID: ${id} was removed successfully`)
        } else {
            console.error(`❌ Todo Item with ${id} was not found`);
        }
    }

    // List all the todo items in the list
    listTodos(): TodoItemWithDate[]{
        if (this.todos.length === 0){
            console.error(`📭 Your Todo List is empty`)
        }
        // console.log(`📃 All Todos:`)
        return this.todos;
    }

    // Filter the completed todos
    filterCompletedTodos(completed: boolean): TodoItemWithDate[]{
        console.log(`Completed Todos are:`)
        return this.todos.filter((todo) => todo.completed === completed);
    }

    // A method to Update The Todo Task Description 
    updateTaskDescription(id:number, updatedTask:string): void{
        const todo = this.todos.find((todo) => todo.id === id);
        if(todo) {
            todo.task = updatedTask;
            console.log(`✅ Task updated successfully`)
        } else {
            console.error(`❌ The Todo Item with ID: ${todo} was not found!!`);
        }
    }

    // Clear all completed Todos
    clearAllCompletedTodos(): void{
        this.todos = this.todos.filter((todo) => !todo.completed);
        console.log(`✅ Completed Todos cleared Successfully`);
    }
    // Utility function to format the date object
    formatDate(): string {
        const date: Date = new Date();
        const year: number = date.getFullYear();
        const month: string = ("0" + (date.getMonth() + 1)).slice(-2);
        const day: string = ("0" + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
      }

}