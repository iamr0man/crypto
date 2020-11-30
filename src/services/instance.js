import axios from 'axios'

const instance = axios.create({})

const responseHandler = async (response) => {
  return response.data
}
const responseErrorHandler = async (error) => {
  if (error.response) {
    const errorText = error.response.data.errorText ? error.response.data.errorText : ''
    console.log(errorText)
  }
  return Promise.reject(error)
}

instance.interceptors.response.use(responseHandler, responseErrorHandler)

export default instance
