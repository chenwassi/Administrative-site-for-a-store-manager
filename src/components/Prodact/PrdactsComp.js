import React, { useState,useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { Modal,ModalHeader } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from "uuid";
import './CssComps.css'

export default function PrdactsComp () {
    const appStore = useSelector(state => state)
    const [model,setModel]= useState(false)
    const [value,setValue]= useState({value:''})
    const [customer,setCustomer]= useState({ID:'',CustomerID:'',ProductID:value.value ,Date:''})
    const [customerShow,setCustomerShow]= useState({Purchases:[],Products:[],Customers:[]})
    const navigete = useNavigate()
    const dispach =useDispatch()
        let totl = 0;  
useEffect(()=>{
setCustomerShow(appStore)
},[appStore])

console.log(customerShow);
        const getValue = (e)=>{
          setValue({value:Number(e.target.value)})
        }
        const addCousrtmer = ()=>{
          let Newid = customer.ID
          console.log(Newid);
          let newData={id:uuidv4(),CustomerID:customer.CustomerID,ProductID:value.value,Date:customer.Date}
          Newid = Newid ++;
          console.log(newData);
          const action ={type:'ADDCOUSTEMER',payload:newData}
          dispach(action)
        }
        

  return (
    <div>
    <h1 className ='display-5'>prodacts :</h1>
   <div  style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
    {customerShow.Products.map((prodact)=>{
      {totl += prodact.Quantity}
      return( 
    <div className='prodacts bg-opacity-75 w-50 h-75 border border-lighit rounded-2 mt-5' key={prodact.ID} style={{border:'2px solid black',width:'200px'}}>
    <h1 onClick={()=>{navigete(`/Prodacts/${prodact.ID}`)}}>{prodact.name}</h1>
    <p className='lead'>name: {prodact.name}</p>
    <p className='lead'>ID:{prodact.ID}</p>
    <p className='lead'>price:{prodact.Price}</p>
    <p className='lead' >Quantity:{prodact.Quantity}</p>

    {customerShow.Purchases.map(purchases=>{
      if(prodact.ID == purchases.ProductID){
        return(
          <div key={purchases.id}>
            {/*  */}
            {customerShow.Customers.map(customers=>{
              if(purchases.CustomerID == customers.ID)
             return(
              <div key={customers.id}>
             <p onClick={()=>navigete(`/EditCoustemer/${customers.FirstName}`)}>custome:{customers.FirstName}</p> 
             <p>date:{purchases.Date}</p>  
             <button className = 'btn bg-success' onClick={()=>{
                setModel(true);
                setCustomer({ID:'',CustomerID:purchases.CustomerID,ProductID:value.value,Date:purchases.Date})}}>add</button>
              </div>
              
             ) 
            })}
            <Modal
            size="lg"
            isOpen={model}
            toggle={()=>{setModel(!model);console.log(model);}}
            >
              <ModalHeader
              // x
                toggle={()=>{setModel(!model);console.log(model)}}
              >
                <select   defaultValue={'none'} onChange={getValue}>
                  <option value={'none'}></option>
                  {customerShow.Products.map(prodact=>{
                  return <option key={prodact.ID} value={prodact.ID}>{prodact.name}</option>
                  })}
                </select>
              </ModalHeader>
                <button onClick={()=>{setModel(!model);addCousrtmer()}}>save</button> 
            </Modal>   
            </div>
        )
    } 
     
    })}
    </div>
   )
    
  })}

</div>
    <h1 className='display-5 border border-light mt-5 rounded-2 ' style={{border:'2px solid black',width:'200px ',color:'greenyellow'}}>total:{totl}</h1>  

      <Button onClick={()=>navigete('/')}>back</Button>   
    
   </div>
  )
}
