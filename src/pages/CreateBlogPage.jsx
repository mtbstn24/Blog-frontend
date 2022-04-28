import { useState } from 'react'
import axios from '../axios'
import "../styles/createblogpage.css";

function CreateBlogPage() {
    const [formData, setFormData] = useState({
        title:'',
        body:'',
        
    });
    
    const { title, body } = formData

    const onChange = (e) =>{
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: [e.target.value]
        }))
    }
    const onSubmit = (e) => {
      e.preventDefault()
      
      if (!title) {
        alert("Enter a title");
      }
      axios
        .post('/blogs', {
          title: title[0],
          body:body[0],
        })
        .then(function (response) {
          console.log(response);
          
        })
        .catch(function (error) {
          console.log(error);
        })
      
    }


  return (
    <div className="container">
    <img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" 
            className="createImg" />
    <form onSubmit={onSubmit}>
      <label htmlFor="fileInput">
        <i className="createIcon fa-solid fa-plus"></i>
      </label>
      <input type="file" id="fileInput" style={{display: "none"}}/>
     <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="type the blog title" name="title" value={title} onChange={onChange}  />
     </div>
     
     <div className="mb-3">
     <textarea className="form-control" id="body" placeholder="type the decription of blog" rows="3"name="body" value={body} onChange={onChange}></textarea>
     </div>

     <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>

  )
}

export default CreateBlogPage

