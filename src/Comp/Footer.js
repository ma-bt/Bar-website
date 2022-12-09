import React from 'react'

export default function Footer() {
    return (
        <>
            <section className='foot '>
                
                <div className='row p-5'>
                    <div className='col-lg-3 py-3 text-center'>
                        <h5 className='pb-2 fw-bold'>Our Location</h5>
                        <ul className='list-unstyled'>
                            <li>448 S. Lazimpat Street</li>
                            <li>Kathmandu,Bagmati</li>
                            <li>Locate us on Google Map</li>
                        </ul>


                    </div>
                    <div className='col-lg-3 py-3 text-center'>

                        <h5 className='pb-2 fw-bold'>Hours of Operation</h5>
                        <ul className='list-unstyled'>
                            <li>Sunday - Friday</li>
                            <li>11am - 11pm</li>
                            <li>Opens on Public holiday except Saturday</li>


                        </ul>
                    </div>
                    <div className='col-lg-3 py-3 text-center'>

                        <h5 className='pb-2 fw-bold'>Customer Support</h5>
                        <ul className='list-unstyled'>
                            <li>FAQs</li>
                            <li>Support Center</li>
                            <li>Refer & Earn</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 py-3 text-center'>

                        <h5 className='pb-2 fw-bold'>Follow US </h5>
                        <ul className='list-unstyled'>
                            <li><i class="bi bi-envelope"> taralofficial@gmail.com</i></li>
                            <li><i class="bi bi-telephone"> +977 986868686</i></li>
                            <ul className=' d-flex list-unstyled gap-3 justify-content-center'>
                                <li><h5><i class="bi bi-facebook"></i></h5></li>
                                <li><h5><i class="bi bi-twitter"></i></h5></li>
                                <li><h5><i class="bi bi-youtube"></i></h5></li>
                                <li><h5><i class="bi bi-linkedin"></i></h5></li>
                            </ul>
                        </ul>
                    </div>
                    <small className=' text-center'>© 2022 | Taral. All rights reserved.</small>
                </div>
            </section>

        </>
    )
}
