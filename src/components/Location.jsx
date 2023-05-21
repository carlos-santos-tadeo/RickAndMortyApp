import React from 'react'

const Location = ({location}) => {


  return (
    <section className='text-white'>
      <h2 className='text-center font-black sm:text-[22px]'>{location?.name}</h2>
      <ul className='flex rounded-lg justify-evenly mx-auto max-w-[95%] sm:max-w-[85%] xl:max-w-[1200px] lg my-3 py-2 px-[2px] font-bold text-[9px] sm:text-[15px] bg-green-700/70'>
        <li>Type: <span className='text-white/70'>{location?.type}</span></li>
        <li>Dimension: <span className='text-white/70'>{location?.dimension}</span></li>
        <li>Population: <span className='text-white/70'>{location?.residents.length}</span></li>
      </ul>
    </section>
  )
}

export default Location