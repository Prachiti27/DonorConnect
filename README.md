# 🩸 DonorConnect

DonorConnect is a full-stack MERN (MongoDB, Express, React, Node.js) application that connects blood donors with recipients. It features a registration system, a searchable map powered by Leaflet, and email notifications using Nodemailer.

## 🚀 Tech Stack

- **Frontend:** React (Vite) + Tailwind CSS + Leaflet
- **Backend:** Node.js + Express
- **Database:** MongoDB (Mongoose)
- **Email Service:** Nodemailer

---

## 📁 Project Structure

donorConnect/
├── client/              # React frontend (running on port 5173)
│   ├── src/
│   ├── public/
│   └── ...
├── server/              # Express backend (running on port 4000)
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── ...
├── .env
├── README.md
└── package.json


## ⚙️ Setup Instructions

### 1. Clone the Repository

git clone https://github.com/yourusername/donorConnect.git

### 2. Setup Backend (Server)
cd server
npm install

#### Create `.env` file inside `/server`:
PORT=4000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password

Then start the server:

npm run server

Your backend should be running at: `http://localhost:4000`

---

### 3. Setup Frontend (Client)

cd ../client
npm install
npm run dev

Your frontend should be running at: `http://localhost:5173`

---

## 🗺️ Features

* 📝 Donor and Recipient Registration Forms
* 📍 Map integration using **Leaflet** to locate and display nearby donors
* 📬 Email Notifications using **Nodemailer**
* 🔒 Secure form validation and data handling
* 📊 User Dashboard

---

## 📧 Email Configuration

Emails are sent through [Nodemailer](https://nodemailer.com/) using your Gmail/SMTP credentials configured in the `.env` file. Make sure to enable **"Less Secure App Access"** or use **App Passwords** if using Gmail.

---

## 🗺️ Map Integration

We use **Leaflet** and **React Leaflet** for interactive map views of donors and hospitals. Coordinates are handled using standard geolocation or manually entered.

---

## 🧑‍💻 Contributors

* [Your Name](https://github.com/yourusername)

---

## 📄 License

This project is licensed under the MIT License.

