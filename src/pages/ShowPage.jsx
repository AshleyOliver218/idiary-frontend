import React from 'react'
import Journals from '../components/Journals'
import SingleJournal from '../components/SingleJournal'

export default function ShowPage() {
  return (
    <div className='ShowPage'>
        <SingleJournal/>
        <Journals/>
    </div>
  )
}
