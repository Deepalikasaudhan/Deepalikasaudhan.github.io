import React from 'react'
import './Projects.css';
import Image from '../assets/Image.png'
import Image1 from '../assets/Image1.png'
import Image2 from '../assets/Image2.png'

function Projects() {
  return (
    
    <div id='projects' className='project-containar-page'>
      <h1>Projects</h1>
      <div className='projectsContainar'>
        <div className='box'>
          <div className='imgBox'>
            <img style={{height:"450px", width:"850px"}} src={Image} alt="" />
          </div>
          <div className='contentBox'>
            <h1>Netflix Website</h1>
            <p>I have created Netflix home page, on this home page we have created two buttons and navbar on the right side and I have also created footer in this website</p>
            <div className='tagsBox'>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className='linkSection'>
              <a href="https://github.com/Deepalikasaudhan/My-Project/tree/main/Netflix/Website" rel='noreferrer' target='blank'>
              <button>
                <span className='icon'><ion-icon name="logo-github"></ion-icon></span>
                Github
              </button>
              </a>
              <a href="https://app.netlify.com/sites/zingy-salmiakki-1aa20f/overview" rel='noreferrer' target='blank'>
                <button>
                  <span className='icon'><ion-icon name="radio-button-on-outline"></ion-icon></span>
                  Live
                </button>
              </a>

            </div>
          </div>
        </div>
        <div className='box'>
          <div className='imgBox'>
            <img style={{height:"450px", width:"850px"}} src={Image1}alt="" />
          </div>
          <div className='contentBox'>
            <h1>Music Website</h1>
            <p>I created a music website and added a song to it that plays when played and stops when stopped.</p>
            <div className='tagsBox'>
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVA SCRIPT</span>
            </div>
            <div className='linkSection'>
              <a href="https://github.com/Deepalikasaudhan/My-Project/tree/main/Music/Website" rel='noreferrer' target='blank'>
                <button>
                <span className='icon'><ion-icon name="logo-github"></ion-icon></span>
                Github
                </button>
              </a>
              <a href="https://app.netlify.com/sites/nimble-griffin-5f5c0d/overview" rel='noreferrer' target='blank'>
                <button>
                <span className='icon'><ion-icon name="radio-button-on-outline"></ion-icon></span>
                live
                </button>
              </a>

            </div>
          </div>

        </div>
        <div className='box'>
          <div className='imgBox'>
            <img style={{height:"450px", width:"850px"}} src={Image2}alt="" />
          </div>
          <div className='contentBox'>
            <h1>Grow with Google</h1>
            <p>I created Grow with Google website in which I created a navbar  page and every page is opening and every second on clicking the image the page is opening.</p>
            <div className='tagsBox'>
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVA SCRIPT</span>
              <span>REACT</span>
            </div>
            <div className='linkSection'>
              <a href="https://github.com/Deepalikasaudhan/First_Project" rel='noreferrer' target='blank'>
                <button>
                <span className='icon'><ion-icon name="logo-github"></ion-icon></span>
                Github
                </button>
              </a>
              <a href="" rel='noreferrer' target='blank'>
                <button>
                <span className='icon'><ion-icon name="radio-button-on-outline"></ion-icon></span>
                live
                </button>
              </a>

            </div>
          </div>

        </div>
      </div>
      </div>
      
   


  )
}

export default Projects
