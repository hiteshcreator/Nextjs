const reviewId = ( {params} : { params: { reviewsId:string , productId:string } } ) => {
  return (
    <h1>review {params.reviewsId} for Pooduct {params.productId}</h1>
  )
}

export default reviewId