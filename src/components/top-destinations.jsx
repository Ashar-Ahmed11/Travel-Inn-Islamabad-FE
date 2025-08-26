import React, { useContext } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '@material-ui/core'
import { useState } from 'react';
import AppContext from '../context/appContext';
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./theimages', false, /\.(png|jpe?g|svg)$/));
const TopDestinations = () => {
  const [packageType, setPackageType] = useState("normal")
  const [date, setDate] = useState("10")
  const { siteData } = useContext(AppContext)



  return (
    <div className='container p-4'>
      <div className='pb-3'>
        <h2 className='pb-3' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: '#ffd054' }}>Top Destinations</h2>


        <div className="row">
          <div className="col-md-6 col-12">
            <div class="card rounded-0 border-0 h-100 overflow-hidden shadow-none py-3"
            // style={{ borderColor: "#ffd054" }}
            >
              <img src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d5/1c/94/passu-valley-hunza-valley.jpg?w=800&h=-1&s=1`} style={{ height: "250px", objectFit: "cover" }} class="card-img-top rounded-4" alt="..." />

              <div class="px-0 card-body d-flex flex-column">
                <h2 style={{ fontWeight: "bold" }} class="h4">Hunza Valley</h2>
                <div className="d-flex mb-2">
                  {/* <div className="ratings">
                    <span className="mx-1">4.5</span>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                  </div> */}
                </div>
                <p class="card-text">Travel Inn Islamabad can help you discover Hunza Valley. They offer professional tour guides, beautiful scenery, and culture experiences that will make your trip unforgettable.</p>
                {/* <p>From <h2 style={{ fontWeight: "bold", display: "contents" }} class="h4">{`Rs.${e.name=="Standard Package"?"7500":e.name=="Deluxe Package"?"8500":e.name=="Executive Package"?"9500":""}`}</h2>+Tax</p> */}
                <div className='d-flex justify-content-start align-items-end' style={{ flex: 1 }}>
                  {siteData.phone && <a target='_blank' href={`https://wa.me/${siteData.phone.replace("0", "92").replace(" ", "")}?text=How%20can%20I%20book%20a%20guest%20house%3F`} ><span style={{ backgroundColor: "#ffd054", color: "white" }} class="btn">Book Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i>                  </span></a>}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div class="card rounded-0 border-0 h-100 overflow-hidden shadow-none py-3"
            // style={{ borderColor: "#ffd054" }}
            >
              <img src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://pyaraskardu.com/wp-content/uploads/2022/11/naran-kaghan-velley-960x636.jpg`} style={{ height: "250px", objectFit: "cover" }} class="card-img-top rounded-4" alt="..." />

              <div class="px-0 card-body d-flex flex-column">
                <h2 style={{ fontWeight: "bold" }} class="h4">Naran</h2>
                <div className="d-flex mb-2">
                  {/* <div className="ratings">
                    <span className="mx-1">4.5</span>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                  </div> */}
                </div>
                <p class="card-text">Explore Naran Valley with Travel Inn Islamabad. They offer professional tour guides, beautiful scenery, and cultural highlights that will make your trip unforgettable.</p>
                {/* <p>From <h2 style={{ fontWeight: "bold", display: "contents" }} class="h4">{`Rs.${e.name=="Standard Package"?"7500":e.name=="Deluxe Package"?"8500":e.name=="Executive Package"?"9500":""}`}</h2>+Tax</p> */}
                <div className='d-flex justify-content-start align-items-end' style={{ flex: 1 }}>
                  {siteData.phone && <a target='_blank' href={`https://wa.me/${siteData.phone.replace("0", "92").replace(" ", "")}?text=How%20can%20I%20book%20a%20guest%20house%3F`} ><span style={{ backgroundColor: "#ffd054", color: "white" }} class="btn">Book Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i>                  </span></a>}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div class="card rounded-0 border-0 h-100 overflow-hidden shadow-none py-3"
            // style={{ borderColor: "#ffd054" }}
            >
              <img src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://www.pakvoyager.com/uploads/0000/47/2023/05/09/untitled-design-2023-05-09t154820658.png`} style={{ height: "250px", objectFit: "cover" }} class="card-img-top rounded-4" alt="..." />

              <div class="px-0 card-body d-flex flex-column">
                <h2 style={{ fontWeight: "bold" }} class="h4">Skardu</h2>
                <div className="d-flex mb-2">
                  {/* <div className="ratings">
                    <span className="mx-1">4.5</span>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                  </div> */}
                </div>
                <p class="card-text">With Travel Inn Islamabad, you can visit Skardu and enjoy expert tour guides, stunning views, and a rich culture for a memorable mountain getaway.</p>
                {/* <p>From <h2 style={{ fontWeight: "bold", display: "contents" }} class="h4">{`Rs.${e.name=="Standard Package"?"7500":e.name=="Deluxe Package"?"8500":e.name=="Executive Package"?"9500":""}`}</h2>+Tax</p> */}
                <div className='d-flex justify-content-start align-items-end' style={{ flex: 1 }}>
                  {siteData.phone && <a target='_blank' href={`https://wa.me/${siteData.phone.replace("0", "92").replace(" ", "")}?text=How%20can%20I%20book%20a%20guest%20house%3F`} ><span style={{ backgroundColor: "#ffd054", color: "white" }} class="btn">Book Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i>                  </span></a>}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div class="card rounded-0 border-0 h-100 overflow-hidden shadow-none py-3"
            // style={{ borderColor: "#ffd054" }}
            >
              <img src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://www.blizin.com/public/images/uploads/tourpackage/6-days-5-nights-standard-tour-package-to-swat-valley-TP-27-1594898843.jpg`} style={{ height: "250px", objectFit: "cover" }} class="card-img-top rounded-4" alt="..." />

              <div class="px-0 card-body d-flex flex-column">
                <h2 style={{ fontWeight: "bold" }} class="h4">Swat Valley</h2>
                <div className="d-flex mb-2">
                  {/* <div className="ratings">
                    <span className="mx-1">4.5</span>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                  </div> */}
                </div>
                <p class="card-text">Explore Swat Valley with Travel Inn Islamabad. Skilled tour guides, beautiful scenery, and culture highlights will make this a trip you'll never forget.</p>
                {/* <p>From <h2 style={{ fontWeight: "bold", display: "contents" }} class="h4">{`Rs.${e.name=="Standard Package"?"7500":e.name=="Deluxe Package"?"8500":e.name=="Executive Package"?"9500":""}`}</h2>+Tax</p> */}
                <div className='d-flex justify-content-start align-items-end' style={{ flex: 1 }}>
                  {siteData.phone && <a target='_blank' href={`https://wa.me/${siteData.phone.replace("0", "92").replace(" ", "")}?text=How%20can%20I%20book%20a%20guest%20house%3F`} ><span style={{ backgroundColor: "#ffd054", color: "white" }} class="btn">Book Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i>                  </span></a>}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div class="card rounded-0 border-0 h-100 overflow-hidden shadow-none py-3"
            // style={{ borderColor: "#ffd054" }}
            >
              <img src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://www.blizin.com/public/images/uploads/tourpackage/6-days-5-nights-standard-tour-package-to-swat-valley-TP-27-1594898843.jpg`} style={{ height: "250px", objectFit: "cover" }} class="card-img-top rounded-4" alt="..." />

              <div class="px-0 card-body d-flex flex-column">
                <h2 style={{ fontWeight: "bold" }} class="h4">Murree</h2>
                <div className="d-flex mb-2">
                  {/* <div className="ratings">
                    <span className="mx-1">4.5</span>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                  </div> */}
                </div>
                <p class="card-text">Discover Murree with the help of Travel Inn Islamabad's knowledgeable tour guides, beautiful hills, and cultural charm for a relaxing and memorable vacation.</p>
                {/* <p>From <h2 style={{ fontWeight: "bold", display: "contents" }} class="h4">{`Rs.${e.name=="Standard Package"?"7500":e.name=="Deluxe Package"?"8500":e.name=="Executive Package"?"9500":""}`}</h2>+Tax</p> */}
                <div className='d-flex justify-content-start align-items-end' style={{ flex: 1 }}>
                  {siteData.phone && <a target='_blank' href={`https://wa.me/${siteData.phone.replace("0", "92").replace(" ", "")}?text=How%20can%20I%20book%20a%20guest%20house%3F`} ><span style={{ backgroundColor: "#ffd054", color: "white" }} class="btn">Book Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i>                  </span></a>}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div class="card rounded-0 border-0 h-100 overflow-hidden shadow-none py-3"
            // style={{ borderColor: "#ffd054" }}
            >
              <img src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://www.blizin.com/public/images/uploads/tourpackage/6-days-5-nights-standard-tour-package-to-swat-valley-TP-27-1594898843.jpg`} style={{ height: "250px", objectFit: "cover" }} class="card-img-top rounded-4" alt="..." />

              <div class="px-0 card-body d-flex flex-column">
                <h2 style={{ fontWeight: "bold" }} class="h4">Kashmir</h2>
                <div className="d-flex mb-2">
                  {/* <div className="ratings">
                    <span className="mx-1">4.5</span>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                  </div> */}
                </div>
                <p class="card-text">Explore Kashmir with Travel Inn Islamabad. We offer expert tour guides, beautiful valleys, and cultural wonders that will make your trip one you'll never forget.</p>
                {/* <p>From <h2 style={{ fontWeight: "bold", display: "contents" }} class="h4">{`Rs.${e.name=="Standard Package"?"7500":e.name=="Deluxe Package"?"8500":e.name=="Executive Package"?"9500":""}`}</h2>+Tax</p> */}
                <div className='d-flex justify-content-start align-items-end' style={{ flex: 1 }}>
                  {siteData.phone && <a target='_blank' href={`https://wa.me/${siteData.phone.replace("0", "92").replace(" ", "")}?text=How%20can%20I%20book%20a%20guest%20house%3F`} ><span style={{ backgroundColor: "#ffd054", color: "white" }} class="btn">Book Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i>                  </span></a>}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div class="card rounded-0 border-0 h-100 overflow-hidden shadow-none py-3"
            // style={{ borderColor: "#ffd054" }}
            >
              <img src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://www.blizin.com/public/images/uploads/tourpackage/6-days-5-nights-standard-tour-package-to-swat-valley-TP-27-1594898843.jpg`} style={{ height: "250px", objectFit: "cover" }} class="card-img-top rounded-4" alt="..." />

              <div class="px-0 card-body d-flex flex-column">
                <h2 style={{ fontWeight: "bold" }} class="h4">Naran</h2>
                <div className="d-flex mb-2">
                  {/* <div className="ratings">
                    <span className="mx-1">4.5</span>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                  </div> */}
                </div>
                <p class="card-text">Travel Inn Islamabad can help you discover Naran. With knowledgeable tour guides, beautiful lakes, lush meadows, and mountain views, you'll have an unforgettable adventure.</p>
                {/* <p>From <h2 style={{ fontWeight: "bold", display: "contents" }} class="h4">{`Rs.${e.name=="Standard Package"?"7500":e.name=="Deluxe Package"?"8500":e.name=="Executive Package"?"9500":""}`}</h2>+Tax</p> */}
                <div className='d-flex justify-content-start align-items-end' style={{ flex: 1 }}>
                  {siteData.phone && <a target='_blank' href={`https://wa.me/${siteData.phone.replace("0", "92").replace(" ", "")}?text=How%20can%20I%20book%20a%20guest%20house%3F`} ><span style={{ backgroundColor: "#ffd054", color: "white" }} class="btn">Book Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i>                  </span></a>}
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>



      {/* <div className='py-3'>
        <h2 className='pb-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#BB332F" }}>Who Are We?</h2>

        <p>e-Safar Travel & Tours is one of the leading Tour Operators in Pakistan, providing comprehensive services for groups and individuals from and to the country.</p>
        <p>We provide you with flexibility of purchasing a customized independent tour or a packaged group of departure, and service all of your travel & booking questions through our expert consultant staff at all international & domestic tourist attraction locations, all major cities including Northern Areas of Pakistan. Travel includes activities like international & domestic holiday tour programs for honeymoon couples, families, students, large groups, national & multi – national companies, foreigners and Pakistan’s living abroad.
        </p>
        <p style={{ color: "#BB332F" }}><strong>Following are the projects of e-Safar i.e </strong>
        </p>

        <ul>
          <li>
            e-Safar Travel and Tours
          </li>
          <li>
            e-Journey Travel and Tours
          </li>
          <li>
            Booking Agora
          </li>
        </ul>


        <p className='text-center'><strong style={{ color: "#BB332F" }}>Our motive is</strong> <br /> <strong>"Satisfy your Journey".</strong></p>
      </div> */}

    </div>
  )
}

export default TopDestinations