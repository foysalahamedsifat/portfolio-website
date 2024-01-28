
/* 
  File Name: Service.jsx
  Student's Name: Foysal Ahamed Sifat
  Student ID: 301368430
  Date: January 28, 2024
*/
import React from "react";
import { Link } from "react-router-dom";
export default function Service() {
   return (
     <>
         <div class="w3-light-grey w3-twothird margin-4">
            <div class="w3-container w3-card w3-white">
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-gift fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Services</h2>

            <section>
 
 <div class="row">
   <div class="column">
     <div class="card">
       <div class="icon-wrapper">
         <i class="fa fa-laptop"></i>
       </div>
       <h3>Custom Software Development</h3>
       <p>
         I provide best custom web based software solution. To know more about my work, <Link to="/project">Click here</Link>
       </p>
     </div>
   </div>
   <div class="column">
     <div class="card">
       <div class="icon-wrapper">
         <i class="fa fa-desktop"></i>
       </div>
       <h3>Web App Solution</h3>
       <p>
         To get best web app solution in great price, let's have a business chat.  
       </p>
     </div>
   </div>
   <div class="column">
     <div class="card">
       <div class="icon-wrapper">
         <i class="fa fa-mobile"></i>
       </div>
       <h3>Android App Solution</h3>
       <p>
         I provide best mobile app development deal for your bussiness.
       </p>
     </div>
   </div>
   <div class="column">
     <div class="card">
       <div class="icon-wrapper">
         <i class="fa fa-file-text"></i>
       </div>
       <h3>Desktop Software</h3>
       <p>
         Want to develop best custom desktop solution for your business? <Link to="/contact">Contact Me</Link>
       </p>
     </div>
   </div>
   <div class="column">
     <div class="card">
       <div class="icon-wrapper">
         <i class="fa fa-shopping-bag"></i>
       </div>
       <h3>E-Commerce</h3>
       <p>
         Have any plan to develop e-commarce using cutting edge technology? You are on right place.
       </p>
     </div>
   </div>
   <div class="column">
     <div class="card">
       <div class="icon-wrapper">
         <i class="fa fa-file-text-o"></i>
       </div>
       <h3>Paperless Office Solution</h3>
       <p>
         Looking for the best office document processing custom software solution? Let's have a discussion!
       </p>
     </div>
   </div>
 </div>
</section>


             </div>
          </div> 
     </>
   );
 }

