import React from 'react'
const Mystory = (props) => {
  return (
    <div>
      <h3>My Story</h3>
      <h6>{props.information.about}. {props.information.education} From my 7 years of experience as a IT professional, I have not only improved several soft skills such as teamwork and communication skills, but also I have both put forward and managed the idea of integrated system for centralized project management in the company base on share-point.
        Training staff has also been one of main duties in any position I have taken during these years.
      </h6>
    </div>
  )
}

export default Mystory;
