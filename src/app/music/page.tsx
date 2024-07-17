import Image from "next/image";
import { promises as fs } from "fs";
import Link from "next/link";

interface Song {
  title: string;
  imageUrl: string;
  releaseDate: string;
  about?: {
    links: { platform: string; url: string }[];
  };
}

export default async function Music() {
  const file = await fs.readFile(
    process.cwd() + "/src/json/albums.json",
    "utf8",
  );
  const songs = JSON.parse(file) as Song[];

  return (
    <div className="container mx-auto w-5/6 py-10 md:w-3/4">
      <h2 className="pb-9 text-3xl">Discography</h2>
      <div className="grid grid-cols-1 gap-4 text-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {songs.map((item: Song) => (
          <div key={item.title} className="aspect-square h-auto">
            {item.about ? (
              <Link
                href={`/music/${item.title.replace(/\s/g, "_").toLowerCase()}`}
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
            ) : (
              <Image
                src={item.imageUrl}
                width={600}
                height={600}
                alt={item.title}
                placeholder="blur"
                blurDataURL={item.imageUrl}
              />
            )}
            <p className="pt-2 text-center">{item.title}</p>
            <p className="pt-2 text-center">{item.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
