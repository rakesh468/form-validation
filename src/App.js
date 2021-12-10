import './App.css';
import {useState} from 'react';
import {Switch,Route} from 'react-router-dom';
import{useHistory} from "react-router-dom";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// imported files //

import { Addproduct } from './Addproduct';
import { Productlist } from './Productlist';
import { Welcome } from './Welcome';
import { BasicRating } from './BasicRating';
import { Editproduct } from './Editproduct';

function App() {
const history=useHistory();
const [mode,setmode]=useState("light")
const theme = createTheme({
  palette: {
    mode: mode,
  },
});
  return (
    
 <ThemeProvider theme={theme}>
 <Paper elevation={4} style={{borderRadius:"0px",minHeight:"100vh"}} >              
 <div className="App">
 <AppBar position="static">
  <Toolbar variant="dense">
     <Button  variant="inherit"onClick={()=>history.push("/")}>Home</Button>
     <Button variant="inherit" onClick={()=>history.push("/products")}>Products</Button>
     <Button variant="inherit" onClick={()=>history.push("/addproducts")}>Add Products</Button>
     <Button variant="inherit" style={{marginLeft:"auto"}} onClick={()=>setmode(mode==="light"?"dark":"light")}>
      {mode==="light"?"dark":"light"}mode</Button>
    </Toolbar>
 </AppBar>
     
  <Switch>
  <Route exact path="/">
  <Welcome/>
  </Route>
  <Route path="/addproducts">
  <Addproduct  />
  </Route>
  <Route path="/products/edit/:id">
  <Editproduct />
  </Route>
  <Route path="/products">
  <Productlist />
  </Route>
  </Switch>
  </div> 
  </Paper>
  </ThemeProvider>
 )}
export function Products({name,poster,price,offered_price,emi,deletebutton,editbutton}){
  return(
    <Card className="container">
      <img src={poster} alt="fridge" className="poster"/>
      <CardContent>
      <div classname="details">
      <p className="product-name"><b>Model:</b> {name}</p>
      <p><BasicRating/></p>
      <p className="product-price"><b>Price:</b> {price} <strike>MRP: {offered_price}</strike> (Inclusive of all taxes)</p>
      <p><b>EMI:</b>From{emi}/month <u style={{color:"teal"}}>EMI option</u></p>
      {editbutton} {deletebutton}
      </div>
    </CardContent>
    </Card>
  )
}

export default App;
