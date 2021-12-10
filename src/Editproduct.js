import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';

export function Editproduct() {
  const { id } = useParams();
  const[list,setlist]=useState(null)

// getting product using id and getting data using GET method through fetch //
useEffect(()=>{
 fetch(`https://6166c4d613aa1d00170a66f1.mockapi.io/product/${id}`,{method:"GET"})
 .then((data)=>data.json())
 .then((pd)=>setlist(pd))
  },[id])
  console.log(list,id)

  return  list ? <Updateproduct list={list}/> : "";
}
function Updateproduct({list}){
  
  const [name, setname] = useState(list.name);
  const [poster, setposter] = useState(list.poster);
  const [price, setprice] = useState(list.price);
  const [offered_price, setoffered_price] = useState(list.offered_price);
  const [emi, setemi] = useState(list.emi);
  const history = useHistory();
  const editproduct = () => {
    const updatelist = {
      name, poster, price, offered_price, emi
    };
    console.log(updatelist);

    // edting product using PUT method //

    fetch(`https://6166c4d613aa1d00170a66f1.mockapi.io/product/${list.id}`,{
    method:"PUT",
    body:JSON.stringify(updatelist),
    headers:{
      "Content-Type": "application/json"
  },  
   
   }).then(()=>history.push("/products"))  
  };
   return(
     <div class="add-container">
       <TextField value={name} onChange={(event) => setname(event.target.value)} label="Enter the Model"variant="standard" />
      <TextField value={poster} onChange={(event) => setposter(event.target.value)} label="Enter the URL" variant="standard"/>
      <TextField value={price} onChange={(event) => setprice(event.target.value)} label="Enter the price"variant="standard" />
      <TextField value={offered_price} onChange={(event) => setoffered_price(event.target.value)} label="Enter the Offer price"variant="standard" />
      <TextField value={emi} onChange={(event) => setemi(event.target.value)} label="Enter the Emi Amount" variant="standard"/>
      <Button variant="contained" color="primary" onClick={editproduct}>Save</Button>
</div>
   )
   
  
}