<script>
    import { goto, beforeNavigate, afterNavigate } from '$app/navigation'

    const handleClick = () => {
        console.log('Placing your order')
        goto('/products', { replaceState: false })
    }

    beforeNavigate(() => {
        console.log('before:', { before: navigation })    
    })

    afterNavigate(() => {
        console.log('after:', { after: navigation })    
    })

</script>

<h1>Home Page!</h1>

<a href="/blog">Blog</a>
<a href="/products">Products</a>

<button on:click={handleClick}>Place order</button>

