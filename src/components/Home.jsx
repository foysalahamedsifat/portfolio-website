
/* 
  File Name: Home.jsx
  Student's Name: Foysal Ahamed Sifat
  Student ID: 301368430
  Date: January 28, 2024
*/
import React from "react";
import { Link } from "react-router-dom";
export default function Home() 
{
  
   return  (
      <>
      <div class="w3-light-grey w3-twothird margin-4">
      
        <div class="w3-container w3-card w3-white">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-handshake-o fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Welcome to Foysal's Digital Hub! 🌐</h2>
        <div class="w3-container">
          <p>Hello and thank you for visiting my online space! I'm Foysal Ahamed Sifat, a passionate and results-driven Full-Stack Software Engineer. Here, you'll find a curated collection of my professional journey, technical expertise, and innovative projects that showcase my dedication to creating robust and efficient software solutions.</p>
          <Link class="w3-button w3-round-xxlarge w3-small w3-teal w3-margin-right" to="/about">Know Me More</Link>
          <Link class="w3-button w3-round-xxlarge w3-small" style={{backgroundColor: '#105D8A',color:'#ffffff'}} target="_blank" to="https://www.linkedin.com/in/foysal-ahamed-sifat-498483169/"><i class="fa fa-linkedin w3-hover-opacity w3-margin-right"></i>LinkedIn</Link>

          <hr/>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Mission: Empowering Innovation, One Line of Code at a Time</b></h5>
          <p>At the heart of my professional journey as a Full-Stack Software Engineer lies a relentless commitment to empowering innovation. I am on a mission to revolutionize the digital landscape, creating impactful and user-centric solutions that redefine the way we interact with technology.</p>
          <hr/>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Vision for Impact</b></h5>
          <p>I envision a future where technology seamlessly integrates into our lives, enhancing efficiency, connectivity, and overall human experience. Through my work, I aim to contribute to this vision by crafting software solutions that transcend expectations and bring about positive change.</p><br/>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>🤝 Collaboration for Success</b></h5>
          <p>I recognize the power of collaboration and teamwork. My mission extends beyond individual achievements; it involves fostering a culture of collaboration, where diverse talents converge to create solutions that make a lasting impact.</p><br/>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>🌟 Commitment to Excellence</b></h5>
          <p>In every line of code, in every project undertaken, I am unwaveringly dedicated to excellence. My mission is not just to write software; it is to craft digital experiences that inspire, delight, and leave a lasting impression.</p><br/>
        </div>
         </div>
       </div>
       </>
    );
   
}
    