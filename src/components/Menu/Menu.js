import React  from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Menu/menu.css'

export default function Menu() {
  const native = useNavigate()
  const appStore =useSelector(state=> state)
  console.log(appStore);


  return (
    <div className='menu-container bg-opacity-50 bg-dark w-75  text-light m-auto '>
    
        <h1 className='mt-5'>Information management site</h1>
      <div className='d-flex justify-content-around mt-5 flex-warp-warp pt-5 pb-5'>
      <h3  className=' d-flex justify-content-center align-items-center prodacts border border-lighit rounded-2' onClick={()=>native('/Prodacts')}>Products</h3>
      <h3 className='  d-flex justify-content-center  align-items-center prodacts border border-lighit rounded-2' onClick={()=>native('/Customers')}>Customers</h3>
      <h3 className='  d-flex justify-content-center  align-items-center prodacts border border-lighit rounded-2' onClick={()=>native('/Purchases')}>Purchases</h3>
      </div>
    </div>
  )
}
