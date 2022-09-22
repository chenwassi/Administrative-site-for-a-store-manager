import { v4 as uuidv4 } from "uuid";
function reducer(
  state = {
    Products: [
      { name: "TV",  ID:123, Price: 200, Quantity: 2 ,img:"https://i.pinimg.com/236x/0f/ef/8b/0fef8bab55eec1ac313981cfcbc9306f.jpg" },
      { name: "Computer", ID: 345, Price: 250, Quantity: 10,img:"https://i.pinimg.com/236x/20/4e/90/204e905bfc7f55c45f3a0eeddc2431c9.jpg" },
    ],
    Customers: [
      { FirstName: "chen", LastName: "wassi", ID: 3, City: "rehovot" },
      { FirstName: "shai", LastName: "wassi", ID: 4, City: "lod" },
    ],
    Purchases: [{ ID: uuidv4() , CustomerID: 3, ProductID:123 , Date:Date() },
    { ID: uuidv4(),CustomerID: 4, ProductID: 345, Date: Date() }
],
  },
  action
) {
  switch (action.type){
    case "UPDATE":
      let stateUpdate = {...state};
      const prodactId = action.payload.id;
      const prodactPrice = action.payload.Price;
      const prodactQuantity = action.payload.Quantity;
      console.log(prodactId);
   
        const arrProdact = stateUpdate.Products.findIndex((val) => val.ID == prodactId);
        if(arrProdact>=0){
        stateUpdate.Products[arrProdact].Price = prodactPrice;
        stateUpdate.Products[arrProdact].Quantity = prodactQuantity;
        console.log(stateUpdate);
        }
   
    return stateUpdate;
    
    case 'DELETE':
        let stateDelete = {...state}
        const idDelete = action.payload.id
        console.log(idDelete);
        const arrDelete= stateDelete.Products.findIndex(val=>val.ID == idDelete)
        console.log(arrDelete);
        if(arrDelete>=0){
        console.log(arrDelete);
        stateDelete.Products.splice(arrDelete,1)
        console.log(stateDelete);
        }
        return stateDelete

        case 'ADDCOUSTEMER':
            let stateCotomer = {...state}
            const CustomerID = action.payload.CustomerID
            const ProductID = action.payload.ProductID
            const Date = action.payload.Date
            let newCutomerid = uuidv4()
            let obj = {ID:newCutomerid,CustomerID:CustomerID,ProductID:ProductID, Date:Date}
            stateCotomer.Products.map(val=>{
              if(val.ID == ProductID){
                val.Quantity--
              }
            })
            console.log(obj);
           if(CustomerID != ''){
                stateCotomer.Purchases.push(obj)
              
           }
           console.log(stateCotomer);
           console.log(newCutomerid);
             return stateCotomer;
    default:
      return state;
  }
}
export default reducer;
