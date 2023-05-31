import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Journals from '../components/Journals'

export default function HomePage() {
    const navigate = useNavigate()
    return (
        <div className='HomePage-display'>
            <div className='img-title'>
                <div className='img-display'>

                    <img src='https://i.ibb.co/CPXd37m/diary-logo.png' width='200vmin' height='200vmin' />
                    
                </div>
                <h1>iDiary</h1>
            </div>

            <div className='home-journals'>
                <div className='HomePage'>

                    <p>Welcome to a place where you can electronically express all of you thoughts, hopes, dreams, and goals! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repudiandae ducimus quae voluptatem sequi tempora voluptates laudantium veritatis laboriosam? Distinctio commodi aperiam fuga illo quas sequi ipsum accusantium. Laboriosam, similique!</p>
                    <button onClick={() => { navigate('/new') }}>New Journal Entry</button>
                </div>

                <Journals />
            </div>
        </div>
    )
}
