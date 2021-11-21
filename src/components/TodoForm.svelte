<script lang="ts">
  import { TodosStore } from "../stores";
  import { Todo } from "../types";

  export let todo = ""
  export let todoId = 0;

  $: isDisabled = trimmedTodo.length > 50;
  $: trimmedTodo = todo.replace(/ +/g, " ").trim();

  function createTodo(): void {
    TodosStore.update((todos) => [...todos, Todo(todoId, trimmedTodo, false)])
		todo = ""
	}
</script>

<form on:submit|preventDefault={createTodo}>
  <div class="input-group">
    <input type="text" name="todo" placeholder="what needs to be done?" bind:value={todo}/>
    <button type="submit" disabled={isDisabled}>Add</button>
  </div>
  {#if isDisabled}
    <span class="warning">Todo is too long!</span>
  {/if}
</form>

<style>  
  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 4px;
    margin-top: 15px;
  }
  
  .warning {
    font-weight: 500;
    color: crimson
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
    color: #444;
    background-color: antiquewhite;
  }

  input:focus {
    outline: none;
  }

  button {
    border: 0;
    border-radius: 4px;
    color: antiquewhite;
    width: 100px;
    height: 40px;
    cursor: pointer;
    background-color: orangered;
    font-weight: 500;
  }
  button:hover {
    transform: scale(0.98);
  }
  button:disabled{
    background-color: #cccccc;
    color: #333;
    cursor:auto;
  }
  button:disabled:hover{
    transform:scale(1);
    opacity: 1;
  }
</style>