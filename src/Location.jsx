import React from 'react';

const LocationPage = () => {
  return (
    <div style={{textAlign:"center"}}>
     <h2 className='text-danger my-4 fw-bold'>Where We Deliver</h2>
<p>
    We currently deliver to the following locations:
</p>
<ul style={{listStyleType:"none"}} >
    <li >United States (All States)</li>
    <li>Canada</li>
    <li>United Kingdom</li>
    <li>Australia</li>
</ul>
<p>
    Coming Soon: Europe, Asia, and more!
</p>
<div>
    <h1  className='text-danger my-4 fw-bold'>Our Locations</h1>
    <h2  className='text-primary my-4 fw-bold'>Store Locations</h2>
    <ul style={{listStyleType:"none"}}>
        <li>
            <strong>New York City Store:</strong> 123 Main Street, New York, NY 10001
        </li>
        <li>
            <strong>Los Angeles Store:</strong> 456 Sunset Boulevard, Los Angeles, CA 90028
        </li>
    </ul>

    <h2  className='text-primary my-4 fw-bold'>Delivery Areas</h2>
    <p>We deliver across the United States, Canada, and the United Kingdom.</p>

    </div>

     </div>
  );
}

export default LocationPage;
