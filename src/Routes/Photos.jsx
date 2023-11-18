import React from 'react'
import { useOutletContext } from "react-router-dom";


const Photos = () => {
  const {data} = useOutletContext()


  return (
    <div>
    <h1>This is the pricing route whish is nested inside the /host/vans/:id as a /host/vans/:id/photos</h1>

    <br />
    <h2>Photos</h2>

    <br />
    <br />
    <img src={data.image} alt="Image" style={{width:"200px", height:"250px"}} />

    {/* this image fetched by using the useOutletContext */}
</div>
  )
}

export default Photos
