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
import ViewAllSectors from '../components/Home Components/ViewAllSectors'


const HomePage = () => {
  const [selectedId, setSelectedId] = useState('retail');

  return (
    <>
      <Navbar />
      <Bannersection />
      <SectionFirst />

      <div className="block max-md:hidden p-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12 p-2">
            <SectorWheel selectedId={selectedId} onSelect={setSelectedId} />
          </div>

          <div className="w-full md:w-8/12 p-2">
            <SectorDetails selectedId={selectedId} />
          </div>
        </div>
      </div>

      <ViewAllSectors/>


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