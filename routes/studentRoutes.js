const express = require("express");
const Student = require("../models/student");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

// Admin adds a student
router.post("/add", protect(["admin"]), async (req, res) => {
    const { name, parent } = req.body;
    const student = new Student({ name, parent });
    await student.save();
    res.status(201).json(student);
});

// Staff updates student progress
router.put("/update/:id", protect(["admin", "staff"]), async (req, res) => {
    const { progress } = req.body;
    const student = await Student.findByIdAndUpdate(req.params.id, { progress }, { new: true });
    res.json(student);
});

// Parent views their child's progress
router.get("/progress", protect(["parent"]), async (req, res) => {
    const students = await Student.find({ parent: req.user.id });
    res.json(students);
});

module.exports = router;
