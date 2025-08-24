import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '@material-ui/core'
import { useState } from 'react';
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./theimages', false, /\.(png|jpe?g|svg)$/));
const DestinationList = ({ theArr, anotherArr }) => {
  const [packageType, setPackageType] = useState("normal")
  const [date, setDate] = useState("10")

  console.log(theArr);


  return (
    <div className='container p-4 pt-5'>
      <div className='pb-3'>
        <h2 className='pb-3' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: '#ffd054' }}>Our Featured Rooms</h2>
       

        <div className="row">
          {theArr.map((e,i)=>{
            return <div className="col-md-4 col-12">
            <div class="card rounded-0 border-0 h-100 overflow-hidden shadow-none py-3"
            // style={{ borderColor: "#ffd054" }}
            >
              <img src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/${e.assets[0].url}`} class="card-img-top rounded-4" alt="..." />

              <div class="px-0 card-body d-flex flex-column">
                <h2 style={{ fontWeight: "bold" }} class="h4">{e.name}</h2>
                <div className="d-flex mb-2">
                  <div className="ratings">
                    <span className="mx-1">4.5</span>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <p class="card-text">{e.description01.slice(0,183)+" ..."}</p>
                <p>From <h2 style={{ fontWeight: "bold", display: "contents" }} class="h4">{`Rs.${e.name=="Standard Package"?"7500":e.name=="Deluxe Package"?"8500":e.name=="Executive Package"?"9500":""}`}</h2>+Tax</p>
                <div className='d-flex justify-content-start align-items-end' style={{ flex: 1 }}>
                  <Link  onClick={() => {window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} to={`/room/${e._id}`}><span style={{ backgroundColor: "#ffd054", color: "white" }} class="btn">Book Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i>                  </span></Link>
                </div>
              </div>
            </div>
          </div>
          })}
          
          


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

export default DestinationList