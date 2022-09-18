import React,{useState} from "react";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function Post({post,setid}) {
  const [toggle,setToggle]=useState(false)
  const handleToggle=()=>{
    setToggle(!toggle)
  }
  const deleteData=(event)=>{
    let id=event.target.getAttribute('id')
    fetch(`https://instaclone-mern-10x.herokuapp.com/post/delete/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      },

    }).then(res=>res.json()).then(data=>{console.log(data)
      setid(id)
      toast.success('deleted successfully')
   })
    setToggle(!toggle)
  }
  return (
    <div className="post_container" >
      <header className="post_header" >
        <div className="post_header_name">
          <p className="post_name">{post.name}</p>
          <p className="post_location">{post.location}</p>
        </div>
        <img onClick={()=>handleToggle()} src="./images/more_icon.svg" alt="more" />
       { toggle && <section className="dbox">
          <ul>
            <li id={post._id} onClick={deleteData}>Delete</li>
          </ul>
        </section>}
      </header>
      <div className="post_img_container" >
        <img
          src={post.postImage}
          alt="post"
        />
      </div>
      <footer className="post_footer" >
        <div className="post_base">
          <div className="post_icons">
            <img src="./images/heart.png" alt="heart" />
            <img src="./images/share.png" alt="share" />
          </div>
          <p>{post.date.split('T')[0]}</p>
        </div>
        <p><span>{post.likes}</span> likes</p>
        <h3>{post.description}</h3>
      </footer>
      <ToastContainer/>
    </div>
  );
}

export default Post;
