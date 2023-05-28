import axios from 'axios'
const baseUrl = 'http://localhost:3001/journals'


//get all (Index)
export function getJournals() {
    const getUrl = baseUrl
    const response = axios.get(getUrl)
      return response
}
  
