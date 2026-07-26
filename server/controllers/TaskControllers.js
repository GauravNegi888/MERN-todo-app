import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  try {
    const { title, des, completed } = req.body;

    const newTask = await Task.create({
      title,
      des,
      completed,
    });

    res.status(201).json({
      success: true,
      message: "Task Created Successfully",
      newTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Create Task",
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task updated successfully.",
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update the task.",
      error: error.message,
    });
  }
};

export const getTasks = async (req, res) => {
  try {
    const allTasks = await Task.find();
    res.status(200).json({
      success: true,
      message: "Task Imported Successfully",
      allTasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed To Import Task",
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task Not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Delete Task",
    });
  }
};
