import React from "react";

export default function Intro(props) {
    return (
        <section
          class='resume-section p-3 p-lg-5 d-flex align-items-center'
          id='intro'
        >
          <div class='w-100'>
            <h1 class='mb-0'>
              Chandler
              <span class='text-primary'>Miklos</span>
            </h1>
            <div class='subheading mb-5'>
              Orlando, Florida 32835 · (561) 909-7562 ·
              <a href='mailto:chandlermiklos@gmail.com'>chandlermiklos@gmail.com</a>
            </div>
            <p class='lead mb-5'>
              An enthusiastic and detail-oriented Full-Stack Developer with more than 6 years of Customer Service experience and a passion for all things tech.
              A highly motivated problem solver and multitasker, with excellent teamwork and time management skills.
              I am based out of Orlando, in the beautiful state of Florida.
            </p>
            <div class='social-icons'>
              <a class='github' href='https://github.com/hitox39'>
                <i class='fab fa-github'></i>
              </a>
              <a class='linkedin' href='https://www.linkedin.com/in/chandlermiklos/'>
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </section>
    )
}