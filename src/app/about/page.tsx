"use client"
import { useRouter } from "next/navigation";

const about = () => {
  const router = useRouter();

  return (
    <>
    <h1>about Page</h1>
    
    <span onClick={()=>router.push("/")}>Home</span>
    </>
  )
}

export default about