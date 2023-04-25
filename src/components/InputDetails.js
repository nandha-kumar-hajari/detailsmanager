import React,{useState} from 'react';
import "./InputDetails.css"
// import MainDetails from './mainDetails';
const InputDetails = () => {
    const [enteredname, setEnteredName] = useState('');
    const [enteredAddress, setEnteredAddress] = useState('');
    const [enteredmob, setEnteredmob] = useState('');
    const [todos,setTodos]=useState([])
    const nameChangeHandler=(event)=>{
        console.log(event.target.value)
        setEnteredName(event.target.value)

    }
const addressChangeHandler=(event)=>{
    console.log(event.target.value)
    setEnteredAddress(event.target.value)
   
}

const numChangeHandler=(event)=>{
    console.log(event.target.value)
    setEnteredmob(event.target.value)
   
}
    const sumitHandler=(event)=>{
        event.preventDefault();
        setEnteredName("")
        setEnteredAddress("")
        setEnteredName("")
       // const newTodos=[...todos,enteredname,enteredAddress,enteredmob]
       const newTodos={
        name:enteredname,
        address:enteredAddress,
        mob:enteredmob
       }
         // console.log(newTodos)
    }
  return (
    <div className='container'>
        <div>
            <form className='card-container' onSubmit={sumitHandler}>
            <input type='text' className='input' onChange={nameChangeHandler}/>
            <input type='text' className='input' onChange={addressChangeHandler}/> 
            <input type='number' className='input' onChange={numChangeHandler}/>
            <input type='submit' className='button-26' input/>
            </form>
        </div>
    
    </div>
  );
}

export default InputDetails;
