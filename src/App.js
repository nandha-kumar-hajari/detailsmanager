import React,{useState} from 'react';

import InputDetails from './components/InputDetails';

import MainDetails from './components/MainDetails';
const initial_Contact_details=[
  {
    id:"e1",
    name:"naveen",
    address:"Hyderabad",
    mob:9121560406
  },
  {
    id:"e2",
    name:"ajay",
    address:"Hyderabad",
    mob:9121560409
  },
  {
    id:"e3",
    name:"akshay",
    address:"Medak",
    mob:9121560400
  },
  {
    id:"e4",
    name:"Sai",
    address:"Medak",
    mob:9121560490
  }

]

const App = (props) => {
  // const [Contact_details,set_Contact_details]=useState(initial_Contact_details)
  // const onAddContact=(detail)=>{
    // set_Contact_details(prevDetails=>{
      //return [detail,...prevDetails]
    //})


 const final_details_list=props.newTodos
 console.log(final_details_list)
  
  //console.log(final_list)
  //const final_details_list={...initial_Contact_details,...final_list}
  //console.log(final_details_list)
  
  // const Details_a= name={Contact_details[0].name},address={Contact_details[0].address}, mob={Contact_details[0].mob}
  return (
    <div>
      
      <InputDetails />
     
      <hr/>
     
      {initial_Contact_details.map((eachItem)=>(
          <MainDetails name={eachItem.name} address={eachItem.address} mob={eachItem.mob} key={eachItem.id}/>
        ))}
    </div>
  );
}

export default App;
