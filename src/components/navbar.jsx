import React from 'react'
import logo from './LOGO.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useRef } from 'react'
export default function Navbar() {
    const refer = useRef(null)
    return (
        <div className=' sticky-top'>
            <nav class=" navbar-expand-lg navbar">
                <div class="container ">
                    <Link class="navbar-brand" onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })}} to="/">
                        <img src={logo} height={'43.5'} />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-start " tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
                            <button type="button" ref={refer} class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="mx-3 nav-item">
                                    <Link  style={{color:"#ffd054",fontWeight:"bold"}} onClick={() => {window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });refer.current.click()}} class="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li class="mx-3 nav-item">
                                    <Link  style={{color:"#ffd054",fontWeight:"bold"}} onClick={() => {window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });refer.current.click()}} class="nav-link active" aria-current="page" to="/">Rooms</Link>
                                </li>
                                <li class="mx-3 nav-item">
                                    <Link  style={{color:"#ffd054",fontWeight:"bold"}} onClick={() => {window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });refer.current.click()}} class="nav-link active" aria-current="page" to="/tour-guide">Tour Guide</Link>
                                </li>
                                <li class="mx-3 nav-item">
                                    <Link  style={{color:"#ffd054",fontWeight:"bold"}} onClick={() => {window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });refer.current.click()}} class="nav-link active" aria-current="page" to="/contact-us">Contact Us</Link>
                                </li>
                                <li class="mx-3 nav-item">
                                    <Link  style={{color:"#ffd054",fontWeight:"bold"}} onClick={() => {window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });refer.current.click()}} class="nav-link active" aria-current="page" to="/about-us">About Us</Link>
                                </li>
                                {/* <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="mx-3 nav-item">
                                    <a class="nav-link" href="#">Contact</a>
                                </li>
                                <li class="mx-3 nav-item">
                                    <a class="nav-link" href="#">Visa</a>
                                </li>
                                <li class="mx-3 nav-item">
                                    <a class="nav-link" href="#">Hotel</a>
                                </li> */}
                              
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}