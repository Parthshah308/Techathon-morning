import axios from 'axios'

const baseURL = "https://tackcode.herokuapp.com/api/"

const publicFetch = axios.create({
  baseURL
})

export { publicFetch, baseURL }
