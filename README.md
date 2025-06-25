# 🧑‍💻 Freelance Task Marketplace — Client

This is the **client-side** of the Freelance Task Marketplace — a MERN stack platform where users can post freelance tasks, browse jobs, and bid based on skills, budget, and deadlines.

🔗 **Live Site**: [https://freelance-task-8f223.web.app/](https://freelance-task-8f223.web.app/)

---

## 🚀 Key Features

- 🔐 Firebase authentication (Email/Password + Google Login)
- 🧾 Task creation, update, delete, and browsing
- 🧭 Protected routes (Add Task, My Tasks, Task Details, etc.)
- 📆 Featured tasks sorted by deadline (recent deadlines first)
- 🌙 Dark/Light mode toggle
- 🎉 SweetAlert2 for alerts & React Awesome Reveal for animations
- 📱 Responsive layout for mobile, tablet, and desktop
- 🔄 Loading spinner during async operations
- ❌ Custom 404 Page for unknown routes

---

## 🔧 Technologies Used

- **React** (Vite)
- **React Router DOM**
- **Tailwind CSS**
- **Firebase Authentication**
- **Axios**
- **SweetAlert2**
- **React Awesome Reveal**

---

### 🧑‍💻 Local Setup Instructions

Follow these steps to run the client project locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/SazidSifat/Lancr-freelanching-website-client.git
cd Lancr-freelanching-website-client
```

### 2. Install dependencies
```bash
npm install
```
### 3. Create a .env file in the root directory and add the following:
```bash
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_id
VITE_appId=your_app_id
```

### 4. Start the development server
```bash
npm run dev
```
