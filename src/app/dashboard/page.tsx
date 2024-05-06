// "use client"

// import { useEffect } from "react";
import jwt from "jsonwebtoken"

const todoData = async() =>{

  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const res = await data.json();
    console.log(res)
    return res;

    // .then(response => response.json())
    // .then(json => console.log(json))
  } catch (error) {
    console.log("error",error)
  }
   
}

const Dashboard = async() => {

  const todo:any|[] = await todoData()
  // jwt
  // const demo = async()=>{
  //    todo = await todoData()
  //    console.log("response",todo)
  //   // return todo;
  // }
  const privateKey:any = process.env.JWT_PRIVATE_KEY
  jwt.sign({ data: todo }, privateKey,  function(err:any, token:any) {
    console.log(token,err);
  });
  console.log("jwt ",process.env.JWT_PRIVATE_KEY)

  return (
    <>
    <div className="sm:container sm:mx-auto ">

    <h1>Dashboard</h1>
    {todo !==undefined ? [todo].map((post:any,i:number)=>(     
      <>
      <ul key={i}>
      <li>{post?.title}hello</li>

      </ul>
      </>
      

    )):"dd"
    }
    </div>
    </>
  )
}

export default Dashboard