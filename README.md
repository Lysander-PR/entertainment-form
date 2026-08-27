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
<img width="1856" height="888" alt="imagen" src="https://github.com/user-attachments/assets/987e2089-a162-475d-bc9a-2d3b4f5c9b0b" />


Live demo:
https://entertainment-form.vercel.app

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
├── api/ # Axios instance, token storage and API error handling
├── auth/ # Session handoff, token refresh and route guard (no login screen here)
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

## 🔐 Authentication

This project has **no login screen**. Creating and editing entries requires a token that is
issued by the companion login app (`entertainments-front`), which stores it in `localStorage`
under the `token-entertainment` key.

Since both apps run on different origins, `localStorage` is not shared. The session is handed
off instead:

1. The login app links to this one with the token in the URL fragment:
   `<form-url>/?entertainment=movie&id=<uuid>#token=<jwt>`. The fragment is never sent to the
   server, so the token stays out of access logs and of the `Referer` header.
2. On boot, this app reads the fragment, stores the token and strips it from the URL.
3. Without a token nothing is rendered: the user is sent to `VITE_LOGIN_URL` with a `?redirect=`
   param, so the login app can hand the session back to the very page that was requested.
4. Every outgoing request carries the stored token as an `Authorization: Bearer` header, added by
   the request interceptor. Authorization itself is decided by the API, not here.
5. The token is renewed on boot and every 50 seconds afterwards (`POST /auth/refresh`). On top of
   that, any request rejected with a 401 triggers a refresh and is replayed once, so a submission
   is never lost to an expired session.
6. When a refresh fails the session is over: the token is dropped and the user goes back to the
   login app.

### Environment variables

Copy `.env.template` into `.env` and fill it in:

| Variable | Description |
| --- | --- |
| `VITE_API_URL` | Base URL of the API |
| `VITE_LOGIN_URL` | Login page of the companion app, e.g. `http://localhost:5173/signature` |

The dev server runs on a fixed port (`5174`, see `vite.config.ts`) so the login app can be
configured to hand the session off to a stable address.

---

## ⚙️ Getting Started
```
Clone the repository:
git clone https://github.com/Lysander-PR/entertainment-form.git
cd entertainment-form
```

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
