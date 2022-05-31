import React from 'react'

const Card = ({userRandom, colorRandom, change}) => {


  return (
    <div className='card'>
        <i style={{color:colorRandom}} class="fa-solid fa-quote-left icons-supp"></i>
        <div className='card-text'>
            <p style={{color:colorRandom}}>{userRandom.quote} </p>
            <h3 style={{color:colorRandom}}>{userRandom.author}</h3>
            <button onClick={change}> <span className='one'> <i style={{color:colorRandom}} class="fa-solid fa-circle-chevron-right"></i></span></button>
        </div>
    </div>
  )
}

export default Card