import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getJournal, editJournal, deleteJournal } from '../services/journals-api'


export default function UpdateJournal() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [journalData, setJournalData] = useState({})

useEffect(() => {
  getJournal(id)
.then(res => setJournalData(res.data))
}, [])

    function deleteAJournal() {
        deleteJournal(id) // delete function goes here
         navigate('/') // navigate back to the main screen
     }
    
    function editAJournal(evt) {
        evt.preventDefault()
        const updatedJournal = { title: evt.target.title.value, date: evt.target.date.value, entry: evt.target.entry.value, goal1: evt.target.goal1.value, goal2: evt.target.goal2.value, goal3: evt.target.goal3.value, goal1IsCompleted: evt.target.goal1IsCompleted.checked, goal2IsCompleted: evt.target.goal2IsCompleted.checked, goal3IsCompleted: evt.target.goal3IsCompleted.checked }
        console.log(updatedJournal)
        editJournal(updatedJournal, id)
        navigate(`/${id}`)
    }
  return (
    <div>
        <h1>Update Diary Entry</h1>
      <form onSubmit={editAJournal}>
        <input type='text' name='title' defaultValue={journalData.title}/>
        <input type='text' name='date' defaultValue={journalData.date}/>
        <textarea type='text' name='entry' defaultValue={journalData.entry}/>
        <input type='text' name='goal1' defaultValue={journalData.goal1}/>
        <label>Is Goal 1 Complete?</label>
        <input type='checkbox' name='goal1IsCompleted'defaultChecked={journalData.goal1IsCompleted}/>
        <input type='text' name='goal2' placeholder='Goal 2' defaultValue={journalData.goal2}/>
        <label>Is Goal 2 Complete?</label>
        <input type='checkbox' name='goal2IsCompleted' defaultChecked={journalData.goal2IsCompleted}/>
        <input type='text' name='goal3' defaultValue={journalData.goal3} />
        <label>Is Goal 3 Complete?</label>        
        <input type='checkbox' name='goal3IsCompleted' defaultChecked={journalData.goal3IsCompleted}/>
        <button className='large' type='submit'>Update Diary Entry</button>
        </form>
        
        <button onClick={deleteAJournal}>Delete</button>
    </div>
  )
}
