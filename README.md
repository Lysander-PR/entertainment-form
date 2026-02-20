# Entertainment Form

A dynamic form built with React and TypeScript that allows users to create and manage entertainment entries such as songs, movies, and books.

## 🚀 Tech Stack

- React
- TypeScript
- Vite
- Ant Design
- Tailwind CSS
- TanStack Query
- Yup (form validation)

---

## 📸 Preview

Desktop:

Mobile:


Live demo (if deployed):
https://demo-url.com

---

## ✨ Features

- Dynamic form that changes based on selected entertainment type by schemas
- Form validation with Yup
- Data fetching and caching using TanStack Query
- Clean component separation
- Loading and error states handling
- Type-safe implementation with TypeScript

---

## 🏗 Project Structure
```
├── books/ # "books" domain: actions, hooks, schema, validations, types and specific components
├── components/ # Reusable UI components
├── constants/ # Shared constants and registries
├── hooks/ # Custom React hooks
├── movies/ # "movies" domain: actions, hooks, schema, validations, types and specific components
├── router/ # App routing setup (route definitions/navigation)
├── songs/ # "songs" domain: actions (songs/albums/genres), hooks, schema, validations, types and specific components
├── types/ # Shared TypeScript types/entities/enums/interfaces used across domains
├── utils/ # Shared utilities/helpers (e.g. Yup ↔ form sync helpers)
└── main.tsx
```


---

## ⚙️ Getting Started

Clone the repository:
git clone https://github.com/Lysander-PR/entertainment-form.git
cd entertainment-form

---

## Install dependencies
npm install

---

## Run development server
npm run dev

---

## Build for production
npm run build

---

## Preview production build
npm run preview

---

## 📌 Future Improvements
- Add unit tests
- Add API to request