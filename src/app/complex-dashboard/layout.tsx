import "../globals.css";
export default function RootLayout({
    children,
    users,
    notification
  }: {
    children: React.ReactNode,
    users:React.ReactNode,
    notification:React.ReactNode
  }) {
    return (
        <>
        <div className="md:container md:mx-auto">
            <div>{children}</div>
            <div style={{display:"flex"}}>
              <div style={{display:"flex",flexDirection:"column"}}>
                  <div>{users}</div>
                  <div>{users}</div>    
              </div>

              <div style={{display:"flex"}}>
                  <div>{notification}</div>
              </div>
              
            </div>
        </div>
        </>  
    )
  }
  