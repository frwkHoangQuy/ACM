import axiosInstance from "../API/axiosInstance";

export const getFormById = (id) => {
  return axiosInstance.post(`forms/${id}/`)
}

export const getFormType = () => {
  return axiosInstance.get('forms/types/')
}

export const createForm = (data) => {
  return axiosInstance.post('forms/create/', data)
}