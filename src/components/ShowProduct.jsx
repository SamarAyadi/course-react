import { useParams } from "react-router-dom"
import { ProductContext } from "../Contexts/ProductContext"


import { useContext } from "react"

const ShowProduct = () => {
    const myParams = useParams()

    const { products } = useContext(ProductContext)
    const myProduct = products.find(product => product.id === +myParams.id)
   


  
    console.log(myParams)

    return (
            <>
            <h1>{myProduct.label}</h1>
            <button className="btn btn-success">{myProduct.price}</button>
            </>
           
        )
    }

  


export default ShowProduct