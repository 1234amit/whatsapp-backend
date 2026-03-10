# WhatsApp Backend API 🚀

A Node.js backend service that integrates with **WhatsApp Web** to send messages using a REST API.
This project uses **Express.js, Socket.IO, and whatsapp-web.js** to automate WhatsApp messaging.

---

## 📌 Features

* Send WhatsApp messages via REST API
* QR code authentication
* Persistent session using LocalAuth
* Real-time QR updates with Socket.IO
* Environment variable support using dotenv
* Auto restart with Nodemon

---

## 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **WhatsApp-Web.js**
* **Socket.IO**
* **dotenv**
* **nodemon**

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/1234amit/whatsapp-backend.git
```

### 2️⃣ Navigate to project folder

```
cd whatsapp-backend
```

### 3️⃣ Install dependencies

```
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory.

Example:

```
PORT=3000
```

---

## ▶️ Run the Server

Development mode:

```
npm run dev
```

Production mode:
```
npm start
---

## 🔒 .gitignore

Make sure the following files are ignored:

```
node_modules
.env
.wwebjs_auth
.wwebjs_cache
```

---

## 📸 Example Output

```
Initializing WhatsApp client...
Server running on port 3000
QR RECEIVED - Scan with WhatsApp
WhatsApp authenticated!
WhatsApp client ready!
```

## 👨‍💻 Author

**Amit Kumar Goswami**
---

