<script>
    // import Product from './product.svelte';
    export let data; // this data prop always returns the object that is return from the load function in +page.js
    const products = data.products;
    const Component = data.Component
    
</script>

<h1>{data.title}</h1>

{#each products as product}
    <div>
        <Component {product} />
    </div>
{/each}

