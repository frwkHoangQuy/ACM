import axiosInstance from "./axiosInstance"

export const getNotifications = () => {
  return axiosInstance.get('notifications/')
}