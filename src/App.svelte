<script lang="ts">
	import {Todo} from "./types"
	import TodosList from "./components/TodosList.svelte";
	import TodoForm from "./components/TodoForm.svelte";

	let todo = "";
	let todos: Todo[] = []

	function createTodo(e: CustomEvent<Todo>): void {
		const newTodo: Todo = e.detail
		todos = [...todos, newTodo]
		todo = ""
	}

	function toggleTodo(e: CustomEvent<number>): void {
		const id = e.detail
		todos[id-1] = {...todos[id-1], done: !todos[id-1].done}
	}

	function removeTodo(e: CustomEvent<number>): void {
		const id = e.detail
		todos = todos.filter((todo) => todo.id !== id)
	}
</script>

<main>
	<TodoForm 
		todoId={todos.length + 1}
		bind:todo={todo}
		on:create={createTodo}/>

	<TodosList 
		title={"todo"}
		todos={todos.filter((t) => !t.done)}
		onEmpty={"Horray! Nothing to do!"}
		on:toggle={toggleTodo}
		on:remove={removeTodo}/>

	<TodosList 
		title={"done"}
		isDone={true}
		todos={todos.filter((t) => t.done)}
		onEmpty={"Empty.."}
		on:toggle={toggleTodo}
		on:remove={removeTodo}/>
</main>

<style>
	main {
		width: 30%;
		margin-left: auto;
  	margin-right: auto;
		margin-top: 100px;
	}
</style>