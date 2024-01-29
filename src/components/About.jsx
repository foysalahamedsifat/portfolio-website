/* 
  File Name: About.jsx
  Student's Name: Foysal Ahamed Sifat
  Student ID: 301368430
  Date: January 28, 2024
*/
import React from "react";
import { Link } from "react-router-dom";
import cv from '/src/assets/CV/Foysal-Ahamed-Sifat-Full-Stack-ASP.NET-4.pdf';

export default function About() {
    return (
      <> 
   <div class="w3-light-grey w3-twothird margin-4">
      
      <div class="w3-container w3-card w3-white w3-margin-bottom">
      <h2 class="w3-text-grey w3-padding-16">More About -Foysal Ahamed Sifat <i class="fa fa-user fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i></h2>
        <div class="w3-container">
          
          <p>I am a Full-Stack Software Engineer (ASP.NET) having more than 4 years of work experience in Softwaer Industry and worked for some top international giant.
I love to develop Enterprice Solutions and custom software solutions. I have expertise in ASP.NET and ASP.NET Core ( For Back-End), Angular, AngularJS and Jquery (For Front-End) and MSSQL, Oracle, MySQL for Database. I love to work on research based innovetive softare ideas and make them work as per customer need. For Machine Learning and data analytical solutions I use Python. I use GitLab or JIRA to follow the Agile development (Scrum) and solution's version.</p>
          <a class="w3-button w3-round-xxlarge w3-small w3-margin-right" style={{backgroundColor:'#485299',color:'white'}} href={cv} target="_blank"><i class="fa fa-file-text-o w3-margin-right"></i>Download Resume</a>

        </div>
        <hr/>
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Experiences</h2>

        <div class="w3-container">
          <h5 class="w3-opacity"><b>Programmer | Square InformatiX Limited (Concern Of Square Group)</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>April, 2022 – August, 2023</h6>
          <p>My responsibility was to lead and develop software features according to the client’s requirements. Here I was leading a development team on an ERP project and I have designed its architecture as well as Codebase for the project. As well as I have worked on several project also. It was such an opportunity to show my expertise in such a big project and to successfully handover the software to client.</p>
          <b>Projects I have worked on:</b>
          <p><b>ERP Software for Multi-Company Management</b><span class="w3-margin-left">(Role: Full-Stack Software Engineer & Team-Lead)</span></p>
          <p>I had to start the project from scratch as a team leader. The requirement was to develop a custom ERP (Primary Sales, Secondary Sales, Inventory (Factory, Depot, Distributor), Distribution (Factory to Depot, Depot to Depot, Depot to Distributor). I had to collect the requirement, Completed the Sales, Inventory and Distribution module successfully and delivered.</p>
          <p><b>DMS (Paperless Office Management)</b><span class="w3-margin-left">(Role: Full-Stack Software Engineer)</span></p>
          <p>I had to collect requirement and specify the requirement and create the SRS for the client and lead the development team. The project was pretty challenging as there has some challenge with document management (pdf document OCR, Crop, Merge, Text add, remove, rotation), Workflow Manager, Approval System, Document Share, Destroy document, Security etc. The project is successfully running in production for a reputed Group of Company in Bangladesh</p>
          <p><b>NOC Management System</b><span class="w3-margin-left">(Role: Full-Stack Software Engineer)</span></p>
          <p>This was a Govt. project of Bangladesh. I was working in this project as a developer.</p>
          <hr/>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Software Engineer | IT Grow Division Ltd</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Sept, 2021 - April, 2022 (Full-Time) | April, 2022 - Nov, 2023 (Part-Time)</h6>
          <p>My responsibility is to develop software features according to the client’s requirements. Here I have developed a Forex Trading and Reporting Web App with our overseas team as well as I have developed multilingual versioning for the project.</p><br/>
          <b>Projects I have worked on:</b>
          <p><b>Forex Trading Software (Analyzing Currency Reporting with multilingual version support)</b><span class="w3-margin-left">(Role: Software Engineer (ASP.NET Based))</span></p>
          <p>Requirement analysis and Back End and Front End development</p>

        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Software Engineer | DI System Ltd</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>August, 2020 — August, 2021</h6>
          <p>My responsibility was to develop software features according to the requirement. After six months, I got the opportunity to participate in system specification meetings, analyze user requirements and lead the development process. I have leaded CRM Software and lots of successful feature developments like Production planning, Product tracking System, Product Repair System, Deliveryman & Fitter-man Tracking, Customer Verification System, EMI Management System, Govt. Vat Software re-modification and development etc.</p><br/>
          <b>Projects I have worked on:</b>
          <p><b>ERP Software. ( Customized ERP Software for a giant company )</b></p>
          <p>Role: Requirement Specification, Planning, Design and Development and Database management</p>
          <p><b>Govt. VAT Software (NBR approved)</b></p>
          <p>Role: Developer (Programmer and Database Management)</p>
          <p><b>CRM Software</b></p>
          <p>Role: Requirement Analysis, Planning, UML and Development</p>
          <p><b>Point of Sales Software</b></p>
          <p>Role: Programmer</p>
        </div>

        <div class="w3-container">
          <h5 class="w3-opacity"><b>Local Freelancer</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>January, 2019 — July, 2020</h6>
          <p>After completing 3 years of my university life I started working as a local freelancer and then I used to get new projects and I really enjoy completing them, because it helps me to gather more knowledge as well as the wholesome work experience and it will help me to achieve my career goal.</p><br/>
          <b>Projects I have worked on:</b>
          <p>E-Commerce Software //demo: http://biltoo.com.bd/</p>
          <p>Business Automation Software(including POS) : http://primecorporationbd.org/</p>
          <p>Customized Software solution for Just-BD and some of other companies</p>
          <p>Business Automation Software (including POS) (Customized) for Prime Corporation BD, Lotus Computer and Institute etc.</p>
          <p>And Many More Customized solution</p>
        </div>
      </div>

      <div class="w3-container w3-card">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
        <div class="w3-container">
          <h5 class="w3-opacity">Centennial College (Progress Campus - Canada)</h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Sept, 2023 - April, 2025 (Software Engineering Technology)</h6>
          <p>Here I am completing my PGD program in Software Engineering Technology. I am geeting some opportunity to go through the that I have learnt in my undergraduate period as well as learnig some new things that will surely help my professional career.</p>
          <hr/>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>American International University - Bangladesh</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Nov, 2016 - April, 2020 (BSc in Computer Science and Engineering)</h6>
          <p>CGPA: 3.75/4.00 (85% - 89.99%)</p>
          <p>Achievement: Got Academic Scholarship on my semester-based results.</p>
          <p>Extra-Curricular Activities: I was a general member of the AIUB Computer Club.</p>
          <hr/>
        </div>
      
      </div>
    </div>
  
 </>

    );
  }
  
  