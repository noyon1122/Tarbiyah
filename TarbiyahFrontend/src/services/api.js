import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const api=axios.create({
    baseURL:'http://localhost:8080',
})

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log("JWT token:", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register=async(userData) => {
  const response=await api.post('/auth/register',userData)
  return response.data;

}

export const loginApi = async (loginData) => {
  const response = await api.post('/auth/login', loginData);

  const token = response.data.accessToken;
  if (!token || token.split('.').length !== 3) {
    throw new Error("Invalid token format from backend.");
  }

  return { token: token, user: response.data.user };
};

export const logout=async()=>{
  localStorage.removeItem('token');
  localStorage.removeItem('user')
}

export const getTeachers=async()=>{
  const response=await api.get('/api/users?role=TEACHER');
  return response.data;
}

export const getStudents=async()=>{
  const response=await api.get('/api/users?role=STUDENT');
  return response.data;
}

export const getPopularCourse= async()=>{
  const response=await api.get('/api/courses/popular')
  return response.data;

}

export const getAllCourse=async()=>{
  const response=await api.get('/api/courses');
  return response.data;
  
}

export const getCourseById=async(id)=>{
const response = await api.get(`/api/courses/${id}`);
  return response.data;
}


export default api;
