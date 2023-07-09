/* eslint-disable react/no-unescaped-entities */
import { } from 'react'
import './App.css'
import img from '../src/assets/my.png'
import chefs from '../src/assets/bangali-chef.web.app_chefs.png'
import summerCamp from '../src/assets/summer-camp-97b7c.web.app_ (1).png'
import toyMarket from '../src/assets/toy-marketplace-client-ce63e.web.app_ (1).png'

import { FaHashtag, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import html from '../src/assets/html-5_3.avif'
import css from '../src/assets/css-3_5968242.png'
import react from '../src/assets/physics_1126012.png'
import javascript from '../src/assets/js_5968292.png'
import github from '../src/assets/github_2111432.png'
import animation from './Animation.json'

import Lottie from "lottie-react";
import { useTypewriter } from 'react-simple-typewriter'






function App() {

  const handleDownload = () => {
    window.open('https://drive.google.com/u/1/uc?id=1JocYn7_mc5C0Kz22YUxF35ufdBoa8mqQ&export=download')
  }

  const skills = [
    {
      id: 1,
      src: html
    },
    {
      id: 2,
      src: css
    },
    {
      id: 3,
      src: javascript
    },
    {
      id: 4,
      src: react
    },
    {
      id: 5,
      src: github
    },
    {
      id: 6,
      src: html
    },
  ]

  const [text] = useTypewriter({
    words: ['MERN -STACK DEVELOPER'],
    loop: 0
  })

  return (
    <>
      {/* Header  */}
      <header>
        <div className="navbar fixed p-5 bg-[#112e42] bg:opacity-50">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className=" btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <h3 className='text-6xl'>Mahamudhul</h3>
          </div>

          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <a className='text-3xl' href="#home">Home</a>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </header>

      {/* banner */}
      <section className="home" id="home">
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <div>
            <div className="home-content">
              <h1>Hi, I'm <span>Mahamudhul Hasan</span></h1>
              <div className="text-animate">
                <h3>{text}</h3>
              </div>
              
              <p>Innovating with MERN-stack to power the future of web development</p>

              <div className="btn-box">
                <a href="#" className="btn">Hire Me</a>
                <a href="#" className="btn">
                  <button onClick={handleDownload}>Download Resume</button>
                </a>
              </div>
            </div>
            {/* <div className="home-sci">
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
          </div> */}
          </div>
          <div>
            <Lottie animationData={animation}>
            </Lottie>
          </div>
        </div>
      </section>


      {/* about */}
      <section className="about" id="about">
        <h2 className="heading">About <span>Me</span></h2>

        <div className="about-img">
          {/* <img className="" src="image/my.png" alt=""> */}
          <img src={img} alt="" />
          <span className="circle-spin"></span>
        </div>
        <div className="about-container">
          <h3>Mern-stack Developer</h3>
          <p>Experienced BBA Finance student with a passion for Full Stack Web Development. Skilled in
            front-end and back-end technologies, proficient in creating responsive and dynamic web
            applications. A dedicated learner committed to delivering high-quality solutions while
            continuously expanding knowledge in the ever-evolving field of web development.</p>

          <div className="btn-box btn">
            <a className="btn">Read more</a>
          </div>
        </div>
      </section>


      {/* Projects */}

      <section className='project w-full text-white ' id='projects'>

        <div className='max-w-screen-lg p-4 mx-auto w-full h-full'>
          <h2 className="heading">Projects</h2>

          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 px-12 sm:p-0'>



            {/*no. 1 */}
            <div className='shadow-md shadow-gray-600 rounded-lg '>

              <div className='image-wrap'>
                <img src={chefs} alt="" className='rounded-md duration-200 ' />
                {/* hover:scale-105 */}
              </div>

              <div className='flex items-center justify-center'>
                <a href="https://bangali-chef.web.app/chefs">
                  <button className='w-1/2 text-3xl font-bold px-6 py-3 m-4 duration-200 hover:scale-105 '>Live</button>
                </a>

                <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-mahamudhul">
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-3xl font-bold'>GitHub</button>
                </a>
              </div>
            </div>


            {/*no. 2 */}
            <div className='shadow-md shadow-gray-600 rounded-lg '>

              <div className='image-wrap'>
                <img src={toyMarket} alt="" className='rounded-md duration-200 ' />
                {/* hover:scale-105 */}
              </div>

              <div className='flex items-center justify-center'>
                <a href="https://toy-marketplace-client-ce63e.web.app/">
                  <button className='w-1/2 text-3xl font-bold px-6 py-3 m-4 duration-200 hover:scale-105 '>Live</button>
                </a>

                <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-mahamudhul">
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-3xl font-bold'>GitHub</button>
                </a>

              </div>
            </div>



            {/*no. 3 */}
            <div className=' shadow-md shadow-gray-600 rounded-lg '>
              <div className='image-wrap'>
                <img src={summerCamp} alt="" className='rounded-md duration-200 ' />
                {/* hover:scale-105 */}
              </div>

              <div className='flex items-center justify-center'>
                <a href="https://summer-camp-97b7c.web.app/">
                  <button className='w-1/2 text-3xl font-bold px-6 py-3 m-4 duration-200 hover:scale-105 '>Live</button>
                </a>


                <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mahamudhul">
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-3xl font-bold'>GitHub</button>
                </a>

              </div>
            </div>

          </div>
        </div>


      </section>



      {/* skills */}
      <section id='skills'>
        <h2 className="heading">My <span>Skills</span></h2>

        <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 '>
          {/* TODO: added more skils */}
          {
            skills.map((skill) =>
              <div key={skill.id} >
                <div className='mt-5 hover:scale-105 w-3/5'>
                  <img src={skill.src} alt="" className='w-3/4' />
                  <p></p>
                </div>
              </div>
            )
          }

        </div>
      </section>



      {/* contact */}
      <section id='contact' className='w-full mb-24'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
          <h2 className="heading pb-8">Contact </h2>

          <div className='flex justify-center items-center'>
            <form action="" className='flex flex-col w-full md:w-1/2 '>

              <input type="text" name='name' placeholder='Your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-5' />

              <input type="text" name='email' placeholder='Your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-5' />

              <textarea name="massage" placeholder='Enter your massage' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-5'></textarea>

              <div className='btn-box flex items-center'>
                <button className='btn'>Let's talk</button>
              </div>
            </form>
          </div>
        </div>

      </section>


      {/* footer */}
      <footer className="footer p-10 ">
        <div>
          <FaHashtag className='text-5xl'></FaHashtag>
          <p className='text-3xl'>Mahamudhul Hasan<br />Providing reliable tech since 1992</p>
        </div>
        <div>
          <span className="footer-title text-xl">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a><FaFacebook className='text-4xl'></FaFacebook></a>
            <a><FaTwitter className='text-4xl'></FaTwitter></a>
            <a><FaYoutube className='text-4xl'></FaYoutube></a>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-10 text-3xl">
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </>
  )
}

export default App
