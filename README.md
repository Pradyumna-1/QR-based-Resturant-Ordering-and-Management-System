# QR-based-Resturant-Ordering-and-Management-System

SmartDine is a production-style MERN stack application that enables restaurants to manage table-based ordering through QR codes, real-time inventory updates, kitchen dashboards, and secure payment workflows.

The system is designed to simulate a real-world POS platform with Admin and Chef roles, atomic inventory handling, and scalable backend architecture.

---

## 🚀 Features

### 👤 Customer (QR User)
- Scan QR code to open menu for a specific table
- Browse categorized menu
- Veg / Non-Veg filtering
- Live availability updates
- Enter name & unique mobile number
- Pay before order confirmation
- View order status & bill

---

### 🧑‍💼 Admin Dashboard
- Generate QR codes per table
- Manage categories & dishes
- Control pricing & inventory
- Enable / disable items
- View all orders
- Analytics dashboard (planned)

---

### 👨‍🍳 Chef Dashboard
- Live kitchen queue
- Update cooking status
- Mark dishes as ready

---

### ⚡ System Features
- Role-based access control (ADMIN / CHEF)
- Secure authentication with JWT
- Atomic inventory updates
- Payment verification via backend (planned)
- WebSockets for real-time events (planned)
- Auto-cancel unpaid orders (planned)

---

## 🧱 Tech Stack

| Layer | Technology |
|------|-----------|
Frontend | React (planned), Tailwind CSS |
Backend | Node.js, Express |
Database | MongoDB + Mongoose |
Auth | JWT + bcrypt |
Realtime | Socket.IO |
Payments | Razorpay / Stripe (planned) |
QR Codes | qrcode |
Deployment | Docker (planned) |

---
## 📁 Project Structure

```
smartdine-server/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Table.js
│   │   ├── Category.js
│   │   └── Dish.js
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   └── sockets/
├── .env
├── package.json
└── README.md

```
---

## ⚙️ Getting Started

### ✅ Prerequisites
- Node.js v18+
- MongoDB
- npm

---

### 📥 Clone the Repository

```bash
git clone https://github.com/yourusername/smartdine.git
cd smartdine-server

📦 Install Dependencies
npm install

🔐 Environment Variables

Create a .env file:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/smartdine
JWT_SECRET=supersecret
CLIENT_URL=http://localhost:5173

▶ Run the Server
npm run dev


Server runs at:

http://localhost:5000
