// server load
export const load = async (serverLoadEvent) => {
    const { fetch, params } = serverLoadEvent
    const { productId } = params
    const title = "Product details"
    console.log('productId', productId)
    const response = await fetch(`http://localhost:4000/products/${productId}`)
    console.log(response)
    // const product = await response.json()
    return {
        // title, product
       "hhh": "TTT"
    }
}