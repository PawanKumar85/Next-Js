
import Link from "next/link"

const Home = () => {
    return (
        <div>
            <h1>Welcome home!!</h1>
            <Link href="/blog">Blog</Link>
            <br />
            <Link href="/products">Products</Link>
            <br />
            <Link href="/login">Login</Link>
            {" "}
            <Link href="/register">Sign Up</Link>

        </div>
    )
}

export default Home