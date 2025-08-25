import React from 'react'

const CarCards = () => {
    const primaryColor =  '#ffd054' 
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div class="card h-100 border-0 shadow-none">
                        <img src="https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://pakdrive.com.pk/wp-content/uploads/2023/07/suzuki_alto-removebg-preview.png" class="card-img-top rounded-4" alt="..." />
                        <div class="card-body d-flex align-items-end">
                            <div>
                                <h5 class="card-title fw-bold" style={{color:primaryColor}}>Budget</h5>

                                <p className="text-secondary">Daihatsu Mira or similar</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card h-100 border-0 shadow-none">
                        <img src="https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://www.pngkit.com/png/full/902-9024183_thrifty-car-rentals-toyota-corolla-sedan-icar.png" class="card-img-top rounded-4" alt="..." />
                        <div class="card-body d-flex align-items-end">
                            <div>
                                <h5 class="card-title fw-bold" style={{color:primaryColor}}>Standard</h5>

                                <p className="text-secondary">Toyota Corolla or similar</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card h-100 border-0 shadow-none">
                        <img src="https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://pics.clipartpng.com/Black_Mercedes_Benz_S_Class_2012_Car_PNG_Clipart-106.png" class="card-img-top rounded-4" alt="..." />
                        <div class="card-body d-flex align-items-end">
                            <div>
                                <h5 class="card-title fw-bold" style={{color:primaryColor}}>Luxury</h5>

                                <p className="text-secondary">Mercedes Benz or similar</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card h-100 border-0 shadow-none">
                        <img src="https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/https://www.pngkey.com/png/full/205-2053278_new-2018-toyota-land-cruiser-2018-land-cruiser.png" class="card-img-top rounded-4" alt="..." />

                        <div class="card-body d-flex align-items-end">
                            <div>

                                <h5 class="card-title fw-bold" style={{color:primaryColor}}>SUV</h5>

                            <p className="text-secondary">Land Cruiser or similar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCards