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

form song
<img width="1835" height="1028" alt="imagen" src="https://github.com/user-attachments/assets/771e2989-e603-4ee9-9387-ccbb406723cc" />

form movie
<img width="1856" height="888" alt="imagen" src="https://github.com/user-attachments/assets/f3a10927-338a-4274-a40a-31d499416ce2" />

form book
<img width="1856" height="888" alt="imagen" src="https://github.com/user-attachments/assets/8972c095-9a5d-42b9-90dd-6e7cde2fd5f9" />


Mobile:

form song

<img width="468" height="1548" alt="imagen" src="https://github.com/user-attachments/assets/81f1d7ec-60f6-481e-92d6-ed38007270b6" />


form movie

<img width="468" height="1465" alt="imagen" src="https://github.com/user-attachments/assets/3f53719d-3f6b-4e16-b444-64180ce295d2" />


form book

<img width="468" height="1222" alt="imagen" src="https://github.com/user-attachments/assets/d98b3d05-6e91-4a5a-a80c-86e74a77fe9c" />

Errors in inputs:
<img width="1856" height="888" alt="imagen" src="https://github.com/user-attachments/assets/ff935e39-f119-4d2f-8ead-fccb45929f37" />



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
