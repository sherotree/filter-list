import React, { useState } from 'react'
import './Filter.css'

export function Filter() {
  const [text, setText] = useState('')
  const list = [
    'Apples',
    'Broccoli',
    'Chicken',
    'Bacon',
    'Eggs',
    'Salmon',
    'Granola',
    'Bananas',
    'Beer',
    'Wine',
    'Yogurt',
  ]

  function handleChange(e) {
    setText(e.target.value)
  }

  return (
    <div className="wrapper">
      <input className="input" placeholder="Search" onChange={handleChange} />
      <ul className="list">
        {list.map(item => {
          return item.indexOf(text) === -1 ? null : (
            <li className="item">{item}</li>
          )
        })}
      </ul>
    </div>
  )
}
