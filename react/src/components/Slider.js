import React from 'react'

const Slider = () => {
  return (

    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img style={{ height: '490px' }} className="d-block w-100 " src="https://anhdephd.com/wp-content/uploads/2019/09/anh-gai-xinh-deo-kinh-che-mat-de-thuong-cute.jpg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img style={{ height: '490px' }} className="d-block w-100 " src="https://storiespace.com/t1/img/girl-and-car-3-2__vi-vn.jpg" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img style={{ height: '490px' }} className="d-block w-100 " src="https://anhdephd.com/wp-content/uploads/2019/06/anh-nu-than-tuong-Erika-Katara.jpg" alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img style={{ height: '490px' }} className="d-block w-100 " src="http://28996.webmotcham.info/wp-content/uploads/2019/08/slider_1.jpg" alt="Third slide" />
        </div>
      </div>
    </div>
  )
}
export default Slider