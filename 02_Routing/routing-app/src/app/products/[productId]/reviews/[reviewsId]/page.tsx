import React from 'react'

const ReviewDetails = ({ params }: {
    params: {
        reviewsId: string,
        productId: string
    }
}) => {
    return (
        <>
            <h1>Product id : {params.productId}</h1>
            <h1>Reviews id : {params.reviewsId}</h1>
        </>
    )
}

export default ReviewDetails