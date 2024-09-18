<script>
	import yamlStatic from '/src/lib/data/example1.yaml';
	export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<h1>Static import</h1>
<p>Works correctly</p>
<pre>
{JSON.stringify(yamlStatic, null, 4)}
</pre>

<h1>Dynamic import</h1>

<h2>yamlDynamic1 - ok</h2>
<p>Works correctly</p>
{#await data.yamlDynamic1}
	<p>loading...</p>
{:then result}
	<pre>
    {JSON.stringify(result, null, 4)}
</pre>
{:catch error}
	<p class="error">{error.message}</p>
{/await}

<h2>yamlDynamic2 - error</h2>
<p>Works correctly with `npm run dev` but not with `npm run build`</p>
{#await data.yamlDynamic2}
	<p>loading...</p>
{:then result}
	<pre>
    {JSON.stringify(result, null, 4)}
</pre>
{:catch error}
	<p class="error">{error.message}</p>
{/await}

<style>
  .error{
    color: red;
  }
</style>