import React from 'react'
import Bar from '../Pages/Bar'
import Event from '../Pages/Event'
import Menu from '../Pages/Menu'
import { Routes, Route, Navigate } from "react-router-dom"
import { Link } from "react-router-dom";
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'


export default function Navbar() {
    return (
        <>
            <header className=' sticky-top mainNav text-light' >
                <div className='container  '>
                    <div className='row pb-2 pt-4 '>

                        <div className='col col-lg-5  col-4 d-none d-lg-block'>
                            <ul className='list-unstyled d-flex gap-lg-5 justify-content-end  g-0'>
                                <li><Link to='/Bar-website' className='text-decoration-none text-reset ' ><h5>Home</h5></Link></li>
                                <li><Link to='/menu' className='text-decoration-none text-reset '><h5>Menu</h5></Link></li>
                                <li><Link to='/event' className='text-decoration-none text-reset '><h5>Events</h5></Link></li>
                            </ul>
                        </div>
                        <div className=' col col-sm-4  d-lg-none d-sm-block'>
                            <ul className='list-unstyled d-flex justify-content-between  g-0'>
                                <li><Link to='/' className='text-decoration-none text-reset ' ><h5>Home</h5></Link></li>
                                <li><Link to='/menu' className='text-decoration-none text-reset'><h5>Menu</h5></Link></li>
                            </ul>
                        </div>

                        <div className='col col-lg-2  col-sm-4 g-0   text-center '>
                            <Link href='#home' className='text-decoration-none text-reset '>
                                <h1 className=' fw-bold' style={{ color: ' #ce0303' }}>Taral</h1>
                            </Link>
                        </div>

                        <div className=' col col-sm-4 d-lg-none d-sm-block'>
                            <ul className='list-unstyled d-flex justify-content-between  g-0'>
                                <li><Link to='/event' className='text-decoration-none text-reset'><h5>Event</h5></Link></li>
                                <li><a href='/contact' className='text-decoration-none text-reset' ><h5>Contact</h5></a></li>
                            </ul>
                        </div>

                        <div className='col-lg-5 d-none d-lg-block  g-0'>
                            <ul className='list-unstyled d-flex gap-5 justify-content-start  '>
                                <li><Link to='/bar' className='text-decoration-none text-reset'><h5>Bar</h5></Link></li>
                                <li><a href='/about' className='text-decoration-none text-reset'><h5>About</h5></a></li>
                                <li><a href='/contact' className='text-decoration-none text-reset' ><h5>Contact</h5></a></li>
                                <li className=' '><h3><i class="bi bi-telephone ms-4 pe-4"></i><i class="bi bi-envelope"></i></h3></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </header>
            <Routes>
            <Route path='/Bar-website' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/event' element={<Event />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="*" element={<Navigate to="/contact" />} />

            </Routes>


        </>
    )
}
