import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../style/Myskills.css'
const Myskills = (props) => {
  return (
    <div>
      <h3>My Skills:</h3>
      <div className="mySkills" id="skill1">{props.skills.skills[0]}</div>
      <div className="mySkills" id="skill2">{props.skills.skills[1]}</div>
      <div className="mySkills" id="skill3">{props.skills.skills[2]}</div>
      <div className="mySkills" id="skill4">{props.skills.skills[3]}</div>
      <div className="mySkills" id="skill5">{props.skills.skills[4]}</div>
      <div className="mySkills" id="skill6">{props.skills.skills[5]}</div>
      <div className="mySkills" id="skill7">{props.skills.skills[6]}</div>
      <div className="mySkills" id="skill8">{props.skills.skills[7]}</div>
      <div className="mySkills" id="skill9">{props.skills.skills[8]}</div>
      <div className="mySkills" id="skill10">{props.skills.skills[9]}</div>
    </div>
  )
}

export default Myskills;
