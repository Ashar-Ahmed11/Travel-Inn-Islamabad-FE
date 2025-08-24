import React, { useContext } from 'react'
import ContactUsCarousal from './contactuscarousal'
import carousalImage from './images/aboutus.png'
import tourGuide from './TourGuide.png'
import Footer from './footer'
import { useKeenSlider } from 'keen-slider/react'
import TopDestinations from './top-destinations'
import AppContext from '../context/appContext'
const TourGuide = () => {
    const { allPackageData } = useContext(AppContext)
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
    return (
        <div>
            <ContactUsCarousal upackage={"Tour Guide"} image={tourGuide} />
            <div className="container my-5">
                <h2 className='py-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#ffd054" }}>Pakistan Top Rated Travel & Tour Guide</h2>
                {/* <p style={{ opacity: 0.8 }}><b style={{ color: "#BB332F" }}>e-Safar Travel & Tours</b> are one of the leading Tour Operators in Pakistan, providing comprehensive services for groups and individuals from and to the country. We provide you with the flexibility of purchasing a customized independent tour or a packaged group of departure, and service all of your travel & booking questions through our expert consultant staff at all international & domestic tourist attraction locations, all major cities including Northern Areas of Pakistan. Travel includes activities like international & domestic holiday tour programs for honeymoon couples, families, students, large groups, national & multinational companies, foreigners and Pakistan’s living abroad.</p> */}
                {/* <h2 className='my-4' style={{ fontFamily: 'Montserrat', fontWeight: "bold" }}>Contact Details</h2> */}
                <p>Full Pakistan tour packages let you see beautiful wildlife, snow-covered hills, and Alpine lakes.Explore our Pakistan Tour options with team Pakistan Travel Guide to find the perfect trip for you, whether you want to do something exciting or just take it easy. You can visit cultural places, explore the hidden beauty of Skardu, go on a trek to Gondogoro K2, or take a relaxing family tour package. Our 2025 tour options for Pakistan are the best you can find.Pakistan tour packages now cost more than they did in 2025.
                </p>
            </div>
            <div className="container mt-5">
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
            <div className="container">
                <h2 className='py-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#ffd054" }}>You can find the best tour options in Pakistan through Travel Inn Islamabad in 2025.</h2>
                <p>

                    You can get Gilgit Hunza, Skardu, Chitral, Naran Kaghan, Neelum Valley, Azad Kashmir, Swat Kalam, and Murree Galayat tour packages for 2025 with the most up-to-date costs. Travel Inn Islamabad is an easy-to-use travel website that gives you information about Pakistan Tour Packages, the weather, road conditions, traffic, and the emergency phone numbers of government officials in case of an emergency.


                </p>

                <p>

                    Want to know where to go on vacation next year in Pakistan? Looking for the best places to go on vacation in Pakistan on the internet from your job or home is giving you a lot to think about. Don't say anything; Travel Inn Islamabad is here to help you figure it out.


                </p>
                <p>

                    At Travel Inn Islamabad, our job is to help you make the best choice and pick the best Pakistan tour options for your needs and budget.


                </p>
            </div>
            <TopDestinations />
            <div className="container my-5">





                <h2 className='py-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#ffd054" }}>Pakistan Affordable Tour Packages

                </h2>

                <p>
                    At Travel Inn Islamabad, our mission is simple: to provide unparalleled hospitality and create memorable experiences for every guest. We are dedicated to ensuring that every stay is comfortable, enjoyable, and tailored to your needs. From the moment you step into our hotel, you will be greeted with genuine smiles and attentive service.


                </p>

                {/* <Footer /> */}

            </div >
            <div className="container pb-3 pt-5"><h2 className='pb-3 px-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: '#ffd054' }}>Our Testimonials</h2>
            </div>
            <div className='container pb-3'>
                {/* <p className="h1 text-center my-5" style={{ fontFamily: 'Sagrantino', color: color }}>Our Testimonials</p> */}
                <div ref={testimonialSliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide">
                        <div style={{ backgroundColor: '#ffffff' }} className="card h-100 border-0 shadow-0">
                            <div className="card-body ">
                                <p className='text-center'><i style={{ fontSize: "25px" }} class="fa fa-quote-left px-2" aria-hidden="true"></i>I had a great time in Hunza Valley with Travel Inn Islamabad. The tour guide was friendly and knew a lot about the area. The scenery was beautiful, and the culture experiences made the trip unforgettable. Very strongly suggested! <i style={{ fontSize: "25px" }} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
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
                                        Bilal Ali
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
                                    Travel Inn Islamabad helped me have a great trip to Skardu.  The guide did a great job, the mountains and lakes were beautiful, and the whole trip felt like it had been carefully planned.  An experience I will never forget!
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
                                        Junaid Ahmed
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
                                    My trip to Naran Valley will never be forgotten thanks to Travel Inn Islamabad.  The views were beautiful, the guide was helpful, and the whole trip was easy and fun.  I'd love to take another trip with them!

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
                                        Sidra Khalil</span>
                                    <span style={{ fontSize: "15px" }} className="text-secondary d-block">Tourist</span>
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide">
                        <div style={{ backgroundColor: '#ffffff' }} className="card h-100 border-0 shadow-0">
                            <div className="card-body ">
                                <p className='text-center'><i style={{ fontSize: "25px" }} class="fa fa-quote-left px-2" aria-hidden="true"></i>
                                   Travel Inn Islamabad's trip of the Swat Valley was great.  Everything went smoothly, the guide was nice, and the hills and rivers were beautiful.  That was truly a wonderful trip!

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
                                     Asghar Ghaffar
                                    </span>
                                    <span style={{ fontSize: "15px" }} className="text-secondary d-block">Tourist</span>
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container mb-5">
                <h2 className='py-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#ffd054" }}>Northern Pakistan Tours   </h2>

                <p>
                    We offer high-altitude treks and cultural and historical tours as part of our Northern Pakistan tour plan. Gilgit Baltistan is the most popular and loved vacation spot in northern Pakistan. Famous villages in Northern Pakistan that we include in our Northern tour packages are Hunza and Skardu, along with other places. In Hunza, we visit the high Khunjerab Pass and the lake Attabad, among other things. In Skardu Valley, we visit Khaplu, Upper Kachura, Shigar Valley, and other places of interest. With our package deal, you can go on a trip to Northern Pakistan. Just <a style={{ color: '#ffd054' }} href="https://wa.me/923495625247" target='_blank'>get in touch with us today.</a>


                </p>
            </div>
        </div >
    )
}

export default TourGuide