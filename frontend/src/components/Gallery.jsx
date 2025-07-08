import React from 'react';
const Gallery = ()=>{
  const gallery = ['./imgimg1.jpg','./imgimg2.jpg','./img3.jpg','./imgimg4.jpg','./imgimg7.jpg','./imgimg8.jpg','./imgimg5.jpg','./imgimg6.jpg'];

  return (
    <section className="gallery">
      <h1>Train. Nourish. Recover.</h1>
      <div className="images">
        <div>
          {
          gallery.slice(0,3).map((element,index)=>(
            <img key ={index} src={element} alt='galleryImage'/>
          ))
          }
        </div>
        <div>
          {
          gallery.slice(3,6).map((element,index)=>(
            <img key ={index} src={element} alt='galleryImage'/>
          ))
          }
        </div>
        <div>
          {
          gallery.slice(6,9).map((element,index)=>(
            <img key ={index} src={element} alt='galleryImage'/>
          ))
          }
        </div>
      </div>
    </section>
  )
}

export default Gallery;