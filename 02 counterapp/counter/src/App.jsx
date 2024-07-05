import { useState } from 'react'

function App() {
  
   
  
   let [counter , setCounter ] = useState(0);

   const addValue = () =>{
    
    console.log(counter);
    setCounter(counter +1 ); 
     }

     const removeValue = () =>{
      if(counter >= 1 )
         setCounter(counter -1 );
     }
  return (
    <>
     <h1> chai aur react </h1>
     <h2>Counter value {counter}  </h2>

     <button
     onClick={addValue}
     >Add value</button>
     <br></br>
     <button
     onClick={removeValue}
     >remove value</button>

    </>
  )
}

export default App
