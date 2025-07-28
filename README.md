# IMR Movie Portal

A full-stack web application created for the Internet Movies Rental Company (IMR).  
This portal allows users to view, add, edit, and delete movies, storing data securely in a MongoDB database using Prisma ORM.

---

## Features

- **Movies List Page**
  - Displays all movies with their title, list of actors, and release year.
- **CRUD Functionality**
  - Add new movies
  - Edit existing movies
  - Delete movies
- **Responsive Layout**
  - Custom Navbar
  - Footer with company and contact information
- **Database Integration**
  - Movies are stored and retrieved from MongoDB using Prisma

---

## Tech Stack

- **Frontend:** Next.js, React
- **Backend:** Next.js API Routes
- **Database:** MongoDB
- **ORM:** Prisma
- **Styling:** Tailwind CSS (and CSS modules)

---

## Project Structure

```
imr-movies/
 ├── components/
 │   ├── Navbar.js
 │   ├── Footer.js
 ├── pages/
 │   ├── _app.js
 │   ├── index.js
 │   ├── movies.js
 │   ├── api/
 │   │   ├── movies/
 │   │   │   ├── index.js  (GET, POST)
 │   │   │   └── [id].js   (PUT, DELETE)
 ├── prisma/
 │   └── schema.prisma
 ├── public/
 ├── styles/
 ├── README.md
 └── package.json
```

---

## Installation and Setup

### Prerequisites

- Node.js
- MongoDB
- Git

### Steps

1. **Clone the repository**

   ```bash
   git clone <your_repo_url>
   cd imr-movies
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   - Create `.env` file

   ```env
   DATABASE_URL="your_mongodb_connection_string"
   ```

4. **Setup Prisma**

   ```bash
   npx prisma db push
   ```

5. **Run the application**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000`

---

## Authors

- Group Members:
- Kevant Patel
- Aviral Hudda
- Pranav Patel

---

## License

This project is for academic purposes only.
