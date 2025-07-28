import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [title, setTitle] = useState("");
  const [actors, setActors] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        actors: actors.split(",").map((a) => a.trim()),
        releaseYear,
      }),
    });
    setTitle("");
    setActors("");
    setReleaseYear("");
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-8">Add a New Movie</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-lg shadow max-w-lg"
        >
          <input
            type="text"
            placeholder="Movie Title"
            className="w-full border rounded px-4 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Actors (comma separated)"
            className="w-full border rounded px-4 py-2"
            value={actors}
            onChange={(e) => setActors(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Release Year"
            className="w-full border rounded px-4 py-2"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Add Movie
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
