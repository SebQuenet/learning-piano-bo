import axiosInstance from '../axios';

export const login = async (email, password) =>
  (await axiosInstance.post('/admin/auth/login', { email, password })).data;
export const checkEmail = async (email) => (await axiosInstance.post('/admin/auth/checkEmail', { email })).data;
export const reinitPassword = async (email) =>
  (await axiosInstance.post('/admin/auth/forgot-password', { email })).data;
export const changePasswordService = async ({ userId, newPassword }) =>
  (await axiosInstance.post('/admin/users/change-password', { userId, newPassword })).data;
export const getBySessionTokenService = async () => (await axiosInstance.get('/admin/my')).data;
