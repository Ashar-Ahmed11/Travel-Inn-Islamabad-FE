import React from 'react'
// import '../App.css'
import Navbar from './navbar.jsx'
import Carousal from './carousal'
import Welcome from './welcome'
import Featured from './featured'
import Holiday from './holiday'
import Footer from './footer'
import Consultation from './consultation'
import UnderConstruction from './underConstruction.jsx'
import Destionations from './destination.jsx'
import DestinationList from './destination copy 2.jsx'
import centerImage from './roomImages/executive/WhatsApp Image 2025-01-17 at 11.50.39 PM.jpeg'
import { useKeenSlider } from 'keen-slider/react.js'
import { useContext } from 'react'
import AppContext from '../context/appContext.jsx'

export default function Home({ theArr, anotherArr }) {
  const theData = useContext(AppContext)
  const { allPackageData } = theData
  const animation = { duration: 5000, easing: (t) => t }
  const color = "#ffd054"
  const [testimonialSliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      origin: "center",
      perView: window.innerWidth < 768 ? 1 : 2.5,

    },

    created(s) {
      s.moveToIdx(1, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation)
    },
  })
  // console.log(`url(${window.location.href}${centerImage.slice(1)})`);


  return (
    <div>
      {/* 
<Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

         */}

      <Carousal />
      <div className="container mt-4">
        <div>
          <h2 className='pb-3' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: '#ffd054' }}>Services We Offer</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 col-12">
              <div class="card rounded-4 h-100 overflow-hidden shadow-sm"
              // style={{ borderColor: "#ffd054" }}
              >
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div className='pb-3 pt-4 d-flex justify-content-center' style={{ borderRadius: '100%' }}>
                <p className='pt-4 display-1 h1' ><i style={{ color: '#ffd054' }} class={`fa fa-compass fa-xl`}></i></p>
                </div>
                <div class="card-body d-flex flex-column text-center">
                  <h2 style={{ color: '#ffd054' }} class="card-title h5">Tour Guide</h2>
                  <p class="card-text">Personalized tours tailored to your interests and schedule.</p>
                  <div className='d-flex justify-content-center align-items-end' style={{ flex: 1 }}>
                    {/* <Link ref={quoteRef} style={{ borderColor: '#ffd054' }} to={'/contact'} onClick={() => window.scrollTo({ top: 0, bottom: 0, behavior: 'smooth' })} class="btn btn-primary">Get A Quote</Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 my-2">
              <div class="card rounded-4 h-100 overflow-hidden shadow-sm"
              // style={{ borderColor: "#ffd054" }}
              >
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div className='pb-3 pt-4 d-flex justify-content-center' style={{ borderRadius: '100%' }}>
                <p className='pt-4 display-1 h1' ><i style={{ color: '#ffd054' }} class={`fa fa-home fa-xl`}></i></p>
                </div>
                <div class="card-body d-flex flex-column text-center">
                  <h2 style={{ color: '#ffd054' }} class="card-title h5">Guest House</h2>
                  <p class="card-text">Exceptional value without compromising on quality.



                  </p>
                  <div className='d-flex justify-content-center align-items-end' style={{ flex: 1 }}>
                    {/* <span style={{ borderColor: '#ffd054' }} onClick={() => quoteRef.current.click()} class="btn btn-primary">Get A Quote</span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 my-2">
              <div class="card rounded-4 h-100 overflow-hidden shadow-sm"
              // style={{ borderColor: "#ffd054" }}
              >
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div className='pb-3 pt-4 d-flex justify-content-center' style={{ borderRadius: '100%' }}>
                <p className='pt-4 display-1 h1' ><i style={{ color: '#ffd054' }} class={`fa fa-car fa-xl`}></i></p>
                </div>
                <div class="card-body d-flex flex-column text-center">
                  <h2 style={{ color: '#ffd054' }} class="card-title h5">Car Rental</h2>
                  <p class="card-text">Exceptional value without compromising on quality.



                  </p>
                  <div className='d-flex justify-content-center align-items-end' style={{ flex: 1 }}>
                    {/* <span style={{ borderColor: '#ffd054' }} onClick={() => quoteRef.current.click()} class="btn btn-primary">Get A Quote</span> */}
                  </div>
                </div>
              </div>
            </div>
            

          </div>


          <DestinationList theArr={allPackageData} />

          <div className="row justify-content-center">
            <div className="col-md-4 col-12 mb-5">
              <div class="card rounded-4 h-100 overflow-hidden shadow-sm"
              // style={{ borderColor: "#ffd054" }}
              >
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                {/* <div className='pb-3 pt-4 d-flex justify-content-center' style={{ borderRadius: '100%' }}> */}
                {/* <p className='pt-4 display-1 h1' ><i style={{ color: '#ffd054' }} class={`fa-solid fa-user fa-xl`}></i></p> */}
                {/* </div> */}
                <div class="card-body d-flex flex-column text-center">
                  <h2 style={{ color: '#ffd054' }} class="card-title h5">Private Guide                </h2>
                  <p class="card-text">Personalized tours tailored to your interests and schedule.</p>
                  <div className='d-flex justify-content-center align-items-end' style={{ flex: 1 }}>
                    {/* <Link ref={quoteRef} style={{ borderColor: '#ffd054' }} to={'/contact'} onClick={() => window.scrollTo({ top: 0, bottom: 0, behavior: 'smooth' })} class="btn btn-primary">Get A Quote</Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 my-2 mb-5">
              <div class="card rounded-4 h-100 overflow-hidden shadow-sm"
              // style={{ borderColor: "#ffd054" }}
              >
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                {/* <div className='pb-3 pt-4 d-flex justify-content-center' style={{ borderRadius: '100%' }}> */}
                {/* <p className='pt-4 display-1 h1' ><i style={{ color: '#ffd054' }} class={`fa-solid fa-check-square fa-xl`}></i></p> */}
                {/* </div> */}
                <div class="card-body d-flex flex-column text-center">
                  <h2 style={{ color: '#ffd054' }} class="card-title h5">Affordable Price                </h2>
                  <p class="card-text">Exceptional value without compromising on quality.



                  </p>
                  <div className='d-flex justify-content-center align-items-end' style={{ flex: 1 }}>
                    {/* <span style={{ borderColor: '#ffd054' }} onClick={() => quoteRef.current.click()} class="btn btn-primary">Get A Quote</span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 my-2 mb-5">
              <div class="card rounded-4 h-100 overflow-hidden shadow-sm"
              // style={{ borderColor: "#ffd054" }}
              >
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                {/* <div className='pb-3 pt-4 d-flex justify-content-center' style={{ borderRadius: '100%' }}> */}
                {/* <div className="d-flex justify-content-center">
                    <p className='display-1 h1 px-2 pt-4' ><i style={{ color: '#ffd054' }} class={`fa fa-question-circle fa-xl`}></i></p>

                  </div> */}
                {/* </div> */}
                <div class="card-body d-flex flex-column text-center">
                  <h2 style={{ color: '#ffd054' }} class="card-title h5">Great Support                </h2>
                  <p class="card-text">Dedicated assistance available around the clock.</p>

                  {/* <div className='d-flex justify-content-center align-items-end' style={{ flex: 1 }}> */}
                  {/* <span style={{ borderColor: '#ffd054' }} onClick={() => quoteRef.current.click()} class="btn btn-primary">Get A Quote</span> */}
                  {/* </div> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='module' >
        {/* <div class={`carousel-item ${i==0&&'active'}`}> */}
        {/* <div style={{ zIndex: '20' }} className='shade'></div> */}
        <div className="module-inside container">

          <div className="row py-5">
            <div className="col-12 col-md-6 d-flex  flex-column justify-content-center">
              {/* <h1 className='px-3 text-light boldest'>In Room Amenities & Services          </h1> */}
              <div className="container pb-3 pt-5"><h2 className=' py-2 px-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: '#fff' }}>In Room Amenities & Services  </h2></div>

              <p style={{ fontSize: "1.25rem" }} className='px-3 pb-3 text-light boldest'>At Travel Inn Islamabad, we prioritize your comfort and satisfaction, providing you with all the amenities and services you need for an enjoyable stay.
              </p>
            </div>
            <div className="col-12 col-md-6"><div class="accordion accordion-flush" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    En-Suite Bathroom
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionPanelsStayOpenExample">
                  <div class="accordion-body">
                    <p>Equipped with modern fixtures and complimentary toiletries.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    High-Speed Wi-Fi
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                  <div class="accordion-body">
                    <p>Stay connected with free, fast internet access.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Flat-Screen TV
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                  <div class="accordion-body">
                    <p>Relax with a variety of local and international channels.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Workspace
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                  <div class="accordion-body">
                    <p>A dedicated area for work or study.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Complimentary Breakfast
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                  <div class="accordion-body">
                    {/* <p>“In it are clear signs [such as] the standing place of Ibraheem. And whoever enters it shall be safe. And [due] to Allah from the people is a pilgrimage to the House – for whoever is able to find thereto a way. But whoever disbelieves – then indeed, Allah is free from need of the worlds.” (Al-Quran: Verse 97, Surah Al-Imran)</p> */}
                    <p>Start your day with a delicious meal.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Front Desk and Reception Service
                  </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                  <div class="accordion-body">
                    <p>24/7 Reception Service,Express Check In and Check Out,Currency Exchange,Tour Guide,24/7 Alert Concierge,Invoice Provided,Best top of the line PMS</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    Business facility
                  </button>
                </h2>
                <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                  <div class="accordion-body">
                    <p>Meeting and Banqueting facilities,Business center,Fax and Photocopy and printing,Business meeting

                    </p>
                  </div>
                </div>
              </div>
            </div></div>
          </div>
        </div>
      </div>
      <div className="container pb-3 pt-5"><h2 className='pb-3 px-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: '#ffd054' }}>Our Testimonials</h2>
      </div>

      <div className='container pb-3'>
        {/* <p className="h1 text-center my-5" style={{ fontFamily: 'Sagrantino', color: color }}>Our Testimonials</p> */}
        <div ref={testimonialSliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide">
            <div style={{ backgroundColor: '#ffffff' }} className="card h-100 border-0 shadow-0">
              <div className="card-body ">
                <p className='text-center'><i style={{ fontSize: "25px" }} class="fa fa-quote-left px-2" aria-hidden="true"></i>Most luxurious guesthouse in the capital. I was amazed with the interior and staff service. <i style={{ fontSize: "25px" }} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                <p style={{ fontWeight: "bolder", fontSize: "25px" }} className="text-center">
                  <div className="ratings">
                    {/* <span className="mx-1">4.5</span> */}
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    {/* <i class="fa fa-star"></i> */}
                  </div>
                  <span style={{ color: color }}>
                    Shahid Khan
                    <span style={{ fontSize: "15px" }} className="text-secondary d-block">Tourist</span>
                  </span>
                </p>

              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide">
            <div style={{ backgroundColor: '#ffffff' }} className="card h-100 border-0 shadow-0">
              <div className="card-body ">
                <p className='text-center'><i style={{ fontSize: "25px" }} class="fa fa-quote-left px-2" aria-hidden="true"></i>
                  Great place to stay with wonderful warm staff. We stayed for a few days and the staff informed us about all the nearby places we could visit - they even arranged car rental for us. The rooms were comfortable and clean, and the food was great too.<i style={{ fontSize: "25px" }} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                <p style={{ fontWeight: "bolder", fontSize: "25px" }} className="text-center">
                  <div className="ratings">
                    {/* <span className="mx-1">4.5</span> */}
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    {/* <i class="fa fa-star"></i> */}
                  </div>
                  <span style={{ color: color }}>
                    Abdul Samad
                    <span style={{ fontSize: "15px" }} className="text-secondary d-block">Tourist</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide">
            <div style={{ backgroundColor: '#ffffff' }} className="card h-100 border-0 shadow-0">
              <div className="card-body ">
                <p className='text-center'><i style={{ fontSize: "25px" }} class="fa fa-quote-left px-2" aria-hidden="true"></i>
                  Travel Inn Islamabad offers great value for money. The Single Deluxe Room was cozy and well-equipped. The staff was always friendly and ready to help. I would definitely stay here again!"

                  <i style={{ fontSize: "25px" }} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                <p style={{ fontWeight: "bolder", fontSize: "25px" }} className="text-center">
                  <div className="ratings">
                    {/* <span className="mx-1">4.5</span> */}
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    {/* <i class="fa fa-star"></i> */}
                  </div>
                  <span style={{ color: color }}>
                    Mirza Sameer</span>
                  <span style={{ fontSize: "15px" }} className="text-secondary d-block">Tourist</span>
                </p>

              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide">
            <div style={{ backgroundColor: '#ffffff' }} className="card h-100 border-0 shadow-0">
              <div className="card-body ">
                <p className='text-center'><i style={{ fontSize: "25px" }} class="fa fa-quote-left px-2" aria-hidden="true"></i>
                  My stay at Travel Inn Islamabad was fantastic! The Triple/Family Deluxe Room was perfect for my family, and the private guide made our sightseeing tours memorable. Exceptional service all around!

                  <i style={{ fontSize: "25px" }} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                <p style={{ fontWeight: "bolder", fontSize: "25px" }} className="text-center">
                  <div className="ratings">
                    {/* <span className="mx-1">4.5</span> */}
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    {/* <i class="fa fa-star"></i> */}
                  </div>
                  <span style={{ color: color }}>
                    Ashar Ahmed
                  </span>
                  <span style={{ fontSize: "15px" }} className="text-secondary d-block">Tourist</span>
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>


      {/* <div data-aos="fade-up"
        data-aos-duration="1000">
        <Welcome />
      </div>
      <Featured />

      <Holiday />
      <div className='mb-4'>
        <Consultation />
      </div> */}
      {/* <UnderConstruction/> */}

    </div>
  )
}