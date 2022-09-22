import React from 'react'
export default function Combobox({prodact}) {
  return (
  <div>
   <p> {[prodact].name}</p>
   <p>{[prodact].Price}</p>
   <p>{[prodact].Quantity}</p>
   <p>nn</p>
   </div>
  )
}
