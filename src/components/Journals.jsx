import { getJournals } from '../services/journals-api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Journals() {
  const [journals, setJournals] = useState([])
  useEffect(() => {
    getJournals()
  .then(res => setJournals(res.data))
  }, [])
  console.log(journals)
    
  return (
    <ul>
      {journals.map((journal, i) => {
        return(
          <li>
            <Link to={`/${journal._id}`}>{journal.title}</Link>
            <p>{journal.date}</p>
          </li>
        )

      })}
    </ul>
  )
}
