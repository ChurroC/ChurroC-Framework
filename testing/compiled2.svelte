<script>
    export let itemData = {
        status: true,
        text: "sss"
    }
    export let index = 0
</script>

<input bind:checked={itemData.status} type="checkbox">
<span class:checked={itemData.status}>{itemData.text}</span>
<span on:click={() => removeFromList(index)}>❌</span>
<br/>