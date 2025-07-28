import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const movies = await prisma.movie.findMany();
    res.status(200).json(movies);
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
    res.status(201).json(movie);
  }
}
