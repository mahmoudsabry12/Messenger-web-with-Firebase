import React from 'react'
import '../style.css'
import Img from '../img/img.png'
import Attach from '../img/attach.png';

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Enter message... ' />
      <div className="send">
        <img src={Img} alt="" className='ss'/>
        <input type="file"  style={{display:"none"}} id="file"/>
        <label htmlFor="file">
          <img src= {Attach} alt="" className='attach'/>
        </label>
        <button className='btn'>send</button>
      </div>
    </div>
  )
}

export default Input