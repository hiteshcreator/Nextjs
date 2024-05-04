'use client'
import {notFound} from "next/navigation"

const reviewId = ( {params} : { params: { reviewsId:string , productId:string } } ) => {

    const random = Math.floor(Math.random()* 2);
    
    if(random ===1){
      throw Error("Error review page")
    }
    
    if(parseInt(params?.reviewsId) > 1000){
        notFound();
    }
  return (
    <h1>review {params.reviewsId} for Product {params.productId}</h1>
  )
}

export default reviewId