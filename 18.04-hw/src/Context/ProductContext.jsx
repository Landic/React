import React, { createContext, useContext, useState } from 'react'

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const initialProducts = [
      {
        title: "Шоколад",
        price: 40,
        id: 0,
      },
      {
        title: "Рыба",
        price: 50,
        id: 1,
      },
      {
        title: "Креветка",
        price: 100,
        id: 2,
      },
    ];
  
    const [products, setProducts] = useState(initialProducts);
  
    const addProduct = (newProduct) => {
      setProducts([...products, newProduct]);
    };
  
    return (
      <ProductContext.Provider value={{ products, addProduct }}>
        {children}
      </ProductContext.Provider>
    );
  };
  
  export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
      throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
  };