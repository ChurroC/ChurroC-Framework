function setState() {
    // Already compiled to have all the statge changes in oen place
}

// We compile all the code and find where the state is used. Then we do dom manipulation to update the state

//svelt without the difffing

/*
Take this for example
<script>
	let count = 0;
	$: doubled = count * 2;

	function increment() {
		count += 1;
	}
</script>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>

We turn it into 
(() => {
    const [count, setCount] = useState(0);
    let doubled = count * 2;
    
    function increment() {
        setCount(count + 1);
    }

    setCount() {
        doubled = count * 2;
        button.onClick = increment;
        button.innerText = 'Clicked ' + count + (
        // might have to use childNoded instead of innerText
        count === 1 ? 'time' : 'times');
    }

    <button>
        Clicked {count}
        {count === 1 ? 'time' : 'times'}
    </button>
})
*/

/*
<script>
	import Nested from './Nested.svelte';
</script>

<Nested answer={42} />

and Nested being 
<script>
	export let answer;
</script>

<p>The answer is {answer}</p>




figured it out heavy on build time but fast on runtime
By traversing entire tree to find all the states used and adding to setCount functon during build time
*/

/*
<script>
	let name = 'world';
</script>

<input bind:value={name} />

<h1>Hello {name}!</h1>

// to

<script>
	const [name, setName] = useState("world");
</script>

<input bind:value={name} />

<h1>Hello {name}!</h1>

// which compiles too

let name = 'world';

setName() {
    input.value = name;
    h1.innerText = `Hello ${name}!'`;`
}
<input value="world" />

<h1>Hello world!</h1>

This means there is no need for server rendering since the inital output is already there
*/

/*
<script>
	let count = 0;
	$: doubled = count * 2;

	function increment() {
		count += 1;
	}
</script>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>

// to
<script>
	const [count, setCount] = useState(0);
	$: doubled = count * 2;

	function increment() {
		setCount(count + 1);
	}
</script>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>

// which compiles too

let count = 0;

setCount() {
    button.innnertext = `Clicked ${count} ${count === 1 ? 'time' : 'times'}`;
}

function increment() {
    setCount(count + 1);
}

<button onclick={increment}>
	Clicked 0 times
</button>

<p>0 doubled is 0</p>

This means there is no need for server rendering since the inital output is already there
*/

//Other idea is to just have everythign turn into pure htlm with web component and shadow doms
