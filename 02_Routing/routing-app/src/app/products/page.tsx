import Link from "next/link"
const ProductList = () => {
    return (
        <>
            <Link href="/">Home</Link>
            <h1>Product List</h1>
            <h1><Link href="products/1">Product 01</Link></h1>
            <h1><Link href="products/2">Product 02</Link></h1>
            <h1><Link href="products/3">Product 03</Link></h1>
        </>
    )
}

export default ProductList