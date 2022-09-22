import React,{useState} from 'react'
import {Link } from 'react-scroll'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import AddToParchases from '../Purchases/AddToParchases'

export default function Purchases() {
    const appStore = useSelector(state =>state)
    const [coustemerData , setcoustemerData] = useState({name:'',prodact:''})

    const saveCoustemerData =(e)=>{
    setcoustemerData({...coustemerData , [e.target.name]:e.target.value})
    }
    
    const saveDataInaddComponent = ()=>{
      <AddToParchases nameOfCustemer = {coustemerData.name}prodactofcustemr={coustemerData.prodact} />
    }
    console.log(coustemerData.name);

  return (
    <>
  
      <h1 className='mt-2'>Products</h1>
    <table className="table table-bordered table-dark w-75 m-auto mt-5">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">ID</th>
      <th scope="col">PRICE</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {appStore.Products.map(prodact=>{
      return(
        < >
         <tr key={prodact.ID}>
      <th scope="row">{prodact.name}</th>
      <td>{prodact.ID}</td>
      <td>{prodact.Price}</td>
      <td><img src={prodact.img} width={'100px'}/></td>
    </tr>
        </>
      )
    })}
    </tbody>
</table>

<h1 className= ' mt-5'>Customers</h1>
<table className="table table-bordered table-dark w-75 m-auto mt-2">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">ID</th>
      <th scope="col">City</th>
    </tr>
  </thead>
  <tbody>
    {appStore.Customers.map(custemer=>{
      return(
        <>
         <tr key={custemer.ID}>
      <th scope="row">{custemer.FirstName} {custemer.LastName}</th>
      <td>{custemer.ID}</td>
      <td>{custemer.City}</td>
    </tr>
        </>
      )
    })}
    </tbody>
</table>
</>
  )
}



