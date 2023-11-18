import React from 'react'
import { useOutletContext } from 'react-router-dom'


const Pricing = () => {
    const {data} = useOutletContext()
  return (
    <div>
      <h1>This is the pricing route whish is nested inside the /host/vans/:id as a /host/vans/:id/pricing</h1>
      <br />
      <h2>$100</h2>

      <br />
      <h2>${data.price}</h2>
    </div>
  )
}

export default Pricing
