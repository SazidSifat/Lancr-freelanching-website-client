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

### Dependencies
```json
{
     "dependencies": {
    "@emotion/react": "^11.14.0",
    "@tailwindcss/vite": "^4.1.7",
    "daisyui": "^5.0.35",
    "firebase": "^11.8.0",
    "framer-motion": "^12.12.1",
    "motion": "^12.12.1",
    "react": "^19.1.0",
    "react-awesome-reveal": "^4.3.1",
    "react-dom": "^19.1.0",
    "react-icons": "^5.5.0",
    "react-router": "^7.6.0",
    "react-simple-typewriter": "^5.0.1",
    "react-toastify": "^11.0.5",
    "sweetalert2": "^11.21.2",
    "swiper": "^11.2.7",
    "tailwindcss": "^4.1.7",
    "typewriter-effect": "^2.22.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.25.0",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    "eslint": "^9.25.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.5"
  }
}
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
