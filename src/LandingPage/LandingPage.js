import React from 'react'
import {useNavigate} from 'react-router-dom'


function LandingPage() {
  const navigate=useNavigate()
  return (
    <main className='Main_container'>
      <div className='Container'>
        <div className='image_conatiner'>
          <img src="./images/len.webp" alt="lens" />
        </div>
        <div className='enter_container'>
          <p>Instaclone</p>
          <button onClick={()=>navigate('/post')} >Enter</button>
        </div>
      </div>
    </main>
  )
}

export default LandingPage