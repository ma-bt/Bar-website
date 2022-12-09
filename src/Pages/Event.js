import React from 'react'
import BodyImg from '../image/body.png'
import WineImg from '../image/wine.jpg'
import MusicImg from '../image/livemusic.jpg'
import AnnImg from '../image/ann.jpg'

export default function Event() {
    return (
        <>
            <div id='event' >
                <div >
                    <h1 className=' fw-light text-center pt-5' style={{color:' #ce0303'}}>EVENTS</h1>
                    <div>
                        <div className=" mb-2 border-top" >
                            <div className="row g-0 p-5">
                                <div className="col-md-6">
                                    <img src={BodyImg} className="img-fluid rounded-start zoom1 " style={{  }} alt="..." />
                                </div>

                                <div className="col-md-6">
                                    <div className="card-body ps-5 pt-4">
                                        <h2 className="card-title">Wine Tasting Event</h2>
                                        <p className="card-text py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia aliquam sem ac accumsan. Pellentesque eu enim dolor. Mauris vitae semper orci, ut bibendum metus. Cras quis sapien tellus. Sed a consequat justo, at elementum tortor. Fusce ornare cursus mauris, in suscipit lectus ornare eu. Nunc suscipit purus id felis lobortis, nec aliquet felis pulvinar. Maecenas magna ante, vehicula nec justo at, euismod fringilla lorem.Cras quis sapien tellus. Sed a consequat justo,</p>
                                        <div ><button type="button" class="btn btn-secondary   ">Read more</button></div>
                                        <br />
                                        <p className="card-text"><small className="text-muted ">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div >
                    <div className='row '>
                        <div className='col-lg-6 pt-2'>
                            <div className='g-0 ps-lg-5'>
                                <div className="zoom1" style={{  }}>
                                    <img src={MusicImg} className="card-img-top rounded " style={{ height:'400px'}}alt="..." />
                                    <div className="card-body pt-4">
                                    <h2 class="card-title text-center">Live Music</h2>
                                        <p className="card-text py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia aliquam sem ac accumsan. Pellentesque eu enim dolor. Mauris vitae semper orci, ut bibendum metus. Cras quis sapien tellus. Sed a consequat justo, at elementum tortor. Fusce ornare cursus mauris, in suscipit lectus ornare eu. </p>
                                        <div ><button type="button" class="btn btn-secondary   ">Read more</button></div>
                                        <br />
                                        <p className="card-text"><small className="text-muted ">Last updated 4 hrs ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 pt-2'>
                            <div className='g-0 pe-lg-5 m-'>
                                <div className="zoom1" style={{ }}>
                                    <img src={AnnImg} className="card-img-top rounded " style={{ height:'400px'}} alt="..." />
                                    <div className="card-body pt-4">
                                    <h2 class="card-title text-center">Bar Anniversary</h2>
                                        <p className="card-text py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia aliquam sem ac accumsan. Pellentesque eu enim dolor. Mauris vitae semper orci, ut bibendum metus. Cras quis sapien tellus. Sed a consequat justo, at elementum tortor. Fusce ornare cursus mauris, in suscipit lectus ornare eu. </p>
                                        <div ><button type="button" class="btn btn-secondary   ">Read more</button></div>
                                        <br />
                                        <p className="card-text"><small className="text-muted ">Last updated 1 day ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>

    )
}
