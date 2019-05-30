import React from 'react'
var skillsStyle = {
  width: "auto",
  height: "400px",
  position: "absolute",
  left: "10px",
};
const Myskills = (props) => {
  return (
    <div>
      <div style={skillsStyle}>{props.fullname}</div>
    </div>
  )
}

export default Myskills;
