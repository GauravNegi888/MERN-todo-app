import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    des: { type: String, required: true, trim: true },
    completed: { type: Boolean, required: true, default: false },
    completedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  },
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
