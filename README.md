# Sweetory

> A full-stack Sweet Shop Management System for authentic Indian sweets

## Overview

Sweetory is a comprehensive e-commerce platform designed specifically for managing and selling authentic Indian sweets. Built with modern web technologies and following Test-Driven Development (TDD) principles, it provides a seamless experience for both customers and administrators.

### Key Features

- **Secure Authentication** - JWT-based user registration and login
- **Sweet Management** - Browse, search, and filter sweets by category and price
- **Shopping Cart** - Intuitive cart management and checkout flow
- **Inventory Control** - Real-time stock updates and restock functionality
- **Admin Dashboard** - Full CRUD operations for sweet management
- **Responsive Design** - Optimized for all device sizes
- **Test Coverage** - Comprehensive unit and integration tests

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data persistence
- **JWT** - Secure token-based authentication
- **Jest & Supertest** - Testing framework

### Frontend
- **React** - UI library for building interactive interfaces
- **Axios** - HTTP client for API requests
- **CSS3** - Modern styling with custom components

## Project Structure

```
sweetory/
│
├── backend/
│   ├── src/
│   │   ├── controllers/       # Business logic handlers
│   │   ├── routes/             # API route definitions
│   │   ├── models/             # MongoDB schemas
│   │   ├── middleware/         # Authentication & validation
│   │   └── tests/              # Test suites
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Page-level components
│   │   ├── services/           # API service layer
│   │   └── styles/             # CSS modules
│   ├── package.json
│   └── main.jsx
│
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/sweetory.git
   cd sweetory
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   Start the backend server:
   ```bash
   npm run dev
   ```
   Server runs at: `http://localhost:5000`

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Application runs at: `http://localhost:5173`

## API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | User login | No |

### Sweet Management Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/sweets` | Get all sweets | Yes |
| POST | `/api/sweets` | Add new sweet | Admin |
| PUT | `/api/sweets/:id` | Update sweet | Admin |
| DELETE | `/api/sweets/:id` | Delete sweet | Admin |

### Inventory Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/sweets/:id/purchase` | Purchase sweet | Yes |
| POST | `/api/sweets/:id/restock` | Restock sweet | Admin |

## Testing

The project follows Test-Driven Development (TDD) practices with comprehensive test coverage.

**Run tests:**
```bash
cd backend
npm test
```

### Test Coverage

| Module | Status |
|--------|--------|
| Authentication API | Passed |
| Sweet CRUD Operations | Passed |
| Inventory Management | Passed |
| Validation & Error Handling | Passed |

## AI Usage Disclosure

AI tools were used responsibly and selectively during development to accelerate certain tasks while maintaining full ownership of the codebase.

**Tools Used:**
- ChatGPT for debugging assistance
- IDE-level AI suggestions for code completion

**AI-Assisted Tasks:**
- Backend endpoint structure planning
- Frontend-backend integration debugging
- JWT authentication flow clarification
- API response pattern review

**Manually Implemented:**
- Application architecture and design decisions
- All business logic implementation
- Database schema design
- Frontend UI structure and styling
- Test case design and validation logic

> **Note:** All core logic, architectural decisions, and implementation were completed manually. AI tools served as a productivity enhancement rather than a replacement for understanding and skill.

## Screenshots

*Kindly refer to the screenshots in the document attached*

- Login and Registration
- Homepage with Categories
- Product Listings
- Shopping Cart
- Admin Dashboard

## Key Learnings

- Implementing secure JWT-based authentication patterns
- Applying Test-Driven Development in real-world applications
- Building scalable RESTful API architectures
- Managing complex state in React applications
- Integrating frontend and backend seamlessly
- Writing maintainable and testable code

## Future Enhancements

- [ ] Role-based admin dashboard with analytics
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Order history and tracking system
- [ ] Email notifications for orders
- [ ] Advanced search with filters
- [ ] Product reviews and ratings
- [ ] Wishlist functionality


## Author

**Diya Kanwar**
- GitHub: [@DiyaKanwar](https://github.com/DiyaKanwar)

