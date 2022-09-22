import React ,{useEffect, useState} from "react";
import { useSelector } from "react-redux";
import PropsCoutemr from "../prpos to customr/PropsCoutemr";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Customers() {
  const appStore = useSelector((state) => state);
  const [data,setData] = useState()
  
useEffect(()=>{
  setData(appStore)
},[appStore])

  return (
    <>
      <h1 className="display-6">Costemrs page</h1>
      <table className="m-auto mt-5 w-50">
        <thead>
          <tr>
            <th style={{ border: "2px solid white", fontSize: "30px" }}>
              Customer
            </th>
            <th style={{ border: "2px solid white", fontSize: "30px" }}>
              prodact
            </th>
            <th style={{ border: "2px solid white", fontSize: "30px" }}>
              Date
            </th>
            <th style={{ border: "2px solid white", fontSize: "30px" }}>buy</th>
          </tr>
        </thead>
        <tbody>
          {appStore.Products.map((prodact , i) => {
            return <PropsCoutemr key={i} prodact={prodact}></PropsCoutemr>;
          })}
        </tbody>
      </table>
    </>
  );
}
