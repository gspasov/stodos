<script lang="ts">
	import TodosList from "./components/TodosList.svelte";
	import TodoForm from "./components/TodoForm.svelte";
	import { TodosStore } from "./stores";

	$: todos  = $TodosStore
</script>

<main>
	<TodoForm todoId={todos.length + 1}/>
	<TodosList 
		title={"todo"}
		todos={todos.filter((t) => !t.done)}
		onEmpty={"Horray! Nothing to do!"}/>
	<div>
		<TodosList 
			title={"done"}
			isDone={true}
			todos={todos.filter((t) => t.done)}
			onEmpty={"Empty.."}/>
	</div>
</main>

<style>
	main {
		width: 30%;
		margin-left: auto;
  	margin-right: auto;
		margin-top: 100px;
	}

	div {
		padding-bottom: 20px;
	}
</style>