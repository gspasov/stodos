<script lang="ts">
  import Todo from "./Todo.svelte";
  import * as types from "../types"

  export let todos:types.Todo[] = []
  export let title = "";
  export let isDone = false;
  export let onEmpty = ""

  let transitionEnd = false;
  $: shouldDisplayEmptyText = todos.length === 0 && transitionEnd
</script>

<h1>{title}</h1>
{#if shouldDisplayEmptyText} {onEmpty} {/if}
{#each todos as todo (todo.id)}
  <Todo
    id={todo.id} 
    description={todo.description} 
    {isDone}
    on:transition-start={() => transitionEnd = false}
    on:transition-end={() => transitionEnd = true}/>
{/each}

<style>
  h1 {
    color: orangered;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 400;
  }
</style>