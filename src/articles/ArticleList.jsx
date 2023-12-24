import axios from "axios";
import Swal from 'sweetalert2'
import { useState, useEffect } from "react";

const ArticleList = () => {
  const [articles, setArticle] = useState([]);

  const getAllArticles = async () => {
    try {
      const response = await axios.get("http://localhost:3000/articles");
      setArticle(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteArticle = (id) => { 
    // if (!window.confirm("Are you sure to delete this article ?")) {
    //   return
    // }
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      try {
        if (result.isConfirmed) {
        const response = await axios.delete(`http://localhost:3000/articles/${id}`)
  
        if (response.status === 200) {
          setArticle(articles.filter(article => 
           article.id !== id
          ))
          
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          
          }
        }
  
      } catch (error) {
        console.error(error);
      }



     
    });
     
    
    
   }

  useEffect(() => {
    getAllArticles();
  }, []);

  

  return (
    <div>
      <h1>List of Article</h1>
      {/* <button onClick={getAllArticles} className="btn btn-info">Get All</button> */}
      {articles &&
        articles.map((article) => (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <button onClick={() => { deleteArticle(article.id) }} className="btn btn-danger btn-sm">Delete</button>
          </div>
        ))}
    </div>
  );
};

export default ArticleList;
