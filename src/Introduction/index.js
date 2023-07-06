import React from "react";
import './style.css'
import Component1 from "../Component1";




const clickMe = ()=>{
    alert ('Hello Nakachwa')
}


const Introduction = () =>{
    return (
        <div>
            <h1 className="heading">What I have learnt about ReactJS</h1>
            <p className="paragraph">It has resuable component</p>
            <p className="paragraph">The writing format is JSX</p>
            <p className="paragraph">It is fast</p>
            <p className="paragraph">I want to keep learning</p>
          {/* <img src={process.env.PUBLIC_URL + 'images/1641070899151.jpg'} className="images"/> */}
          <img src='/images/1641070899151.jpg' id="me" alt="pictureme"/>
          <img src='/images/1641070906589_1.jpg' id="me2" alt="picturemwa"/>
          <img src='/images/1641071146821.jpg' id="me3" alt="picturemwa"/>

          {/* <img src={process.env.PUBLIC_URL + 'images/1641070906589_1.jpg'} className="images1"/> */}
          <br></br>
          <button onClick={clickMe}>Click Here</button>
          
          

        </div>
    );

};

export default Introduction;
