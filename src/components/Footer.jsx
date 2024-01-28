
/* 
  File Name: Footer.jsx
  Student's Name: Foysal Ahamed Sifat
  Student ID: 301368430
  Date: January 28, 2024
*/
import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
      <>
          
<footer style={{color: 'Black', backgroundColor: '#ffffff'}}  class="w3-container w3-center w3-margin-top">
  <p>Find me on LinkedIn.</p>
  <Link class="w3-button w3-round-xxlarge w3-small w3-light-grey w3-margin-bottom"  target="_blank"  to="https://www.linkedin.com/in/foysal-ahamed-sifat-498483169/"><i class="fa fa-linkedin w3-hover-opacity w3-margin-right w3-teal w3-padding"></i>LinkedIn</Link>
 </footer>
      </>
    )};