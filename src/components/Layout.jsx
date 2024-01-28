
/* 
  File Name: Layout.jsx
  Student's Name: Foysal Ahamed Sifat
  Student ID: 301368430
  Date: January 28, 2024
*/
import React from "react";
import { Link } from "react-router-dom";
import logo from '/src/assets/images/Foysal_logo.png';
import profile_image from '/src/assets/images/sifat.jpg';
export default function Layout() {
    return (
      <>
        <div class="nav">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title">
      <span><img src={logo} height={33} /></span>
      Foysal Ahamed Sifat
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  <div class="nav-links">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/project">Projects</Link>
    <Link to="/service">Services</Link>
    <Link to="/contact">Contact Me</Link>
  </div>
</div>
<div class="w3-third">
        <div class="w3-white w3-text-grey w3-card-4">
          <div class="w3-display-container">
          <div class="wrapper">
            <img src={profile_image}  class="image--cover profile-img" alt="Foysal Ahamed Sifat"  />
           </div>
            {/* <img src="src/assets/images/sifat.jpg" class="profileImageWidth" height={150}  /> */}
          </div>
          <div class="w3-container">
            <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Software Engineer (Full-Stack)</p>
            <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Scarborough, ON</p>
            <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>foysalahamedsifat@gmail.com</p>
            <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+14373833348</p>
            <hr/>
  
            <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
            <p>Front-End: (AngularJS, Angular)</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal width-75"></div>
            </div>
            <p>Back-End (ASP.NET Core, Django)</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal width-90">
                <div class="w3-center w3-text-white"></div>
              </div>
            </div>
            <p>Database: (MSSQL, Oracle, MySQL)</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal width-75"></div>
            </div>
            <p>Project Manage: (Jira, GitLab, Github)</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal width-80"></div>
            </div>
            <br/>
  
            <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
            <p>C#</p>
            <div class="w3-light-grey w3-round-xlarge">
              <div class="w3-round-xlarge w3-teal width-90 height-24"></div>
            </div>
            <p>Java</p>
            <div class="w3-light-grey w3-round-xlarge">
              <div class="w3-round-xlarge w3-teal width-75 height-24"></div>
            </div>
            <p>Python</p>
            <div class="w3-light-grey w3-round-xlarge">
              <div class="w3-round-xlarge w3-teal width-60 height-24"></div>
            </div>
            <br/>
          </div>
        </div>
        <br/>
         
      </div>
      </>
    );
  }
  
  