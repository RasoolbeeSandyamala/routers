
import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Productspage = () => {
    const [products, setProducts] = useState([]); // State for product data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const [message, setMessage]=useState("");
    const [search,setSearch] = useState('');
    useEffect(() => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          if (Array.isArray(response.data)) {
            setProducts(response.data); // Set products to state
          } else {
            setError("Unexpected data format");
          }
        })
        .catch((error) => {
          setError("Failed to load products");
          console.error(error);
        })
        .finally(() => {
          setLoading(false); // Stop the loading spinner
        });
        const interval = setInterval(()=>{
          setMessage("New arrival! Check out our latest products")
        },10000);
        return()=>clearInterval(interval);
    }, []);
  
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }

  return (
    <div>
      <h1 style={{textAlign:"center",marginBottom:"30px",color:"blue"}}>{message}</h1>

<Form >
   <Row className="m-auto container text-center">
     <Col>
       <Form.Control
         type="text"
         placeholder="Search Here"
         className=" container border-3 w-50  m-auto mb-5  mt-2 shadow fs-5" onChange={(e)=>setSearch(e.target.value.toLowerCase())}
       />
     </Col>
     </Row>
     </Form>
   
 <div className="ms-3 me-3" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
 
 

   {products.filter((product)=>{
     return search.toString() ==='' ? product :
     product.title.toLowerCase().includes(search)}).map((product) => (
     <div
       key={product.id}
       style={{
         border: "3px solid #ddd",
         borderRadius: "8px",
         padding: "20px",
         textAlign: "center",
       }}
       
     >
       
       <img
         src={product.image}
         alt={product.title}
         style={{ width: "100px", height: "120px" }}
       />
       <p style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</p>
       <h3 style={{ fontWeight:"bold" }}><span style={{color:"orangered",marginRight:"5px"}}>$</span>{product.price}</h3>
       <p style={{margin:"20px",color:"blue", fontStyle:"oblique",fontSize:"20px"}}>{product.category}</p>
       <button id="btn1">
         Add to Cart
       </button>
     </div>
   ))}
 </div>
      
    </div>
  );
}

export default Productspage;
