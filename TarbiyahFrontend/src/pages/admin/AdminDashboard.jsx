import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import { Search, MoreVertical } from "lucide-react";
import { Card, CardContent } from "../public/Card";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import mehedi from '../../assets/images/mehedi.png'
import profile from '../../assets/images/profile.png'
import bg from '../../assets/images/bg.png'

const earningsData = [
  { day: "01", received: 20000, pending: 10000 },
  { day: "05", received: 78000, pending: 30000 },
  { day: "10", received: 50000, pending: 42000 },
  { day: "15", received: 67000, pending: 12000 },
  { day: "20", received: 87000, pending: 20000 },
  { day: "25", received: 92000, pending: 28000 },
];

const attendanceData = [
  { day: "Mon", present: 90, absent: 10 },
  { day: "Tue", present: 95, absent: 5 },
  { day: "Wed", present: 80, absent: 20 },
  { day: "Thu", present: 85, absent: 15 },
  { day: "Fri", present: 88, absent: 12 },
];

const studentPieData = [
  { name: "Boys", value: 205 },
  { name: "Girls", value: 170 },
];

const COLORS = ["#6d28d9", "#f59e0b"];
const AdminDashboard = () => {
  const {user,logout,teachers,totalStudent,totalTeacher}=useAuth();
  const navigate=useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
console.log("From admin dashboard",teachers)
  return (
   <div className="space-y-6">
      
   
      {/* Main content */}

        <div className="flex justify-between items-center ">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <input className="w-72" placeholder="Search" />
          </div>
        </div>

        {/* Overview cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-blue-50">
            <CardContent className="p-4">
              <div className="text-2xl font-medium text-gray-500">Total Students</div>
              <div className="text-2xl font-bold">{totalStudent}</div>
            </CardContent>
          </Card>
          <Card className="bg-purple-50">
            <CardContent className="p-4">
              <div className="text-2xl font-medium text-gray-500">Total Teachers</div>
              <div className="text-2xl font-bold">{totalTeacher}</div>
            </CardContent>
          </Card>
          <Card className="bg-orange-50">
            <CardContent className="p-4">
              <div className="text-2xl font-medium text-gray-500">Employees</div>
              <div className="text-2xl font-bold">508</div>
            </CardContent>
          </Card>
          <Card className="bg-green-50">
            <CardContent className="p-4">
              <div className="text-2xl font-medium text-gray-500">Total Revenue</div>
              <div className="text-2xl font-bold">$2,32,468</div>
            </CardContent>
          </Card>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Students Pie Chart */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Students</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={studentPieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {studentPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center text-xl font-bold mt-2">375</div>
            </CardContent>
          </Card>

          {/* Teacher List */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Teacher List</h3>
                <Search size={18} className="text-gray-400" />
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500 text-left">
                    <th>Name</th>
                    <th>Class</th>
                    <th>Subject</th>
                    <th>Email</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                 {teachers.map((teacher) => (
                  <tr key={teacher.id} className="border-t">
                    <td>Name</td>
                    <td>Class</td>
                    <td>Subject</td>
                    <td>{teacher?.email}</td>
                    <td>
                      <MoreVertical size={16} />
                    </td>
                  </tr>
                  ))}
 
                 
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        {/* Earnings and Attendance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Earnings</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={earningsData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="received" stroke="#6d28d9" strokeWidth={2} />
                  <Line type="monotone" dataKey="pending" stroke="#f59e0b" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Attendance Percentage</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={attendanceData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="present" fill="#6d28d9" />
                  <Bar dataKey="absent" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
   </div>
  )
}

export default AdminDashboard