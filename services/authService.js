import axiosInstance from "../src/API/axiosInstance";

export const login = async (username, password) => {
  try {
    const response = await axiosInstance.post('auth/login/', { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Đăng nhập thất bại');
  }
};
