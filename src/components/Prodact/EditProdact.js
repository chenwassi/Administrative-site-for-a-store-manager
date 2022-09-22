import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EditProdact() {
    const dispach =useDispatch()
    const {id} = useParams()
    const navigete = useNavigate()
const appStore = useSelector(state=>state)

    const [name,setName] = useState({Price: '', Quantity: '', id:id})
    
    let handelInput=(e)=>{
        setName({...name , [e.target.name]:Number(e.target.value)})
        console.log(name);
    }

    const update =()=>{
        const action={type:'UPDATE',payload:name}
        dispach(action)
      
    }
    
    const remove = ()=>{
        const action = {type:'DELETE',payload:name}
        dispach(action)
    }
  
  return (
    <div className='mt-5'> 
    <h1 className='mt-5 display-6'>Edit Prodact:</h1>
        <div>
        <input   className='mt-2 w-25'  type={'number'} onChange={handelInput} placeholder='Update Price' name ='Price'></input> <br/> 
        <input  className='mt-4 w-25' type={'number'} onChange={handelInput} placeholder='Update Quantity' name = 'Quantity'></input><br/> 
        <div >
        <button className=' me-5 mt-5 btn bg-light text-black' onClick={()=>{update();navigete('/Prodacts')}}>update</button>
       <button className='me-5 mt-5 btn bg-light text-black' onClick={()=>navigete('/Prodacts')}>back</button>
       <button className='mt-5 btn bg-danger text-black' onClick={()=>{remove();navigete('/Prodacts')}}>Delete</button>
       </div>
        </div>
        
<div>
        
</div>

<div></div>
    </div>
  )
}
