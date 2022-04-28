import { useParams } from "react-router-dom"
import axios from "../axios";
import { useEffect, useState } from "react";

function SingleBlogpage() {
   const params = useParams()
   const [blog, setBlog] = useState({});

  useEffect(() => {
    axios
      .get(`/blogs/${params.id}`)
      .then((res) => {
        setBlog(res.data);
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  return (
   <>
   <div className="h2">{blog.title}</div>
   <p>{blog.body}</p>
   </>
  )
}

export default SingleBlogpage