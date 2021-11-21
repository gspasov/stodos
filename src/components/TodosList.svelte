<script lang="ts">
  import Todo from "./Todo.svelte";
  import * as types from "../types"

  export let todos:types.Todo[] = []
  export let title = "";
  export let isDone = false;
  export let onEmpty = ""

  let transitionsStarted = 0;
  let transitionsEnded = 0;
  $: shouldDisplayEmptyText = todos.length === 0 && transitionsStarted === transitionsEnded
</script>

<h1>{title}</h1>
{#if shouldDisplayEmptyText} {onEmpty} {/if}
{#each todos as {id, description} (id)}
  <Todo
    {id}
    {description}
    {isDone}
    on:transition-start={() => transitionsStarted += 1}
    on:transition-end={() => transitionsEnded += 1}/>
{/each}

<style>
  h1 {
    color: orangered;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 400;
  }
</style>