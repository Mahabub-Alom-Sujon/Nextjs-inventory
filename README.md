# 📦 Next.js Inventory Management System

A modern and responsive Inventory Management Web Application built with **Next.js**, **Prisma ORM**, **MongoDB**, and **Bootstrap**. The application enables businesses to efficiently manage products, categories, inventory, and users through a secure authentication system and an intuitive admin dashboard.

## 🌐 Live Demo

🔗 https://prisma-inventory.vercel.app

## 💻 GitHub Repository

🔗 https://github.com/Mahabub-Alom-Sujon/Nextjs-inventory

# 🚀 Project Overview

The Inventory Management System is a full-stack web application designed to simplify inventory operations. It provides a secure authentication system, a powerful admin dashboard, product and category management, inventory, and a responsive interface for seamless user experience.

# 🛠 Tech Stack

## Frontend

- Next.js
- React.js
- react-dom
- Bootstrap 5

## Backend

- Next.js API Routes
- Prisma ORM

## Database

- MongoDB

## Authentication

- NextAuth.js / JWT Authentication

## Deployment

- Vercel

  # ✨ Features

- 🔐 Secure User Authentication
- 👤 Role-Based Authorization
- 📊 Admin Dashboard
- 👥 Customer Management
- 🏢 Supplier Management
- 🏷️ Brand Management
- 🗂️ Category Management
- 📦 Product Management
- 🛒 Purchase Management
- 💰 Sales Management
- 🔄 Sales Return Management
- 📦 Purchase Return Management
- 💸 Expense Management
- 📝 Expense Type Management
- 📊 Reports & Analytics
- 📈 Sales Reports
- 📦 Purchase Reports
- 💰 Expense Reports
- 📋 Stock Reports
- 🔍 Advanced Search & Filtering
- ✏️ Create, Update & Delete Records (CRUD)
- 📱 Fully Responsive Design
- ⚡ Fast Performance with Next.js
- 🛡️ Protected Routes
- 💾 PostgreSQL Database Integration
- 🔄 Real-Time Inventory Updates
- 🔔 Success & Error Notifications
- 📄 Pagination for Large Datasets
- 🚀 Optimized Performance
- ☁️ Vercel Deployment

# 📦 Dependencies

## Core Framework

```bash
next
react
react-dom
```

## Database & ORM

```bash
prisma
@prisma/client
```

## Authentication & Security

```bash
jose
js-cookie
bcryptjs
jsonwebtoken
```

## UI & Styling

```bash
bootstrap
react-bootstrap
react-icons
react-hot-toast
react-loading-skeleton
sweetalert2
```

## Forms & Validation

```bash
react-hook-form
zod
```

## Data Fetching

```bash
axios
swr
```

## Charts & Reports

```bash
recharts
d3-color
export-from-json
```

## Utilities

```bash
moment
nodemailer
react-number-format
react-paginate
react-code-input
```

# ⚙️ Installation Guide

## Clone Repository

```bash
git clone https://github.com/Mahabub-Alom-Sujon/Nextjs-inventory.git
```

## Navigate to Project

```bash
cd Nextjs-inventory
```

## Install Dependencies

```bash
npm install
```

## Setup Environment Variables

Create a `.env` file.

```env
SMTP_USERNAME=
SMTP_PASSWOED=
JWT_SECRET=
JWT_ISSUER=
JWT_EXPIRATION_TIME=
DATABASE_URL=
HOST=
```

## Generate Prisma Client

```bash
npx prisma generate
```

## Run Database Migration

```bash
npx prisma migrate dev
```

## Start Development Server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

# 📂 Project Structure

```text
Nextjs-inventory/
├── prisma/
│   └── schema.prisma
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── BrandCreateUpdate/
│   │   ├── BrandList/
│   │   ├── CategoryCreateUpdate/
│   │   ├── CategoryList/
│   │   ├── CustomerCreateUpdate/
│   │   ├── CustomerList/
│   │   ├── Dashboard/
│   │   ├── ExpenseCreateUpdate/
│   │   ├── ExpenseList/
│   │   ├── ExpenseReport/
│   │   ├── ExpenseTypeCreateUpdate/
│   │   ├── ExpenseTypeList/
│   │   ├── ProductCreateUpdate/
│   │   ├── ProductList/
│   │   ├── Profile/
│   │   ├── PurchaseCreate/
│   │   ├── PurchaseList/
│   │   ├── PurchaseReport/
│   │   ├── ReturnCreate/
│   │   ├── ReturnList/
│   │   ├── ReturnReport/
│   │   ├── SaleCreate/
│   │   ├── SaleReport/
│   │   ├── SalesList/
│   │   ├── SupplierCreateUpdate/
│   │   ├── SupplierList/
│   │   │
│   │   ├── api/
│   │   │   ├── dashboard/
│   │   │   │   ├── brands/
│   │   │   │   ├── categories/
│   │   │   │   ├── customers/
│   │   │   │   ├── expense_types/
│   │   │   │   ├── expenses/
│   │   │   │   ├── product/
│   │   │   │   ├── profile/
│   │   │   │   ├── purchases/
│   │   │   │   ├── report/
│   │   │   │   ├── returns/
│   │   │   │   ├── sales/
│   │   │   │   ├── summary/
│   │   │   │   └── suppliers/
│   │   │   │
│   │   │   └── user/
│   │   │       ├── (recover)/
│   │   │       ├── login/
│   │   │       ├── otp/
│   │   │       └── registration/
│   │   │
│   │   ├── user/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── loading.js
│   │   └── page.js
│   │
│   ├── assets/
│   │   └── css/
│   │       ├── dropdownmenu.css
│   │       ├── progress.css
│   │       └── sidebar.css
│   │
│   ├── components/
│   │   ├── brand/
│   │   ├── category/
│   │   ├── customer/
│   │   ├── dashboard/
│   │   ├── expense/
│   │   ├── expensetype/
│   │   ├── master/
│   │   ├── product/
│   │   ├── purchase/
│   │   ├── report/
│   │   ├── return/
│   │   ├── sale/
│   │   ├── supplier/
│   │   └── users/
│   │
│   └── utility/
|       ├── DeleteAlert.js
│       ├── EmailUtility.js
│       ├── Fetcher.js
│       ├── FormHelper.js
│       ├── JWTTokenHelper.js
│       └── SessionHelper.js
│
├── middleware.js
├── .env
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

# 🔗 Relevant Links

### 🌍 Live Website

https://prisma-inventory.vercel.app

### 💻 GitHub Repository

https://github.com/Mahabub-Alom-Sujon/Nextjs-inventory

---

# 👨‍💻 Developer

**Mahabub Alom Sujon**
