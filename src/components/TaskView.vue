<template>
	<h1>Task List</h1>
	
	  <ul>
		  	<li>First task</li>
		  	<li>Second Task</li>
		  	<li>Third task</li>
	  </ul>
	
	 
	  

</template>

<script>
	import { ref } from 'vue';
	export default {
		name: 'App',
		setup () {
			const newTodo = ref('');
			const defaultData = [{
				done: false,
				content: 'Write a blog post'
			}]
			const todosData = JSON.parse(localStorage.getItem('todos')) || defaultData;
			const todos = ref(todosData);
			

			function doneTodo (todo) {
				todo.done = !todo.done
				saveData();
			}

			function removeTodo (index) {
				todos.value.splice(index, 1);
				saveData();
			}

			function saveData () {
				const storageData = JSON.stringify(todos.value);
				localStorage.setItem('todos', storageData);
			}

			return {
				todos,
				doneTodo,
				removeTodo,
				saveData
			}
		}
	}
</script>


