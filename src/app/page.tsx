import Link from "next/link";
import GoogleDrive from "./components/googleDrive";
const Home = () => {

  // console.log("envfile--",process.env.NEXT_PUBLIC_CLIENT_KEY)
  return (
    <>
    <h1>Homes</h1>
    {/* <Link href="/blog">Blog </Link> 
    <Link href="/about">About </Link>  */}
    <GoogleDrive />
    </>
  )
}

export default Home;
