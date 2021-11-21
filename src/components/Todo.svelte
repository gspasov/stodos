<script lang="ts">
  import {createEventDispatcher} from "svelte"
  import { fly } from 'svelte/transition';
  import { TodosStore } from "../stores";
  export let id: number;
  export let description: string;
  export let isDone: boolean;
  let status = "waiting..."

  $: console.info(status)

  const dispatch = createEventDispatcher();

  function toggle(id: number): void {
    TodosStore.update((todos) => 
      todos.map((todo) => {
        if (todo.id === id) return {...todo, done: !todo.done}
        return todo;
      }))
    dispatch("transition-start")
  }

  function remove(id: number): void {
    TodosStore.update((todos) => todos.filter((todo) => todo.id !== id))
  }
</script>

<div 
  class="parent {isDone ? "done": "todo"}" 
  in:fly={{x: 100, duration: 1000}}
  out:fly={{x: 100, duration: 1000}}
  on:outroend={() => dispatch("transition-end")}
  on:click={() => toggle(id)}>
  <div>
    {#if isDone} &#10004; {/if} <!-- Adds a checkmark if Todo is 'done' -->
    <span>{description}</span>
  </div>
  {#if isDone}
    <button on:click={() => remove(id)}>&#10006;</button>
  {/if}
</div>

<style>
  .parent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 2px;
    min-height: 40px;
    padding: 0px 4px;
    margin-bottom: 4px;
    padding: 4px 16px
  }

  .todo {
    background: none;
    color:#555;
    border: 1px solid #555;
  }

  .done {
    background-color: olivedrab;
    color: antiquewhite;
  }
  .done span {
    text-decoration: line-through;
  }


  .todo:hover span {
    text-decoration: line-through;
  }

  .done:hover span {
    text-decoration: none;
  }

  span:hover {
    cursor: default;
  }

  button {
    background: none;
    border: none;
    font-size: 16px;
    color: antiquewhite;
    cursor: pointer;
  }
  
  button:hover {
    font-size: 20px;
  }

</style>