import React from 'react'
import "../style/Footer.css";
const Footer = (props) => {
  return (
    <footer>
            <div className="contactMe font14">
                <div className="icon-mail-alt font14 margin10">   {props.info.email}</div>
                <div className="icon-phone font14 margin10">    {props.info.phone}</div>
                <p id="findMe margin10">Find Me On</p>
                <div className= "floatLeft font14">
                    <a href={props.findMe.instagram} target="_blank"><div className="icon-instagram floatLeft"></div></a>
                    <a href={props.findMe.linkdin} target="_blank"><div className="icon-linkedin-squared floatLeft"></div></a>
                    <a href={props.findMe.github} target="_blank"><div className="icon-github-circled floatLeft"></div></a> 
                </div>  
      </div>
    </footer>
  )
}

export default Footer;
