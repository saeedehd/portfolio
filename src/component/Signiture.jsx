import React from 'react'
import "../style/Signiture.css"

const Signiture = (props) => {
  return (
    <div>
      <div className="text">{props.fullname}</div>
    </div>
  )
}

export default Signiture
