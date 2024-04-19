<script>
    import { page } from '$app/stores'
    console.log('$page.params', $page.params)
    const {productId, reviewId} = $page.params
</script>

<h1>Details about product: {productId} - review: {reviewId}</h1>