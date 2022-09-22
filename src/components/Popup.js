import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { Modal,ModalHeader } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from 'react-redux';


export default function Popup({bool, fun,idCustemer}) {
  const appStore = useSelector(state=>state)
    const [model,setModel]= useState(bool)
    const [idCustemers,setidCustemers]= useState(idCustemer)
    const [valueId,setvalueId]= useState()
    const [NewParchses,setNewParchses]= useState(appStore)
    const dispach =useDispatch()
    const test = ()=>{
      setModel(bool)
    }
    useEffect(()=>{setNewParchses(appStore)},[appStore])
    useEffect(()=>{test()},[bool])
    console.log(NewParchses);
    
    const addObg =()=>{
      // setNewParchses({ID: uuidv4() , CustomerID: idCustemer, ProductID:valueId , Date:Date()})
      let x = {ID: uuidv4() , CustomerID: idCustemers, ProductID:valueId , Date:Date()}
      const action ={type:'ADDCOUSTEMER',payload:x}
      dispach(action)
    }
    // console.log(appStore);
  return (
    <div>
           <Modal
            size="lg" 
            isOpen={model}
            toggle={()=> fun(!model)}
            >
              
              <ModalHeader
              // x
                toggle={()=>{ fun(!model)}}
              >
              </ModalHeader>
              {NewParchses.Products.map(val=>{
                  return(
                  <div>
                    <div onClick={()=>setvalueId(val.ID)} style={{color:'black' ,display:'flex',justifyContent:'space-between',alignItems:'center',borderRadius:'10px'}}>
                    <p>{val.name}</p>
                    <img src={val.img} width={"100px"} height={"100px"}/>  
                    </div>
                    <hr style={{color:'black'}}></hr>
                     
                    </div>
                    
                    )
                })}
                <button onClick={()=> {fun(!model);addObg()}}>save</button>  
                
            </Modal>   
        
    </div>
  )
}
