import React from 'react'
import { createJournal } from '../services/journals-api'
import { useNavigate, useParams } from 'react-router-dom'

export default function NewJournal() {
  const navigate = useNavigate()
  const { id } = useParams()
  function createAJournal(evt){
    evt.preventDefault()
    const evtVal = evt.target
    const aJournal = {title: evt.target.title.value, date: evt.target.date.value, entry: evt.target.entry.value, goal1: evt.target.goal1.value, goal2: evt.target.goal2.value, goal3: evt.target.goal3.value, goal1IsCompleted: false, goal2IsCompleted: false, goal3IsCompleted: false}
    createJournal(aJournal).then(() => navigate('/'))
  }
  return (
    <div>
      <h1>New Diary Entry</h1>
      <form onSubmit={createAJournal}>
        <input type='text' name='title' placeholder='Title' />
        <input type='text' name='date' placeholder='Date'/>
        <textarea type='text' name='entry' placeholder='Entry' size='40'/>
        <input type='text' name='goal1' placeholder='Goal 1'/>
        <label>Is Goal 1 Complete?</label>
        <input type='checkbox' name='goal1IsCompleted'/>
        <input type='text' name='goal2' placeholder='Goal 2'/>
        <label>Is Goal 2 Complete?</label>
        <input type='checkbox' name='goal2IsCompleted'/>
        <input type='text' name='goal3' placeholder='Goal 3'/>
        <label>Is Goal 3 Complete?</label>        
        <input type='checkbox' name='goal3IsCompleted'/>
        <button type='submit'>Save Diary Entry</button>
      </form>
      <button onClick={() => {navigate(`/${id}/edit`)}}>Edit</button>
      <button onClick={() => {navigate('/')}}>Home</button>
    </div>
  )
}
