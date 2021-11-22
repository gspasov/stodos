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

  $: count = todos.length
</script>

<div>
  <h1>{title}</h1>
  <h2>{count}</h2>
</div>
{#if shouldDisplayEmptyText} 
  <span>{onEmpty}</span> 
{/if}
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
    display: inline-block;
    color: orangered;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 400;
    margin: 20px 0px;
    line-height: 40px;
  }
  h2 {
    float: right;
    color: #555;
    font-weight: 500;
    margin: 20px 0px;
    line-height: 40px;
  }

  span {
    color: #555;
  }
</style>