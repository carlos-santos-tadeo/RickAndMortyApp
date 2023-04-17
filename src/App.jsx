import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './helpers/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'

function App() {

  //primero los estados, despues funciones y al final effectos
  const [location, setLocation] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.locationId.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))

  }


  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`

    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))

  }, [])


  return (
    <div className="App bg-[url(/images/bg1.jpg)] bg-no-repeat bg-cover min-h-screen">
      <form onSubmit={handleSubmit}>
        <div className='lg:h-[350px] sm:h-[260px] flex justify-center '>
          <img className='absolute' src="/images/Ellipse.png" alt="" />
          <img className='portal mx-0 w-[180px] sm:w-[350px] sm:top-[-140px] lg:w-[450px] lg:top-[-190px]' src="/images/portal.png" alt="" />
          <img className='absolute w-[150px] top-[20px] sm:w-[345px] sm:top-[60px] lg:w-[390px] animate-bounce' src="/images/title2.png" alt="" />
        </div>
        <div className='flex relative justify-center pt-[120px] sm:pt-[50px]'>
          <input className='border-[1px] border-green-500 bg-transparent text-white text-center font-bold sm:w-[300px] sm:h-[30px] lg:w-[450px] lg:h-[37px]' id='locationId' placeholder='Type a location Id...' type="text" />
          <button className='border-solid border-[1px] hover:animate-bounce border-green-500 bg-green-500/50'>
            <i className='bx bx-search w-10 text-white hover:animate-ping'></i>
          </button>
        </div>
        <h2 className='text-green-500 font-bold text text-center py-8 sm:text-[23px] lg:text-[30px]'>Wellcome to the crazy universe!</h2>
      </form>
      <Location location={location} />
      <ResidentList location={location} />

    </div>
  )
}

export default App
