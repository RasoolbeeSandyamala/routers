import React from 'react';

const Aboutpage = () => {
  return (
    <div className='text-center container'>
      <h1 style={{color:"orangered",marginBottom:"20px"}}>About Our Products</h1>
      <p>Welcome to New Products, where innovation meets quality. Our products are crafted with precision and designed to elevate your experience. Built with modern technologies, our offerings are tailored to meet the evolving needs of our customers.</p>
      <h2 style={{color:"orangered",marginBottom:"20px"}}>Why Choose Us?</h2>
      <ul style={{listStyleType:"none"}} >
        <li><strong style={{color:"blue",marginBottom:"20px",fontSize:"20px"}}>Unmatched Quality</strong> We ensure every product meets the highest standards of excellence.</li>
        <li><strong style={{color:"blue",marginBottom:"20px" ,fontSize:"20px"}}>Customer-Centric Design: </strong> Each product is developed with your needs in mind, ensuring usability, reliability, and value.</li>
        <li><strong style={{color:"blue",marginBottom:"20px" ,fontSize:"20px"}}>Sustainability:</strong>We are committed to environmentally friendly practices in both design and production.</li>
      </ul>
      <h2 style={{color:"orangered",marginBottom:"20px"}}>Our Mission</h2>
      <p>To empower our customers with products that enhance their lives, foster productivity, and inspire creativity.</p>
      <h2 style={{color:"orangered",marginBottom:"20px"}}>Technologies Behind the Magic</h2>
      <p>Our team leverages cutting-edge tools like React, ensuring dynamic and responsive interfaces. With React, we create fast, seamless, and user-friendly experiences, making your interaction with our products delightful and efficient.</p>
    </div>
  );
}

export default Aboutpage;
