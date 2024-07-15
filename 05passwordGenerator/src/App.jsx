

import React, { useState ,useCallback ,useEffect , useRef} from 'react'

function App() {
   
   let [length,setlength]  = useState(8);
   let [Number, setNumber] = useState(false);
   let [char,setChar] = useState(false) ; 
   let [password,setPassword] = useState("");

   //  use ref hook 
    const passwordRef = useRef(null);


    
     const passwordGenrator = useCallback(() =>{
         let pass ="";
         let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
         if(Number) str += "0123456789";
         if(char) str += " ~!@#$%^&*()_-+={[}]|:;<,>.?/ ";

         for(let i =1 ; i<= length ;i++){
          const ran =Math.floor(Math.random()*str.length + 1 );
           pass += str.charAt(ran);
         }
         setPassword(pass);
     }
     ,
     [length,Number,char]
    )   
    
    const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select();
     // passwordRef.current?.setSelectionRange(0,3);
      window.navigator.clipboard.writeText(password);
    },[password])

  //  passwordGenrator();
  useEffect(()=>{
    passwordGenrator()
  },[length,Number,char,passwordGenrator])


  return (
   <>
      <div className='w-full  max-w-md mx-auto shadow-md rounded-lg  px-4 my-8 bg-gray-700 text-orange-400 '>

        <h1 className='text-white text-center'>password generator</h1>

        <div className='flex shadow  rounded-lg overflow-hidden mb-4 '>
         <input 
         type='text'
         value={password}
          className="outline-none w-full py-1 px-4 my-5 rounded "
          placeholder='password'
          readOnly 
          ref={passwordRef}/>
           
         

         <button
          onClick={copyPasswordToClipboard}
         className='text-white font-semibold bg-sky-400 w-fit h-full px-5 rounded-lg py-4 mt-3 shrink-0 ' 
         >Copy
         </button>
      </div>
    
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
      <input
     type='range'
     min={6}
     max={100}
     value={length}
     className='cursor-pointer'
     onChange={(e) =>{setlength(e.target.value)}}
     />
      <label>length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input
      type='checkbox'
      value={Number}
      onChange={() =>{
        setNumber((prev)=>!prev
        )}}
       >
      </input>
      <label>number</label>

      <input
      type='checkbox'
      defaultChecked={char}
      onChange={() =>{
        setChar((prev)=>!prev
        )}}
       >
      </input>
      <label>char </label>
     </div>
      </div>
     
     
      </div>

   </>
  )
}

export default App