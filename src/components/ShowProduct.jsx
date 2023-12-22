import { useParams, useNavigate } from "react-router-dom"

const ShowProduct = () => {

    // const { id, slug } = useParams()
    const myParams = useParams()

    const navigate = useNavigate()
    console.log(myParams)

    
    if (+myParams.id === 404) {
        return (
            <h1>Page Not found </h1>
        )
    }

    const redirectToHome = () => {
        navigate("/")
  }
  return (
      <>
          <h1>Hello im a product</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, aut?</p>

          <button className="btn btn-danger" onClick={redirectToHome}>Redirect</button>
    </>
  )
}

export default ShowProduct