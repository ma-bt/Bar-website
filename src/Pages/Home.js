import React from 'react'
import About from './About'
import Contact from './Contact'



export default function Home() {
  return (
    <>
      <section id='home'>
        <div className="hero-image">
          <div className="hero-text">
            <h1 style={{ fontSize: 100, color:' #ce0303' }} className="fw-bold">Taral Bar</h1>
            <h3 className='fw-bolder'>Your Drinking Partner</h3>
            <p> Here you can enjoy your Favorite Drink with your friends in Ease and Comfort. </p>
            <button className=' btn btn-light p-2'><a href='#about' className='text-decoration-none text-black'>Learn more</a></button>
          </div>
        </div>


      </section>
      <About />
      <Contact />
    </>

  )
}
