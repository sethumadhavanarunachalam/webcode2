import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
function BookingHome({match }) {
  return (
    <DefaultLayout>
    <h1>BookingHome</h1>
    <h1>car id={match.params.carid}</h1>
   </DefaultLayout>
  )
}

export default BookingHome