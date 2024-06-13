"use client"
import Link from "next/link";
import GoogleDrive from "./components/googleDrive";
const Home = () => {

  // console.log("envfile--",process.env.NEXT_PUBLIC_CLIENT_KEY)
  return (
    <>
    {/* <h1>Homes</h1> */}
    {/* <Link href="/blog">Blog </Link> 
    <Link href="/about">About </Link>  */}
    <GoogleDrive />

    <div className="mt-5">
    <Link href="/components/dataTable" className="btn btn-blue ml-2 ">Selectable DataTable</Link>
    <Link href="/dragabale/list1" className="btn btn-blue ml-2">List1</Link>
    <Link href="/dragabale/list2" className="btn btn-green ml-2">List2</Link>
    <Link href="/dragabale/list3" className="btn btn-gray ml-2">List3</Link>      
    </div>
    </>
  )
}

export default Home;
