import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params:{ 
    productId:string;
   }
}

export const generateMetadata = ({params}:Props):Metadata => {
  return {
    title: `product ${params.productId}`,
    description:"Dynamic MetaData"
  }
}

const ProductId = ({params}:Props) => {
  return (
    <h1>Details of Products {params.productId}</h1>
  )
}

export default ProductId