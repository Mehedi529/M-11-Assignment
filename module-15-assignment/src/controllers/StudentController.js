const express = require('express');

// Create a new student
app.post('/api/students', async (req, res) => {
    try {
      const student = new Student(req.body);
      await student.save();
      res.status(201).send(student);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Read all students
  app.get('/api/students', async (req, res) => {
    try {
      const students = await Student.find();
      res.send(students);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Update a student by ID
  app.patch('/api/students/:id', async (req, res) => {
    try {
      const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.send(student);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Delete a student by ID
  app.delete('/api/students/:id', async (req, res) => {
    try {
      const student = await Student.findByIdAndDelete(req.params.id);
      res.send(student);
    } catch (error) {
      res.status(500).send(error);
    }
  });