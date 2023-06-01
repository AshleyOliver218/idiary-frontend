import { getJournals } from '../services/journals-api'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Journals() {
  const navigate = useNavigate()
  const [journals, setJournals] = useState([])
  useEffect(() => {
    getJournals()
  .then(res => setJournals(res.data))
  }, [])
  console.log(journals)
    
  return (
  <aside>
    <h4>Previous iDiary Entries</h4>
    <ul>
      {journals.map((journal, i) => {
        return(
          <li className='section-heading'>
            <Link to={`/${journal._id}`}>{journal.title}</Link>
            <p>{journal.date}</p>
          </li>
        )

      })}
    </ul>
  </aside>
  )
}
