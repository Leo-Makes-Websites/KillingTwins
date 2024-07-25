import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";

interface Song {
  title: string;
  imageUrl: string;
  releaseDate: string;
  about?: {
    description: string;
    links: { platform: string; url: string }[];
  };
}

function parseDate(date: string) {
  const parts = date.split(" ").map(Number);
  return {
    year: parts[2] || parts[1] || parts[0],
    month: parts[0] || null,
    day: parts[1] || null,
  };
}

function compareDates(
  a: ReturnType<typeof parseDate>,
  b: ReturnType<typeof parseDate>,
) {
  return a.year !== b.year
    ? b.year - a.year
    : a.month !== b.month
      ? (b.month || 0) - (a.month || 0)
      : (b.day || 0) - (a.day || 0);
}

export default async function Music() {
  const file = await fs.readFile(
    path.join(process.cwd(), "src/json/albums.json"),
    "utf8",
  );
  const songs = JSON.parse(file) as Song[];

  songs.sort((a, b) =>
    compareDates(parseDate(a.releaseDate), parseDate(b.releaseDate)),
  );

  return (
    <div className="container mx-auto w-5/6 py-10 md:w-3/4">
      <h2 className="pb-9 text-3xl">Discography</h2>
      <div className="grid grid-cols-1 gap-4 text-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {songs.map((item) => (
          <div key={item.title} className="aspect-square h-auto">
            <Link
              href={
                item.about
                  ? `/music/${item.title.replace(/\s/g, "_").toLowerCase()}`
                  : ""
              }
            >
              <Image
                src={item.imageUrl}
                width={600}
                height={600}
                alt={item.title}
                placeholder="blur"
                blurDataURL={item.imageUrl}
              />
            </Link>
            <p className="pt-2 text-center">{item.title}</p>
            <p className="pt-2 text-center">{item.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
