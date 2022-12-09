import React from 'react'
import Open from '../image/wine.jpg'
import Private from '../image/private.jpg'
import Vip from '../image/vip.png'

export default function Bar() {
  return (
    <section  className='p-5 d-none d-lg-block'>
      <div> <h1 className=' fw-light text-center py-5  ' style={{ color: ' #ce0303' }}>OUR SPACES</h1></div>
      <div className="row g-0 p-5 border-top">
        <div className="col-md-6">
          <img src={Open} className="img-fluid rounded  " style={{}} alt="..." />
        </div>

        <div className="col-md-6">
          <div className="card-body ps-4 pt-5 mt-5">
            <h2 className="card-title pt-5">Open Bar Area</h2>
            <p className="card-text py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia aliquam sem ac accumsan. Pellentesque eu enim dolor. Mauris vitae semper orci, ut bibendum metus. Cras quis sapien tellus. Sed a consequat justo, at elementum tortor. Fusce ornare cursus mauris, in suscipit lectus ornare eu. Nunc suscipit purus id felis lobortis, nec aliquet felis pulvinar. Maecenas magna ante, vehicula nec justo at, euismod fringilla lorem.Cras quis sapien tellus. Sed a consequat justo,</p>
            <div ><a href='#contact'>Make an Enquiry</a></div>

          </div>
        </div>
      </div>


      <div className="row g-0 p-5">


        <div className="col-md-6">
          <div className="card-body  pt-5 mt-5 ">
            <h2 className="card-title pt-5">Private Area</h2>
            <p className="card-text py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia aliquam sem ac accumsan. Pellentesque eu enim dolor. Mauris vitae semper orci, ut bibendum metus. Cras quis sapien tellus. Sed a consequat justo, at elementum tortor. Fusce ornare cursus mauris, in suscipit lectus ornare eu. Nunc suscipit purus id felis lobortis, nec aliquet felis pulvinar. Maecenas magna ante, vehicula nec justo at, euismod fringilla lorem.Cras quis sapien tellus. Sed a consequat justo,</p>
            <div ><a href='#contact'>Make an Enquiry</a></div>

          </div>
        </div>

        <div className="col-md-6 ps-4">
          <img src={Private} className="img-fluid rounded  " style={{}} alt="..." />
        </div>
      </div>

      <div className="row g-0 p-5">
        <div className="col-md-6">
          <img src={Vip} className="img-fluid rounded  " style={{}} alt="..." />
        </div>

        <div className="col-md-6">
          <div className="card-body ps-4 pt-5 mt-5">
            <h2 className="card-title pt-5">VIP Section</h2>
            <p className="card-text py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia aliquam sem ac accumsan. Pellentesque eu enim dolor. Mauris vitae semper orci, ut bibendum metus. Cras quis sapien tellus. Sed a consequat justo, at elementum tortor. Fusce ornare cursus mauris, in suscipit lectus ornare eu. Nunc suscipit purus id felis lobortis, nec aliquet felis pulvinar. Maecenas magna ante, vehicula nec justo at, euismod fringilla lorem.Cras quis sapien tellus. Sed a consequat justo,</p>
            <div ><a href='#contact'>Make an Enquiry</a></div>

          </div>
        </div>
      </div>
    </section>
  )
}
