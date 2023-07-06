import React from "react";


const clickMe = ()=>{
    alert ('Bridget it has worked')
}
const Component1 = () =>{
    return (
        <div>
            <h1 className="heading">Javascript is good for your future</h1>
            <p className="paragraph">You either learn or learn</p>
            <p className="paragraph">Just Keep pushing</p>
            <p className="paragraph">Because React is fun</p>
            <p className="paragraph">Keep learning it</p>
            <p className="paragraph">Be the best version of yourself
            </p>
            <img src='/images/1637636888537.jpg' id="me4" alt="picturemwa"/>
            <img src='/images/1641071196574.jpg' id="me5" alt="picturemwa"/>

          {/* <img src={process.env.PUBLIC_URL + 'images/1637636888537.jpg'} className="me4"/><br></br> */}
          <button onClick={clickMe}>Click Here</button>
          <div id="advice">
            <p id="today">Today is an interesting day to learn Javascript. I want to learn it so that I can get a job
                it is challenging but I have to adjust and I learn by force. this.javascript = Money.  I mean more and more money
            </p>
            <p id="today1">
                Join a team of people eager to learn so that you continue learning . I want you to own your own destiny. By investing your energy in things that will benefit you
            </p>
            <p id="today2">
          Hello Javascript please be nice, it gets more interesting if i learn you. Lets be friends, friends forever. We can style and style and we achieve it.
            </p>
          </div>
          

        </div>
    );

};

export default Component1;
