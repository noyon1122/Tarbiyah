import React, { createContext, useEffect, useState } from 'react';
import { getTeachers, getStudents } from '../services/api'; // make sure you have getStudents API function

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (token && token.split('.').length === 3 && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse stored user", e);
      }
    } else {
      console.log("No valid token or user found");
    }

    const fetchTeachers = async () => {
      try {
        const allTeacher = await getTeachers();
        setTeachers(allTeacher.userList || []);
      } catch (err) {
        console.error("Failed to fetch teachers", err);
        setTeachers([]);
      }
    };

    const fetchStudents = async () => {
      try {
        const allStudents = await getStudents();
        setStudents(allStudents.userList || []); // adjust based on your API response structure
      } catch (err) {
        console.error("Failed to fetch students", err);
        setStudents([]);
      }
    };

    fetchTeachers();
    fetchStudents();
  }, []);

  const login = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };
  const totalStudent=students.length;
  const totalTeacher=teachers.length;
 
  const authInfo = {
    user,
    setUser,
    login,
    logout,
    teachers,
    students,
    totalStudent,
    totalTeacher
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
