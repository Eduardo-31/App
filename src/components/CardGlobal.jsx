import React, { useState } from 'react'
import Card from './Card'
import users from '../json/users.json'

const arrayColors = [
  '#622202', '#56638e', '#83877b', '#898df5', '#2f1000', '#272c55', 'red', '#692240', '#546f73', '#823700', 'rgb(60, 60, 60)', 'rgb(255, 165, 0)', 'rgb(106, 90, 205)', '#306b4a', '#100d00', '#7e7772', 'rgb(149, 232, 12)', 'crimson', '#5f5ca3', '#2baac8', '#2b94c8', '#3a5903',  '#00221f', 'black', 'orange'
]  

const CardGlobal = () => {

    const createRandom = array => {
        return Math.floor(Math.random() * array.length)
    }
    
    const getElementRandom = array =>{
      const i = createRandom(array)
      return array[i]
  }

    const [userRandom, setUserRandom] = useState(getElementRandom(users))
    const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColors))
    
    const change = () =>{
      setUserRandom(getElementRandom(users))
      setColorRandom(getElementRandom(arrayColors))
    }

  return (
    <div style={{backgroundColor:colorRandom}} className='global'>
        <Card 
        userRandom={userRandom}
        colorRandom={colorRandom}
        change={change}
        />
    </div>
  )
}

export default CardGlobal