"use client"
import { useRouter } from "next/navigation"

const OrderProduct = () => {
  const router = useRouter();
  const clickHandler = () => {
    console.log("Button clicked");
    router.replace("/");
  }
  return (
    <>
    <h1>Order Products</h1>
    <button onClick={clickHandler}>Place Order</button>
    </>
  )
}

export default OrderProduct