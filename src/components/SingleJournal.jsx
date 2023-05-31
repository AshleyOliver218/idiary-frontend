import React from 'react'
import { useState, useEffect } from 'react'
import { getJournal } from '../services/journals-api'
import { useParams, useNavigate } from 'react-router-dom'

export default function SingleJournal() {
    const[ journal, setJournal ] = useState({})
    const {id} = useParams()
    const navigate = useNavigate() 

    useEffect(() => {
      getJournal(id)
    .then(res => setJournal(res.data))
    }, [])
   
  return (
    <div>
        <h1>iDiary Entry</h1>
        <p className='section-heading'><h3>Title:</h3> {journal.title} <h3>Date:</h3> {journal.date}</p>
        <p>{journal.entry}</p>
        <aside>
          {journal.goal1} Done: {journal.goal1IsCompleted ? <p>'Yes'</p> : <p>'No'</p>}
          {journal.goal2} Done: {journal.goal2IsCompleted ? <p>'Yes'</p> : <p>'No'</p>}
          {journal.goal3} Done: {journal.goal3IsCompleted ? <p>'Yes'</p> : <p>'No'</p>}
        </aside>
        <button onClick={() => {navigate(`/${id}/edit`)}}>Edit</button>
        <button onClick={() => {navigate('/')}}>Home</button>
    </div>
  )
}
