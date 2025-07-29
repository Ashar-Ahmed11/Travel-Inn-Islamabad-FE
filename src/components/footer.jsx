import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Footer({data}) {
    return (
        <div>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify">{data.about}                          </p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Room Packages</h6>
                            <ul class="footer-links">
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}}  to="/room/679aa994ff95565fefc645b9">Standard Package</Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} to="/room/679aa9cbff95565fefc645c9">Deluxe Package</Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} to="/room/679aa9cbff95565fefc645d0">Executive Package</Link></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Get In Touch</h6>
                            <ul class="footer-links">
                                {/* <li onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}}  >Home</li> */}
                                <li>Phone: <a  href={`tel:+923495625247`}>0349 5625247</a></li>
                                <li>Phone: <a  href={`tel:+923042500780`}>0304 2500780</a></li>
                                {/* <li>Phone: <a  href={`tel:+92-332-9386158`}>+92-332-9386158</a></li>
                                <li>Landline: <a  href={`tel:+92-51-8736204`}>+92-51-8736204</a></li> */}
                                
                            </ul>
                        </div>
                        
                    </div>
                    <hr/>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by
                                <Link to="/" onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}}> Travel Inn Islamabad</Link>.
                            </p>
                            <p class="copyright-text">Site developed by: <a target='_blank' href="https://metatech-official.co">Metatech</a> 
                                
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} class="facebook" to="/" target="blank"><i class="fa fa-facebook"></i></Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} class="twitter" to="/"><i class="fa fa-twitter"></i></Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} class="dribbble" to="/"><i class="fa fa-dribbble"></i></Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} class="linkedin" to="/"><i class="fa fa-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}