const Card = ({ children }: { children: React.ReactNode} ) => {
  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
                The Coldest Sunset
            </div>
            <div className="text-gray-700 text-base">
                {children}
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Card