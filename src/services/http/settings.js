import axiosInstance from '../axios';

export const fetchSettings = async () => {
  const token = localStorage.getItem('token');
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return (await axiosInstance.get('/admin/settings')).data;
};
export const updateSettings = async (settings) => (await axiosInstance.patch('/admin/settings', settings)).data;
