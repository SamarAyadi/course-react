import PropTypes from "prop-types";


const Product = ({ children , onDeleteProduct, id}) => {
  return (
    <>
      <div className="my-4">
        <div className="card text-white bg-info mb-3">{children}</div>
        <button onClick={() => onDeleteProduct(id)} className="btn btn-light">Delete</button>
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
