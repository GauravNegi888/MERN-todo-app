# 📝 TaskFlow - MERN Todo App

A full-stack task management application built with the **MERN Stack** that helps users organize daily tasks, track productivity, and visualize weekly progress.

## 🚀 Live Demo

**Frontend:** https://mern-todo-app-gamma-mauve.vercel.app/

**Backend API:** https://mern-todo-app-backend-ni4p.onrender.com/

---

## 📌 Features

* ✅ Create new tasks
* ✏️ Edit existing tasks
* 🗑️ Delete tasks
* ✔️ Mark tasks as completed
* 🔍 Filter tasks (All, Pending, Completed)
* 📊 Weekly Productivity Chart
* 📱 Responsive and clean UI
* 🔔 Toast notifications for user actions
* ⚡ Fast and smooth user experience

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Context API
* React Hot Toast
* Recharts
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📂 Project Structure

```
taskflow/
│
├── client/          # React Frontend
│
├── server/          # Express Backend
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/GauravNegi888/MERN-todo-app
```

### 2. Go into the project

```bash
cd taskflow
```

### 3. Install frontend dependencies

```bash
cd client
npm install
```

### 4. Install backend dependencies

```bash
cd ../server
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=8000
MONGO_URI=Your_MongoDB_Connection_String
```

---

## ▶️ Running the Project

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

---

## 📊 Weekly Productivity Chart

Whenever a task is marked as completed, the application stores the completion date and updates the productivity chart for the current week.

This provides a simple visual overview of your productivity throughout the week.

---

## 🎯 Future Improvements

* User Authentication (JWT)
* Multiple User Support
* Due Dates
* Task Categories
* Search & Sorting
* Dark Mode
* Drag & Drop Tasks
* Email Reminders

---


## 👨‍💻 Author

**Gaurav Singh Negi**

* GitHub: https://github.com/GauravNegi888

---

## ⭐ Support

If you like this project, consider giving it a **⭐ Star** on GitHub.
