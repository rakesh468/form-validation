import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Products } from './App';
import { useHistory } from 'react-router-dom';
import { useEffect,useState } from 'react';

export function Productlist() {
  // to reterive data fromm mock api using get method//
const [list,setlist]=useState([])
const getproduct=()=>{
  fetch("https://6166c4d613aa1d00170a66f1.mockapi.io/product",{method:"GET"})
  .then((data)=>data.json())
  .then((pd)=>setlist(pd))
}
useEffect(getproduct,[])

// deteleting product using DELETE method through fetch //

const deleteproduct=(id)=>{
  fetch(`https://6166c4d613aa1d00170a66f1.mockapi.io/product/${id}`,{method:"DELETE"})
  .then(()=>deleteproduct)
}
const history=useHistory()
  return (
    <div className="main-container">
      {list.map(({name,poster,price,offered_price,emi,id}) => (
        <Products poster={poster} name={name} price={price} offered_price={offered_price}
          emi={emi} id={id} key={id}
          deletebutton={<IconButton color="error" aria-label="delete"
          onClick={()=>{deleteproduct(id)}}> 
          <DeleteIcon/> 
          </IconButton>}
          editbutton={<IconButton color="secondary"aria-label="edit" 
          onClick={()=>history.push("/products/edit/"+id)}>
          <ModeEditOutlineIcon/>
          </IconButton>} />
      ))}
    </div>
  );
}
