# 🛒 Full-Stack eCommerce Web App

An elegant and responsive eCommerce platform built using **React.js** with **shadcn/ui** components and **Node.js/Express** as the backend API. This project demonstrates best practices in frontend and backend architecture with modern tooling, user authentication, admin controls, and full CRUD functionality.

---

## ✨ Features

### ✅ Frontend (React + shadcn/ui)
- Beautiful UI powered by [shadcn/ui](https://ui.shadcn.com/)
- Product listing, filtering, and details view
- Add to cart functionality
- Admin panel to add, update, or delete products
- Responsive design (mobile & desktop friendly)
- Toast notifications and loading states
- Client-side routing using **react-router-dom**
- Protected routes (admin vs user)

### ✅ Backend (Node.js + Express + MongoDB)
- RESTful API for managing products and users
- Secure authentication with JWT
- Role-based access (Admin & User)
- CRUD operations for products
- Image URLs for product display
- Error handling with meaningful responses
- MongoDB integration via Mongoose

---

## 📂 Folder Structure

├── client/ # React frontend │ ├── src/ │ │ ├── components/ │ │ ├── pages/ │ │ ├── routes/ │ │ └── App.jsx ├── server/ # Node.js backend │ ├── controllers/ │ ├── models/ │ ├── routes/ │ ├── middleware/ │ └── index.js └── README.md




---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ecommerce-project.git
cd ecommerce-project






2. Backend Setup (Node.js)


cd server
npm install
npm run dev



Create a .env file in the server/ folder and configure:

ini
Copy
Edit




PORT=5555
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret





3. Frontend Setup (React)
bash
Copy
Edit



cd client
npm install
npm run dev





🔐 Authentication
User Roles:

Admin: Can create, update, and delete products

User: Can view and purchase products

JWT tokens are stored securely and passed in headers for protected routes.

🧑‍💻 Tech Stack
Frontend: React.js, TailwindCSS, shadcn/ui, react-router-dom

Backend: Node.js, Express.js, MongoDB, Mongoose

Auth: JSON Web Tokens (JWT)

UI/UX: Fully responsive with modern design

📸 Screenshots
You can add screenshots here of the product list, product detail, admin panel, etc.

📌 TODO / Future Improvements
Cart and checkout functionality

User profile and order history

Stripe payment integration

Product ratings & reviews

Dashboard analytics for admin

🤝 Contributing
Contributions are welcome! Feel free to open issues or submit a pull request.
