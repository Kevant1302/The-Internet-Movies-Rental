import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PUT") {
    const { title, actors, releaseYear } = req.body;
    const updatedMovie = await prisma.movie.update({
      where: { id: id },
      data: {
        title,
        actors,
        releaseYear: parseInt(releaseYear),
      },
    });
    res.status(200).json(updatedMovie);
  }

  if (req.method === "DELETE") {
    await prisma.movie.delete({ where: { id: id } });
    res.status(204).end();
  }
}
