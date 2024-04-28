<script>
    import item from "./compiled2"
    const [newItem, setNewItem] = useState('');
    const [todoList, setTodoList] = useState([
        {text: 'Write my first post', status: true},
        {text: 'Upload the post to the blog', status: false},
        {text: 'Publish the post at Facebook', status: false}]);
	
	function addToList() {
		setTodoList([...todoList, {text: newItem, status: false}]);
		setNewItem('')
	}
	
	function removeFromList(index) {
		setTodoList(todoList.splice(index, 1))
    }
</script>

<input bind:value={newItem} type="text" placeholder="new todo item..">
<button on:click={addToList}>Add</button>

<br/>
{#each todoList as itemData, index}
<item index={index}, item={itemData}>
{/each} 


<style> 
	.checked {
        text-decoration: line-through;
    }
</style>
// reasding https://web.dev/learn/html/template