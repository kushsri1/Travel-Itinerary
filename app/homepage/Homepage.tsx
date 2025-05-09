import React from 'react'
import IntroSection from './InroSection'
import UpcomingTrip from './UpcomingTrip'
import FlightDetails from './FlightDetails'
import Accomodation from './Accomodation'
import LastSection from './LastSection'

const Homepage = () => {
  return (
    <div>
      <IntroSection />
      <UpcomingTrip />
      <FlightDetails />
      <Accomodation />
      <LastSection />
    </div>
  )
}

export default Homepage
