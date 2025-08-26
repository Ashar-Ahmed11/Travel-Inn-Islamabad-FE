import React, { useContext } from 'react'
import ContactUsCarousal from './contactuscarousal'
import carousalImage from './images/aboutus.png'
import tourGuide from './carRentalImage.png'
import Footer from './footer'
import { useKeenSlider } from 'keen-slider/react'
import TopDestinations from './top-destinations'
import AppContext from '../context/appContext'
import CarCards from './carCards'
const CarRental = () => {
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
            <ContactUsCarousal upackage={"Car Rental"} image={tourGuide} />
            <div className="container my-5">
                <h2 className='py-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#ffd054" }}>Pakistan Top Rated Car Rental – Travel Inn Islamabad</h2>
                {/* <p style={{ opacity: 0.8 }}><b style={{ color: "#BB332F" }}>e-Safar Travel & Tours</b> are one of the leading Tour Operators in Pakistan, providing comprehensive services for groups and individuals from and to the country. We provide you with the flexibility of purchasing a customized independent tour or a packaged group of departure, and service all of your travel & booking questions through our expert consultant staff at all international & domestic tourist attraction locations, all major cities including Northern Areas of Pakistan. Travel includes activities like international & domestic holiday tour programs for honeymoon couples, families, students, large groups, national & multinational companies, foreigners and Pakistan’s living abroad.</p> */}
                {/* <h2 className='my-4' style={{ fontFamily: 'Montserrat', fontWeight: "bold" }}>Contact Details</h2> */}
                <p>Full Pakistan car rental packages let you travel comfortably through beautiful wildlife regions, snow-covered hills, and Alpine lakes. Explore our Pakistan car rental options with Travel Inn Islamabad to find the perfect ride for your journey, whether you want something exciting or just prefer a smooth, relaxed trip. You can rent a car to visit cultural places, explore the hidden beauty of Skardu, drive on a trek route toward Gondogoro K2, or enjoy a convenient family tour in style. Our 2025 car rental options in Pakistan are the best you can find. Please note, rental costs in 2025 are higher compared to previous years.
                </p>
            </div>
            <div className="container">
                <h2 className='py-4' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#ffd054" }}>Types Of Cars We Offer</h2>
            </div>
            <CarCards />

            <div className="container">
                <h2 className='py-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#ffd054" }}>Find the Best Car Rental Options in Pakistan with Travel Inn Islamabad – 2025</h2>
                <p>

                    You can get the best car rental services in Pakistan through Travel Inn Islamabad in 2025. Choose from rentals for Gilgit Hunza, Skardu, Chitral, Naran Kaghan, Neelum Valley, Azad Kashmir, Swat Kalam, and Murree Galayat with the most up-to-date prices. Travel Inn Islamabad is an easy-to-use car rental platform that provides details about available vehicles, road conditions, traffic updates, fuel stations, and even emergency contact numbers for a worry-free trip.


                </p>

                <p>

                   Not sure which vehicle suits your next vacation in Pakistan? Searching endlessly online for the best car rental in Pakistan from your office or home can feel overwhelming. Don’t worry—Travel Inn Islamabad is here to guide you.


                </p>
                <p>

                   At Travel Inn Islamabad, our mission is to help you make the smartest choice and book the most reliable car rental option that matches your travel needs and budget.


                </p>
            </div>


            <div className="container mt-5">
                <h2 className='py-4' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#ffd054" }}>Services We Offer</h2>

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
                                    <h2 style={{ color: '#ffd054' }} class="card-title h5">Wide Range of Vehicles</h2>
                                    <p class="card-text">From economy cars to luxury rides, choose the perfect vehicle for your journey.</p>
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
                                    <p class="card-text">Budget-friendly rentals with no hidden charges.
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
                                    <h2 style={{ color: '#ffd054' }} class="card-title h5">24/7 Support                </h2>
                                    <p class="card-text">Round-the-clock customer service to assist you anytime, anywhere.</p>

                                    {/* <div className='d-flex justify-content-center align-items-end' style={{ flex: 1 }}> */}
                                    {/* <span style={{ borderColor: '#ffd054' }} onClick={() => quoteRef.current.click()} class="btn btn-primary">Get A Quote</span> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>

                    </div>
            </div>


            <div className="container my-5">





                <h2 className='py-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#ffd054" }}>Affordable Car Rental in Pakistan

                </h2>

                <p>
                    At Travel Inn Islamabad, we strive to deliver comfort, reliability, and value with every ride. Our goal is to make your travel experience hassle-free, affordable, and customized to your needs. From booking to drop-off, we ensure a smooth journey backed by friendly service and dependable vehicles.


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
                                <p className='text-center'><i style={{ fontSize: "25px" }} class="fa fa-quote-left px-2" aria-hidden="true"></i>From airport pickup to long-distance travel, everything was seamless. The driver was punctual and friendly, and the ride was extremely comfortable. Truly professional service! <i style={{ fontSize: "25px" }} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
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
                                        Zohair Ahmed
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
                                    Travel Inn Islamabad made my trip so smooth! The car was spotless, the driver was professional, and the rates were very reasonable. Highly recommended for anyone visiting Islamabad!
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
                                        Ahmed R.
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
                                    I booked an SUV for my family tour to Hunza. The vehicle was comfortable and well-maintained, and their 24/7 support gave me complete peace of mind throughout the journey.

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
                                        Sana Malik
                                        </span>
                                    <span style={{ fontSize: "15px" }} className="text-secondary d-block">Tourist</span>
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide">
                        <div style={{ backgroundColor: '#ffffff' }} className="card h-100 border-0 shadow-0">
                            <div className="card-body ">
                                <p className='text-center'><i style={{ fontSize: "25px" }} class="fa fa-quote-left px-2" aria-hidden="true"></i>
                                    Best car rental service in Islamabad! Easy booking process, polite staff, and no hidden charges. I’ll definitely choose Travel Inn Islamabad for all my future travels.

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
                                        Imran K.
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
                    Discover the breathtaking beauty of Northern Pakistan with our carefully designed tour packages. From high-altitude treks to cultural and historical explorations, our Northern tours cover the region’s most enchanting destinations. Gilgit-Baltistan, the heart of northern tourism, offers unmatched charm with Hunza’s stunning Khunjerab Pass and Attabad Lake, while Skardu Valley features Khaplu, Upper Kachura, Shigar Valley, and more. With Travel Inn Islamabad, every trip to Northern Pakistan is an unforgettable experience. <a style={{ color: '#ffd054' }} href="https://wa.me/923495625247" target='_blank'>Book your package today</a> and let us take you on a journey of adventure and discovery.



                </p>
            </div>
        </div >
    )
}

export default CarRental