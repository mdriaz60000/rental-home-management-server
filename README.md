

<div align="center">
  <h1>🏠 Rental Homes Management System</h1>
  <p>A modern web platform for managing rental properties, tenants, landlords, leases, and payments.</p>
  <p>
    <img src="https://img.shields.io/badge/Node.js-18.x-green?logo=node.js" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express.js-4.x-blue?logo=express" alt="Express.js" />
    <img src="https://img.shields.io/badge/Mongoose-7.x-brightgreen?logo=mongodb" alt="Mongoose" />
    <img src="https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License: MIT" />
  </p>
  <a href="https://rental-home-management-server.vercel.app/">🌐 Live Demo</a>
</div>

---

## 🚀 Features

- User authentication & role-based access (Admin, Landlord, Tenant)
- Rental property listing management
- Rental requests & approvals
- Profile management for tenants and landlords
- Admin moderation for users and listings
- RESTful API with clear endpoints

---

## 📚 API Endpoints

### 👤 Tenants
| Method | Endpoint                | Description                                 |
|--------|-------------------------|---------------------------------------------|
| POST   | /tenants/requests       | Create a new rental request for a house     |
| GET    | /tenants/requests       | Retrieve all rental requests by the tenant  |
| PUT    | /tenants/profile        | Update tenant profile                       |

### 🛡️ Admin
| Method | Endpoint                | Description                                 |
|--------|-------------------------|---------------------------------------------|
| GET    | /admin/users            | Retrieve all user (tenants, landlords)      |
| PUT    | /admin/users/:id        | Update user roles                           |
| DELETE | /admin/user/:id         | Delete user                                 |
| GET    | /admin/listings         | Retrieve all rental house listings          |
| PUT    | /admin/listings/:id     | Update or moderate a rental listing         |
| DELETE | /admin/listings/:id     | Remove a rental listing                     |

### 🏠 Landlords
| Method | Endpoint                    | Description                                 |
|--------|-----------------------------|---------------------------------------------|
| POST   | /landlords/listings         | Create a new rental house listing           |
| GET    | /landlords/listings         | Retrieve all listings by the landlord       |
| PUT    | /landlords/listings/:id     | Update a specific rental listing            |
| DELETE | /landlords/listings/:id     | Remove a rental listing                     |
| GET    | /landlords/requests         | Retrieve all rental requests for listings   |
| PUT    | /landlords/requests/:id     | Update rental request status                |

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **Mongoose** (MongoDB)
- **TypeScript**

## 📦 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build
```

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
NODE_ENV=development
```

Update the values as needed for your environment.

## 🌍 Demo

[Live Demo](https://rental-home-management-server.vercel.app/)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!<br>
Feel free to check the [issues page](https://github.com/mdriaz60000/rental-home-management-server/issues).

## 📄 License

This project is [MIT](LICENSE) licensed.

