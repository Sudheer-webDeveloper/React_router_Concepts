import React from 'react'
import { useOutletContext } from 'react-router-dom'


const Detail = () => {
    const {data} = useOutletContext()
    // console.log(useOutletContext())
    // consoile.log(data)
  return (
    <div>
    <h1>Detail Page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
      molestias libero cupiditate dolores hic obcaecati sit, eum illum dolor
      assumenda.
    </p>

    <h2>{data.description}</h2> 
    <br />
    {/* finally fetched data using useOutletContext */}

  
  </div>
  )
}

export default Detail
