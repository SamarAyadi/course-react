import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([
        {
          id: 1,
          label: "Iphone 14",
          price: 3000,
        },
        {
          id: 2,
          label: "Samsung",
          price: 2000,
        },
        {
          id: 3,
          label: "poco",
          price: 1000,
        },
      ]);

      const deleteProduct = (id) => {
        let myList = products.filter((product) => product.id !== id)
        setProducts(myList);
       
    };
    
    const addProduct = (item) => {
        setProducts([item, ...products])
    }



  return (
    <ProductContext.Provider
      value={{
        message: "salam kamel and aziz",
              title: "Pingucoder",
              products,
              setProducts,
              deleteProduct,
              addProduct

      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
