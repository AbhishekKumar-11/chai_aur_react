

//import { names } from 'blockly/core/utils/colour'
import './App.css'
import Card from './components/Card'

function App() {
 // const [count, setCount] = useState(0)
 let abhishek ={
  names : "abhishek kumar ",
  age : 21 ,
  batch : 2025,
 }
  let newArry =[1,2,3,45,6,0] ; 
  return (
    <>
    
     <Card username="chai aur code"  btnText="click me "/>
     <Card  username="hitesh"   />
   
    </>
  )
}

export default App
