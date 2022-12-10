import React from 'react'

export default function Contact() {
    return (
        <>
            <section >
             
                    <div> <h1 className=' fw-light text-center py-5  ' style={{ color: ' #ce0303' }}>CONTACT US</h1></div>
                    <div className='bg-light'>
                    <div className='row  p-5 '>
                        <div className='col-lg-6 pt-5 my-5 text-center'>
                            <h2 className='fw-bold '>For the Private or Vip Bar Reservation</h2>
                            <h5 className='fw-light '>Please Fill up the Form according to your Time and date</h5>
                            <p>You will receive call or email after the reservation is conformed</p>
                        </div>
                        <div className='col-lg-6'>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="input" className="form-label">Full Name</label>
                                    <input type="Full Name" className="form-control" id="input" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="input" className="form-label">Email</label>
                                    <input type="Email" className="form-control" id="inputPassword4" />
                                </div>
                              
                                <div className="col-md-4">
                                    <label htmlFor="input" className="form-label">Contact Number</label>
                                    <input type="text" className="form-control" id="input" />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputState" className="form-label">Bar Type</label>
                                    <select id="inputState" className="form-select">
                                        <option selected>Bar...</option>
                                        <option>Private Bar</option>
                                        <option>VIP Bar</option>
                                        <option>Open Bar</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputZip" className="form-label">No. of People</label>
                                    <input type="number" className="form-control" id="inputZip" />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputdate" className="form-label">Date</label>
                                    <input type="date" className="form-control" id="inputZip" />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputZip" className="form-label">Time</label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-danger">Submit </button>
                                </div>
                            </form>

                        </div>
                        
                    </div>
                    </div>

               
            </section>
        </>
    )
}
