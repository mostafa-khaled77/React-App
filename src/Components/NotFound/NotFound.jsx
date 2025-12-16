import React, { useEffect } from 'react'

export default function NotFound() {
    useEffect(() => {
            document.body.style.backgroundColor = "#1abc9c";
            return () => {
              document.body.style.backgroundColor = "white";
            };
          }, []);

  return (
   <>
   
   <div className="p-5 mt-5">

    <h1 className='text-white rounded-3 p-3' style={{"background" :"#1a252f"}}>Page Not Found</h1>
   </div>
   
   </>
  )
}
