import axiosInstance from "./axiosInstance"

export const getNotifications = () => {
  return axiosInstance.get('notifications/')
}

export const getNotificationsTypes = () => {
  return axiosInstance.get('notifications/types/')
}