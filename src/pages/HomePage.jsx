import React from 'react'
import { useParams } from 'react-router-dom'
import Journals from '../components/Journals'


export default function HomePage() {
    
  return (
    <div className='HomePage-display'>
      <div className='HomePage'>
        <h1>HomePage</h1>
        <p>Welcome to a place where you can electronically express all of you thoughts, hopes, dreams, and goals</p>
        <button href='/journals/:id' >new journal entry</button>
      </div> 
      <aside>
        <Journals/> 
      </aside>
    </div>
  )
}
