import Counter from "./Counter";
import Product from "./Product";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function Products() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const [message, setMessage] = useState("");

  let showList = true;

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

  const titleInput = (e) => {
    if(e.target.value === "") {
      setMessage("Title is Required !");
    }else if(e.target.value.trim().length < 3) {
      setMessage("Please tape more than 3 caracters");
    }
    else {
      setMessage(null);
      setTitle(e.target.value);
    }
  };

  const priceInput = (e) => {
    setPrice(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    let myProduct = {
      id: uuid(),
      label: title,
      price,
    };
    setProducts([...products, myProduct]);
    setTitle("");
    setPrice(0);
  };

  const deleteProduct = (id) => {
    let myList = products.filter((product) => product.id !== id);
    setProducts((prev) => {
      console.log(prev);
      return myList;
    });
  };
  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={submitForm}>
        <div className="form-group my-2">
          <label htmlFor="" className="form-label">
            Title
          </label>
          <input
            defaultValue={title}
            onChange={titleInput}
            type="text"
            className="form-control"
          />

          {message && (
            <div className=" alert alert-danger">{message}</div>
          )}
        </div>

        <div className="form-group my-2">
          <label htmlFor="" className="form-label">
            Price
          </label>
          <input
            defaultValue={price}
            onChange={priceInput}
            type="text"
            className="form-control"
          />
        </div>

        <button className="btn btn-info my-2 mb-2">Save</button>
      </form>
      {title} --------- {price}
      <Counter />
      {showList && (
        <div>
          {products.map((product, index) => (
            <div key={index}>
              <Product id={product.id} onDeleteProduct={deleteProduct}>
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
        </div>
      )}
    </>
  );
}

export default Products;
