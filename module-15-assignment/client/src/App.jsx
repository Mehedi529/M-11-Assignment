// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    nationality: '',
    address: '',
    email: '',
    phone: '',
    admissionDate: '',
    courses: [],
  });

  useEffect(() => {
    // Fetch all students on component mount
    axios.get('/api/students').then((response) => setStudents(response.data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post new student data to the server
    axios.post('/api/students', formData).then((response) => {
      setStudents([...students, response.data]);
      setFormData({
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        nationality: '',
        address: '',
        email: '',
        phone: '',
        admissionDate: '',
        courses: [],
      });
    });
  };

  const handleDelete = (id) => {
    // Delete a student by ID
    axios.delete(`/api/students/${id}`).then(() => {
      setStudents(students.filter((student) => student._id !== id));
    });
  };

  return (
    <div>
      <h1>Student Admission System</h1>

      {/* Form for student registration */}
      <form onSubmit={handleSubmit}>
        {/* ... (input fields for student details) */}
        <button type="submit">Register</button>
      </form>

      {/* Table to display all students */}
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Nationality</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Admission Date</th>
            <th>Courses</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              {/* ... (display student details in each column) */}
              <td>
                <button onClick={() => handleDelete(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
