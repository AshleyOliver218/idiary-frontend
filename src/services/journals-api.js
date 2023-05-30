import axios from 'axios'
const baseUrl = 'http://localhost:3001/journals'


//get all journals (Index)
export async function getJournals() {
    const getUrl = baseUrl
    const response = await axios.get(getUrl)
      return response
}
//delete one journal (Delete)
export async function deleteJournal(id) {
  const getUrl = `${baseUrl}/${id}`
  const response = await axios.delete(getUrl)
  return response
}
//edit one journal (Edit)
export async function editJournal(updatedJournal, id) {
  console.log(updatedJournal)
  const getUrl = `${baseUrl}/${id}`
  const response = axios.put(getUrl, updatedJournal)
  return response
}

//generate new journal (Create)
export async function createJournal(journal) {
  const getUrl = baseUrl
  const response = await axios.post(getUrl, journal)
  return response
}
  
//get single journal (Show)
export async function getJournal(id) {
  const getUrl = `${baseUrl}/${id}`
  const response = await axios.get(getUrl)
  return response
}