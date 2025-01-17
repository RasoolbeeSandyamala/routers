// MenuPage.jsx
import React from "react";
import "./MenuPage.css";

const MenuPage = () => {
  // Sample product data
  const menuData = [
    {
      category: "Electronics",
      items: [
        {
          name: "Smartphone",
          description: "Latest smartphone with cutting-edge technology.",
          price: "$799",
          image:"https://tse1.mm.bing.net/th?id=OIP.HV3rh7xxqLcOSL-yGi7JVAHaHi&pid=Api&P=0&h=180",
        },
        {
          name: "Laptop",
          description: "High-performance laptop for work and gaming.",
          price: "$1199",
          image: "https://tse1.mm.bing.net/th?id=OIP.8dKTHv2rUvUFDELQaUMjbQHaFp&pid=Api&P=0&h=180",
        },
      ],
    },
    {
      category: "Home Appliances",
      items: [
        {
          name: "Vacuum Cleaner",
          description: "Powerful and compact vacuum cleaner for your home.",
          price: "$199",
          image: "https://tse1.mm.bing.net/th?id=OIP.ywt-CzKkOSxozRGjFrMfTwHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Air Conditioner",
          description: "Energy-efficient air conditioner with fast cooling.",
          price: "$499",
          image: "https://tse2.mm.bing.net/th?id=OIP.yqLk6qh4meh26Q6rGJtLTwHaHa&pid=Api&P=0&h=180",
        },
      ],
    },
    {
      category: "Fashion",
      items: [
        {
          name: "Men's Jacket",
          description: "Stylish and warm jacket for all seasons.",
          price: "$89",
          image: "https://tse3.mm.bing.net/th?id=OIP.lMijwqdj72YArf-pIiPGlgHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Women's Handbag",
          description: "Elegant handbag with premium design.",
          price: "$129",
          image: "https://tse4.mm.bing.net/th?id=OIP.Asc7o7hxsUV3HTGycS1pxQHaHa&pid=Api&P=0&h=180",
        },
      ],
    },
  ];

  return (
    <div className="menu-page">
      <h1 style={{color:"orangered",fontWeight:"bold"}}>Our Products</h1>
      {menuData.map((category) => (
        <div key={category.category} className="menu-category">
          <h2 className="my-4 text-dark fw-bold">{category.category}</h2>
          <div className="menu-items">
            {category.items.map((item) => (
              <div key={item.name} className="menu-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">{item.price}</p>
                <button>Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
