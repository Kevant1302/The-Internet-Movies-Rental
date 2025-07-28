import { PrismaClient } from "@prisma/client";

let prisma;

if (!global.prisma) {
  global.prisma = new PrismaClient();
}
prisma = global.prisma;

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const movies = await prisma.movie.findMany();
      return res.status(200).json(movies);
    }

    if (req.method === "POST") {
      const { title, actors, releaseYear } = req.body;
      const movie = await prisma.movie.create({
        data: {
          title,
          actors,
          releaseYear: parseInt(releaseYear),
        },
      });
      return res.status(201).json(movie);
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
