import { Metadata } from "next"

export const metadata = {
  title:{
    absolute:'blog',
    template:"%s | Component",
  },
  description: 'Blog Page',
}

const blog = () => {

  return (
    <>
    <h1>blog Page</h1>
    
    </>
  )
}

export default blog