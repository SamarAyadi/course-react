import Counter from "./Counter";
import Product from "./Product";
import { v4 as uuid } from "uuid";
import { useState, useContext, useRef } from "react";

import { ProductContext } from "../Contexts/ProductContext";

function Products() {
  const title = useRef("");
  const price = useRef(0);

  const { products, addProduct } = useContext(ProductContext);

  const [message, setMessage] = useState("");

  const titleInput = (e) => {
    const inputValue = e.target.value;
    title.current = inputValue;

    if (inputValue === "") {
      setMessage("Title is Required !");
    } else if (inputValue.trim().length < 3) {
      setMessage("Please type more than 3 characters");
    } else {
      setMessage(null);
    }
  };

  const priceInput = (e) => {
    // Handle price input if needed
  };

  const submitForm = (e) => {
    e.preventDefault();

    let myProduct = {
      id: uuid(),
      label: title.current,
      price: parseFloat(price.current) || 0,
    };

    console.log(myProduct);
    addProduct(myProduct);
  };

  return (
    <>
      <h1>Product Form</h1>
      <form onSubmit={submitForm}>
        <div className="form-group my-2">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            id="title"
            ref={title}
            onChange={titleInput}
            type="text"
            className="form-control"
          />

          {message && (
            <div className="alert alert-danger">{message}</div>
          )}
        </div>

        <div className="form-group my-2">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            id="price"
            ref={price}
            onChange={priceInput}
            type="text"
            className="form-control"
          />
        </div>

        <button className="btn btn-info my-2 mb-2">Save</button>
      </form>

      {products.map((product) => (
        <div key={product.id}>
          <Product id={product.id}>
            <p>Lorem ipsum dolor sit.</p>
            <div className="card-body">
              <h4 className="card-title">{product.label}</h4>
              <p className="card-text">
                <button className="btn btn-danger">{product.price}</button>
              </p>
            </div>
          </Product>
        </div>
      ))}

      <Counter />
    </>
  );
}

export default Products;
