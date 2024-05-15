import "../globals.css";
import Logins from "./@logins/page";
export default function RootLayout({
    children,
    users,
    notification,
    logins
  }: {
    children: React.ReactNode,
    users:React.ReactNode,
    notification:React.ReactNode,
    logins:React.ReactNode,
  }) {

    const IsLogin = true;
   
    return (
        <>

        {IsLogin ? 
        <div className="md:container md:mx-auto">
            <div>{children}</div>
            <div style={{display:"flex"}}>
              <div style={{display:"flex",flexDirection:"column"}}>
                  <div>{users}</div>
                  <div>{users}</div>    
              </div>

              <div style={{display:"flex"}}>
                  <div>{notification}</div>
                  <div>{logins}</div>
              </div>
              
            </div>
        </div>
        :
        <div className="md:container md:mx-auto">
            {children}
            {logins}
        </div>
        }
        </>  
    )
    // :
    // (
    //     <>
    //     <div className="md:container md:mx-auto">
    //     {login}

    //     </div>
       
    //     </>
    // )
  }
  