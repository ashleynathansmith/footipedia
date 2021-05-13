import axios from 'axios'

export function getAllTeams() {
  return axios.get('/api/teams')
}

export function getSingleTeam(id) {
  return axios.get(`/api/teams/${id}`)
}

export function createTeam(formdata) {
  return axios.post('/api/teams', formdata)
}

export function deleteTeam(id) {
  return axios.delete(`/api/teams/${id}`)
}

export function registerUser(formdata) {
  return axios.post('/api/register', formdata)
}

export function loginUser(formdata) {
  return axios.post('/api/login', formdata)
}
