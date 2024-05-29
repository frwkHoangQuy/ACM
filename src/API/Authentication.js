import axiosInstance from "./axiosInstance"
export const AuthLogin = (username, password) => {
  return axiosInstance.post('auth/login/', { username, password })
}

export const AuthRegister  = (username, password, employee_id) => {
  return axiosInstance.post('auth/register/', {username, password, employee_id})
}

export const AuthVerify = () => {
  return axiosInstance.post('auth/verify-token/')
}