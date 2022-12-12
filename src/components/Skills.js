import React from "react";

export default function Skills(props) {
    return (
        <section
        class='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='skills'
      >
        <div class='w-100'>
          <h2 class='mb-5'>Skills</h2>

          <div class='subheading mb-3'>Programming Languages &amp; Tools</div>
          <ul class='list-inline dev-icons'>

            <li class='list-inline-item'>
              <i class='fab fa-html5'></i>
            </li>
            <li class='list-inline-item'>
              <i class='fab fa-css3-alt'></i>
            </li>
            <li class='list-inline-item'>
              <i class='fab fa-js-square'></i>
            </li>
            <li class='list-inline-item'>
              <i class='fab fa-react'></i>
            </li>
            <li class='list-inline-item'>
              <i class='fab fa-npm'></i>
            </li>
          </ul>

          <div class='subheading mb-3'>Workflow</div>
          <ul class='fa-ul mb-0'>
            <li>
              <i class='fa-li fa fa-check'></i>
              React, Node.js, JavaScript, TypeScript, 
            </li>
            <li>
              <i class='fa-li fa fa-check'></i>
              ASP.NET Web API, REST API, C# / .NET 6, ASP.NET Core 6
            </li>
            <li>
              <i class='fa-li fa fa-check'></i>
              Microsoft Windows, Microsoft Office (Word, PowerPoint, Excel)
            </li>
            <li>
              <i class='fa-li fa fa-check'></i>
              Customer Service, Customer Support, Customer Relations
            </li>
          </ul>
        </div>
      </section>
    )
}