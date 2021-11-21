import { writable } from "svelte/store";

export const TodosStore = writable([
  { id: 1, description: "do the londering", done: true },
  { id: 2, description: "clean the dishes", done: false },
  { id: 3, description: "cook diner", done: false },
]);
