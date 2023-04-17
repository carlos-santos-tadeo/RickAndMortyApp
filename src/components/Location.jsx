import React from 'react'

const Location = ({location}) => {


  return (
    <section className='text-white'>
      <h2 className='text-center font-black sm:text-[22px]'>{location?.name}</h2>
      <ul className='flex justify-evenly py-5 font-bold text-[9px] sm:text-[15px]'>
        <li>Type: <span className='text-white/70'>{location?.type}</span></li>
        <li>Dimension: <span className='text-white/70'>{location?.dimension}</span></li>
        <li>Population: <span className='text-white/70'>{location?.residents.length}</span></li>
      </ul>
    </section>
  )
}

export default Location