# User Management Dashboard

A React-based user management application with archive functionality and editing capabilities.

## 🚀 Live Demo

[Add your deployment link here]

## 🛠️ Tech Stack

- React 19 + TypeScript
- Zustand (state management)
- React Hook Form + Zod (forms & validation)
- TanStack Query (data fetching)
- React Router v7 (routing)

## 📦 Installation

```bash
git clone [https://github.com/just-too-it/at-work.git](https://github.com/just-too-it/at-work.git)
cd user-management-dashboard
npm install
npm run dev
```

## 📖 Features

### Main Page (`/`)

- Displays 6 users from JSONPlaceholder API
- Card actions: Edit, Archive, Hide
- Archive section with restore functionality

### Edit Page (`/:userId`)

- Edit user details with validation
- Success modal on save
- Form validation for all fields

### Validation

- Name, Username, City, Company: 2-64 chars
- Email: standard validation
- Phone: numbers only

## 🔗 API

Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)

## 🎨 Design

Based on [Figma design](https://www.figma.com/file/ZUhwEwudliE4AF3JMDEDkj/Test-task)
