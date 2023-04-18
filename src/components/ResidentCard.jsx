import axios from 'axios'
import React, { useEffect, useState } from 'react'

const residentsStatus = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  unknown: "bg-gray-400"
}

const ResidentCard = ({ resident }) => {

  const [residentInfo, setResidentInfo] = useState()
  
  useEffect(() => {
    axios.get(resident)
      .then((res) => setResidentInfo(res.data))
      .catch((err) => console.log(err))
  }, [])


  return (
    <article className='shadow-lg shadow-teal-200'>
      <div className='relative border-[2px] border-green-600 animate-pulse'>
        <img className='w-full' src={residentInfo?.image} alt="" />
        <div className='border-[1px] border-green-600 absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#020A02]/60 text-white p-1 px-2 flex gap-2 items-center rounded-sm'>
          <div className={`w-3 h-3 ${residentsStatus[residentInfo?.status]} rounded-full`}></div>
          <span>{residentInfo?.status}</span>
        </div>
      </div>
      <section className='border-[2px] border-green-600 h-[168px] '>
        <h3 className='text-white font-bold text-lg text-left px-5 '>{residentInfo?.name}</h3>
        <ul className='py-2'>
          <li className='py-1 px-3'>
            <span className='text-[12px] text-white/50 px-0'>Species</span>
            <span className='text-white text-[13px] pl-12'>{residentInfo?.species}</span>
          </li>
          <li className='py-1 px-3'>
            <span className='text-[12px] text-white/50'>Origin</span>
            <span className='text-white text-[13px] pl-14'>{residentInfo?.origin.name}</span>
          </li>  
          <li className='py-1 px-3'>
            <span className='text-[12px] text-white/50'>Times appear</span>
            <span className='text-white text-[13px] pl-4'>{residentInfo?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default ResidentCard