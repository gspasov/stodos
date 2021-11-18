<script lang="ts">
	let todo = "";
	let todos: Todo[] = []

	type Todo = {
		id: number,
		description: string,
		done: boolean
	}

	function Todo(id: number, description: string, done: boolean): Todo {
		return {id, description, done}
	}

	function addTodo(): void {
		todos = [...todos, Todo(todos.length + 1, todo, false)]
		todo = ""
	}

	function mark(id: number, isDone: boolean): void {
		todos[id-1] = {...todos[id-1], done: isDone}
		console.info("todos", todos)
	}

	function remove(id: number): void {
		todos = todos.filter((todo) => todo.id !== id)
	}
</script>

<main>
	<form on:submit|preventDefault={addTodo}>
		<input type="text" name="todo" placeholder="what needs to be done?" bind:value={todo}/>
	</form>
	<div class="parent">
		<div class="left">
			<h1>todo</h1>
			{#each todos.filter((t) => !t.done) as todo (todo.id)}
				<label>
					<input type="checkbox" on:change={() => mark(todo.id, true)}/>
					<span>{todo.description}</span>
					<button on:click={() => remove(todo.id)}>x</button>
				</label>
			{/each}
		</div>
		
		<div class="right">
			<h1>done</h1>
			{#each todos.filter((t) => t.done) as todo (todo.id)}
				<label class="done">
					<input type="checkbox" checked on:change={() => mark(todo.id, false)}/>
					<span>{todo.description}</span>
					<button on:click={() => remove(todo.id)}>x</button>
				</label>
			{/each}
		</div>
	</div>
</main>

<style>

	.left {
		width: 200px;
		display: inline-block;
	}
	.right {
		width: 200px;
		display: inline-block;
	}

	.parent {
		text-align: center;
		display: flex;
		justify-content: space-around;
	}

	label {
		display: flex;
		align-items: center;
    justify-content: space-between;
		border-radius: 2px;
		background-color: burlywood;
		width: 200px;
    height: 40px;
		padding: 0px 4px;
		margin-bottom: 4px;
	}

	.done>span {
		text-decoration:line-through;
	}
	.done {
		background-color: lightgreen;
	}

	input[type="text"] {
		height: 40px;
		width: 400px;
		display: block;
		margin: 0 auto;
		font-size: 20px;
		padding: 0px 8px
	}
	main {
		width: 40%;
		margin-left: auto;
  	margin-right: auto;
		margin-top: 100px;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 400;
	}
</style>