import MusicLink from "@/components/MusicLink";
import Image from "next/image";
import { promises as fs } from "fs";
import { notFound } from "next/navigation";
import path from "path";

interface Song {
  title: string;
  imageUrl: string;
  releaseDate: string;
  about?: {
    description: string;
    links: { platform: string; url: string }[];
  };
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), "src/json/albums.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const json = JSON.parse(fileContents);
  const song = json[params.id] as Song | undefined;

  if (!song) {
    return { title: "Song not found" };
  }

  return {
    title: `Killing Twins - ${song.title}`,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), "src/json/albums.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const json = JSON.parse(fileContents);
  const song = json[params.id] as Song | undefined;

  if (!song || !song.about) {
    notFound();
  }

  return (
    <div className="container mx-auto w-5/6 py-10 md:w-3/4">
      <div className="my-auto mb-5 w-auto text-center text-5xl zfold:text-2xl">
        {song.title}
      </div>
      <div className="grid space-y-4 sm:grid-cols-3 sm:space-y-0">
        <ul className="row-start-2 flex place-items-end sm:row-start-1 sm:aspect-square sm:flex-col">
          {song.about.links.map((link, index) => (
            <li className="w-1/5" key={index}>
              <MusicLink platform={link.platform} href={link.url} />
            </li>
          ))}
        </ul>
        <Image
          className="sm:col-start-2"
          src={song.imageUrl}
          width={600}
          height={600}
          alt={song.title}
        />
        <p className="mx-3 text-lg sm:col-start-3 lg:text-base">
          {song.about.description}
        </p>
      </div>
    </div>
  );
}
