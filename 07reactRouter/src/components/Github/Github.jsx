import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data =  useLoaderData() 
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/AbhishekKumar-11')
    //     .then(response => response.json())
    //     .then( data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // } , [])
  return (
    < >
   
    <div className='flex flex-col items-center  justify-center text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.following}
    <img src={data.avatar_url}  className='bg-red-400 '/>
     </div>
     
     </>
  )
}

export default Github

export const githubInfoLoader = async () =>{
      const response = await fetch('https://api.github.com/users/AbhishekKumar-11')
       return response.json();
}