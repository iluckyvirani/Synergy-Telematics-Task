import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Bannersection from '../components/Home Components/Bannersection'
import SectionFirst from '../components/Home Components/SectionFirst'
import ApplicationProcess from '../components/Home Components/ApplicationProcess'
import IndustrialSectors from '../components/Home Components/IndustrialSectors'
import Salientfeatures from '../components/Home Components/Salientfeatures'
import StatisticsSection from '../components/Home Components/StatisticsSection'
import Testimonial from '../components/Home Components/Testimonial'
import ImportantLinks from '../components/Home Components/Importantlink'
import Footer from '../components/Footer'
import SectorWheel from '../components/Home Components/SectorWheel'
import SectorDetails from '../components/Home Components/SectorDetails'


const HomePage = () => {
  const [selectedId, setSelectedId] = useState('retail');

  return (
    <>
      <Navbar />
      <Bannersection />
      <SectionFirst />

      <div className="flex flex-col lg:flex-row items-start p-6">
        <div className="w-full lg:w-[40%] flex justify-center">
          <SectorWheel selectedId={selectedId} onSelect={setSelectedId} />
        </div>

        <div className="w-full lg:w-[60%]">
          <SectorDetails selectedId={selectedId} />
        </div>
      </div>

      <ApplicationProcess />
      <IndustrialSectors />
      <Salientfeatures />
      <StatisticsSection />
      <Testimonial />
      <ImportantLinks />
      <Footer />
    </>

  )
}

export default HomePage