import React from 'react'
import './Offers.css'
import exclucive_image from '../Assets/exclusive_image.png'
import Button from '../Button/Button'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="containers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <Button>Check now</Button>
            </div>
            <div className="offers-right">
                <img src={exclucive_image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Offers