
const userAPI = async() =>{
 const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
 const res =  data.json();
 return  res
}
const UserPage = async() => {

  const data = await userAPI();
    console.log("porps",data)


  return (
    <>
    <h1>Users SSR</h1>
    {[data].map((dm)=>(
        <li key={dm.userId}>{dm.title}</li>
    ))
    }
    
    </>
  )
}

export default UserPage