import React from 'react'
import { useState, useEffect } from 'react'
import { getJournal } from '../services/journals-api'
import { useParams, useNavigate } from 'react-router-dom'

export default function SingleJournal() {
    const [journal, setJournal] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getJournal(id)
            .then(res => setJournal(res.data))
    }, [])

    return (
        <div className='SingleJournal-display'>
            <div className='img-title'>
                <div className='img-display'>

                    <img src='https://i.ibb.co/CPXd37m/diary-logo.png' width='200vmin' height='200vmin' />

                </div>
                <h1>iDiary Entry</h1>
            </div>
            <div className='single-journal'>
                <p className='section-heading'>
                    <h4>Title:  {journal.title}</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h4>Date:  {journal.date}</h4>
                </p>
                <h4>Mood: {journal.mood}</h4>
                <p className='entry'>{journal.entry}</p>
            </div>
            <aside>
                <h4>Todays Goals</h4>
               <p className='goals'>Goal: {journal.goal1}<br></br>  
               {journal.goal1IsCompleted ? <p><b>Complete:</b>Yes</p> : <p><b>Complete:</b>No</p>}</p>
               <p className='goals'>{journal.goal2}<br></br>  
               {journal.goal2IsCompleted ? <p><b>Complete:</b>Yes</p> : <p><b>Complete:</b>No</p>}</p>
               <p className='goals'>{journal.goal3}<br></br>  
               {journal.goal3IsCompleted ? <p><b>Complete:</b>Yes</p> : <p><b>Complete:</b>No</p>}</p>
                <button onClick={() => { navigate(`/${id}/edit`) }}>Edit</button>
                <button onClick={() => { navigate('/new') }}>New Journal Entry</button>
                <button onClick={() => { navigate('/') }}>Home</button>
            </aside>

        </div>
    )
}
