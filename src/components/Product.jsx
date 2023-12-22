import PropTypes from "prop-types";
import { ProductContext } from "../Contexts/ProductContext";
import { useContext } from "react";


const Product = ({ children,  id }) => {
  

  const { deleteProduct } = useContext(ProductContext)


  return (
    <>
      <div className="my-4">
        <div className="card text-white bg-info mb-3">{children}</div>
        <button onClick={() => deleteProduct(id)} className="btn btn-light">Delete</button>
      </div>
    </>
  );
};

// Validating prop types
Product.propTypes = {
  label: PropTypes.string,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  label: "My Product",
  price: 23333333,
};

export default Product;
