import React, { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'

const ResidentList = ({ location }) => {

  const [currentPage, setCurrentPage] = useState(1)

  const RESIDENTS_PER_PAGE = 20

  const arrayPages = []

  const quantityPages = Math.ceil(location?.residents.length / RESIDENTS_PER_PAGE)

  for (let i = 1; i <= quantityPages; i++) {
    arrayPages.push(i)
  }

  const startCut = currentPage * RESIDENTS_PER_PAGE - RESIDENTS_PER_PAGE
  const endCut = currentPage * RESIDENTS_PER_PAGE

  const residents = location?.residents

  useEffect(() => {
    setCurrentPage(1)
  }, [location])


  return (
    <>
      <section className='py-4 px-6 grid gap-8 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-w-[1250px] mx-auto justify-center items-center'>

        {
          residents?.slice(startCut, endCut).map((resident) => (
            <ResidentCard key={resident} resident={resident} />
          ))}
      </section>
      <ul className='flex gap-4 justify-center py-4 text-white'>
        {
          arrayPages.map(page => <li onClick={() => setCurrentPage(page)} className={`p-3 rounded-md ${page === currentPage && "bg-green-700 text-white font-bold"}`} key={page}>{page}</li>)
        }
      </ul>

      {location?.residents.length > 1 ?
        <img className='absolute opacity-60 right-0 top-[380px] w-[200px] sm:top-[400px] lg:top-[760px]' src="/images/ellipse2.png" alt="" /> : <br />
      }

      {location?.residents.length > 8 ?
          <img className='absolute top-[900px] w-[560px] opacity-40' src="/images/ellipse3.png" alt="" /> : <br />
      }

      {location?.residents.length > 15 ?
        <img className='absolute opacity-60 right-0 top-[2200px] w-[250px] lg:top-[1900px]' src="/images/ellipse2.png" alt="" /> : <br />
      }

    </>
  )
}

export default ResidentList