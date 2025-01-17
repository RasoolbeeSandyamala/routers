import React from 'react';

const Contactpage = () => {
  return (
    <div className=' '>
     <center>
     <h1 className='text-danger my-4 border-bottom border-3  border-dark container p-3  fw-bold'>Contact Us</h1>
      <p>
        For delivery-related queries, contact our local branches:
      </p>
     
        <p>  <strong className='text-primary p-2 '>USA:</strong> support-usa@ecommerce.com | Phone: +1 555-123-4567</p>  
        <p> <strong  className='text-primary p-2 '>Canada:</strong> support-canada@ecommerce.com | Phone: +1 555-789-1234</p>
        <p>
    Please contact us 24 hours before pickup.
</p>
          
<p>Email us at support@ecommerce.com for any location-related queries!</p>
      </center>

    </div>
  );
}

export default Contactpage;
