const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: String,
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    progress: { type: String, default: "No updates yet" },
});

module.exports = mongoose.model("Student", StudentSchema);
