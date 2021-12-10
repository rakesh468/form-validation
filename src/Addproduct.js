import {  useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import * as yup from "yup";
import { useFormik } from "formik";

const   validateform= yup.object({
  name  : yup.string().required("Name required"),
  poster: yup.string().required("URL required"),
  price:  yup.string().required("price  required"),
  offered_price:yup.string().required("Offered price required"),
  emi:yup.string().required("EMI price required"),

  
});

export function Addproduct() {
  const history=useHistory();

    // validation using formik//
  const {handleChange,values,handleSubmit,touched,errors}=useFormik({
    initialValues:{name:"",
    poster:"",
    price:"",
    offered_price:"",
    emi:""},
    validationSchema:validateform,
    onSubmit:(newproduct)=>{
    console.log("onsubmit",newproduct)
    addproduct(newproduct)
    }

})
  const addproduct = (newproduct) => {
  console.log(newproduct)
    
  // updating product using POST method through fetch //
  
    fetch("https://6166c4d613aa1d00170a66f1.mockapi.io/product",{method:"POST",
    body:JSON.stringify(newproduct),
    headers:{
      "Content-Type":"application/json"
    }
  }).then(()=> history.push("/products"))
   
  };
  return (
    <form class="add-container" onSubmit={handleSubmit}>
      <TextField
        id="name"
        name="name"
        value={values.name}
       onChange={handleChange}
        label="Enter the Model"
        error={errors.name && touched.name}
        helperText={errors.name && touched.name && errors.name}
        variant="standard" />
        
      <TextField 
       id="poster"
       name="poster"
       onChange={handleChange}
       value={values.poster}
       label="Enter the URL" 
       error={errors.poster&& touched.poster}
       helperText={errors.poster && touched.poster && errors.poster}
       variant="standard"/>
       
      <TextField
      id="price"
      name="price" 
      value={values.price} 
      onChange={handleChange}
      label="Enter the price"
      error={errors.price&& touched.price}
      helperText={errors.price && touched.price && errors.price}
      variant="standard" />
      
      <TextField 
      id="offered_price"
      name="offered_price"
      value={values.offered_price}
      onChange={handleChange}
      label="Enter the Offer price"
      error={errors.offered_price && touched.offered_price}
      helperText={errors.offered_price && touched.offered_price && errors.offered_price}
      variant="standard" />
      
      <TextField 
      id="emi"
      name="emi"
      value={values.emi} 
      onChange={handleChange} 
      label="Enter the Emi Amount" 
      error={errors.emi && touched.emi}
      helperText={errors.emi && touched.emi && errors.emi}
      variant="standard"/>
      
      <Button variant="outlined" type="submit">Add Product</Button>

    </form>
  );
}
