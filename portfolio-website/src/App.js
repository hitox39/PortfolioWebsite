import React, { Fragment } from "react";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import { kayakBody, movieBody, portfolioBody } from "./constants";


function App() {
  return (
    <Fragment>
      
      <Navbar />

      <div class='container-fluid p-0'>
       
        < Intro />

        <hr class='m-0'></hr>

        <Skills />

        <hr class='m-0'></hr>

        <section
          class='resume-section p-3 p-lg-5 d-flex justify-content-center'
          id='projects'
        >
          <div class='w-100'>
            <h2 class='mb-5'>Projects</h2>

            
            <Project 
              title={'Kayak Meetup Service'} 
              subtitle={'Kayaker Connection Service'} 
              body={kayakBody}
              link={'https://github.com/hitox39/KayakMeetupApp'}
            />

            <Project 
              title={'Movie Reviewing Service'} 
              subtitle={'Movie Review Service'} 
              body={movieBody} 
              link={'https://github.com/hitox39/MovieReviewService'}
            />
            <Project 
              title={'Personal Website'} 
              subtitle={'React Personal Portfolio Website'} 
              body={portfolioBody}
              link={'https://github.com/hitox39/PortfolioWebsite'}
            />
          </div>
        </section>

        <hr class='m-0'></hr>

        <Education />

        <hr class='m-0'></hr>   

        <AboutMe />
        
      </div>
    </Fragment>
  );
}

export default App;

