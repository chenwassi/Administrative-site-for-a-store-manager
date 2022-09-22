import React, {useState } from "react";
import { useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Popup from "../Popup";

export default function PropsCoutemr({prodact}) {
  const appStore = useSelector((state) => state);
  const [model, setModel] = useState(false);
  console.log('model costemer',model);

  let filterProdacts = appStore.Purchases.filter(
    (Purchase) => Purchase.ProductID == prodact.ID
  );
  console.log(filterProdacts);

  return (
    <>
    {filterProdacts.map(val=>{
     
    })}

       {filterProdacts.map((val) => {
        {
          return appStore.Customers.map((value) => {
         
            if (value.ID == val.CustomerID) {
              return (
                <>
                  <tr
                    style={{ border: "2px solid white", fontSize: "20px" }}
                    key={val.ID}
                  >
                    <td style={{ border: "2px solid white", fontSize: "20px" }}>
                      {value.FirstName}
                    </td>
                    <td style={{ border: "2px solid white", fontSize: "20px" }}>
                      {prodact.name}
                    </td>
                    <td style={{ border: "2px solid white", fontSize: "20px" }}>
                      
                      {val.Date}
                    </td>
                    <td
                      style={{
                        border: "2px solid white",
                        fontSize: "20px",
                        width: "100px",
                      }}
                    >
                      <button
                        onClick={() => {setModel(!model);
                            }}
                        style={{background: "green", borderRadius: "5px"}}
                      >
                        buy
                      </button>
    
                    </td>
                  </tr>       
                  {console.log(value.ID)}
                <Popup fun={setModel} bool = {model} idCustemer={value.ID} />
                 </>
              );
            }
          });
        }
      })}

     
    </>
  );
}
