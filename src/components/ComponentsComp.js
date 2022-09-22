import React from 'react'
import Menu from './Menu/Menu'
import {Routes, Route } from "react-router-dom"
import PrdactsComp from './Prodact/PrdactsComp'
import  Constomers  from './Customers/Customers'
import  Purchases  from './Purchases/Purchases'
import EditProdact from './Prodact/EditProdact'
import EditCostemr from './Customers/EditCostemr'
import AddToParchases from './Purchases/AddToParchases'

export default function ComponentsComp() {
  return (
    <div>
   <Routes>
     <Route path='/' element={<Menu />}></Route>
     <Route path='/Prodacts' element={<PrdactsComp/>}></Route>
     <Route path='/Customers' element={<Constomers/>}></Route>
     <Route path='/Purchases' element={<Purchases/>}></Route>
     <Route path='/Prodacts/:id' element={<EditProdact/>}></Route>
     <Route path='/EditCoustemer/:id' element={<EditCostemr/>}></Route>
     <Route path= "/Prodactname" element={<AddToParchases/>}></Route>
     </Routes>
    </div>
  )
}
