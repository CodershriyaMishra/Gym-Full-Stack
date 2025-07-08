# 💪 GymVault – MERN Stack Gym Website
## 🔗 Live Demo

Check out the live project here:  
👉 [https://gym-full-stack.vercel.app](https://gym-full-stack.vercel.app)

**GymVault** is a fitness-focused web application built to modernize gym interactions. The project enables users to engage with dynamic content and directly contact the gym through a secure, email-integrated contact form.

This repository contains the backend of the project, built with **Node.js** and **Express.js**, and integrated with **Nodemailer** for automated email delivery via **Gmail SMTP**.


🚀 Features

- **RESTful API** to handle contact form submissions
- **Email notifications** sent to admin via Nodemailer + Gmail SMTP
- **Secure environment variables** using `dotenv`
- **Frontend whitelisting** using CORS
- **Structured error handling** and validation
- Modular utility for email functionality

---

## ⚙️ Technologies Used

- **Node.js**, **Express.js**
- **Nodemailer** (Gmail SMTP)
- **dotenv**, **CORS**
- **Postman** (for API testing)
- **Frontend:** React (hosted separately)

---

## 📁 Folder Structure

backend/
├── utils/
│ └── sendEmail.js # Nodemailer configuration
├── config.env # Environment variables (not pushed)
├── app.js # Main server setup
├── package.json # Dependencies and scripts

yaml
Copy
Edit
Create a `config.env` file in the `backend/` directory with the following content:

```env
PORT=4000
FRONTEND_URL=http://localhost:5173

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SERVICE=gmail
SMTP_MAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password
💡 Important: Use Gmail App Passwords (not your real password) and add config.env to .gitignore.

Use Postman or frontend to test the API:

POST http://localhost:4000/send/mail
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hello, I want to join your gym!"
}
📌 Status
✅ Backend API complete
🔄 Frontend integrated and styled with dynamic contact form
🔐 Secure email delivery implemented

🧠 Future Improvements
MongoDB integration for storing leads

Admin dashboard for viewing submissions

Auth-layer for admin operations

