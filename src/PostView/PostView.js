import React,{useState,useEffect} from 'react'
import Header from './Header'
import Post from './Post'
import './postview.css'


function PostView() {
  const [posts,setPosts]=useState('')
  const [id,setid]=useState('')

  useEffect(()=>{
    fetch('https://instaclone-mern-10x.herokuapp.com/post',{
    method:"GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type':'application/json'
    },
  }).then(res=>res.json()).then(res=>{setPosts(res)
  })
  },[id])
  return (
    <>
    <Header/>

    <section className='post_section'>
    {
      Array.isArray(posts) && posts.map((post,i)=>{
        
      return (
        
      <div key={i}> <Post post={post} setid={setid}/></div>
      )
    })
    }

    </section>
   
    </>
  )
}

export default PostView