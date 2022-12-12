import React from "react"

export default function Navbar(props){

    return (
        <nav
        class='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'
        id='sideNav'
      >
        <a class='navbar-brand js-scroll-trigger' href='#page-top'>
          <span class='d-block d-lg-none'>Chandler Miklos</span>
          <span class='d-none d-lg-block'>
            <img
              class='img-fluid img-profile mx-auto mb-2'
              src='./img/PortPhoto.jfif'
              alt=''
            ></img>
          </span>
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <a class='nav-link js-scroll-trigger' href='#intro'>
                Intro
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link js-scroll-trigger' href='#skills'>
                Skills
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link js-scroll-trigger' href='#projects'>
                Projects
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link js-scroll-trigger' href='#education'>
                Education
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link js-scroll-trigger' href='#aboutme'>
                About Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}
