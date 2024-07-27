import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";
import path from "path";

interface Song {
  title: string;
  imageUrl: string;
  about: boolean; // Boolean flag to check the presence of `about`
}

const Album: React.FC<{ songKey: string }> = async ({ songKey }) => {
  const filePath = path.join(process.cwd(), "src/json/albums.json");

  let song: Song | undefined;

  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    const json = JSON.parse(fileContents);
    song = json[songKey] as Song | undefined;
  } catch (error) {
    console.error("Error reading or parsing JSON file:", error);
    return <div className="aspect-square h-auto">Error loading album</div>;
  }

  if (!song) {
    return <div className="aspect-square h-auto">{`${songKey} not found`}</div>;
  }

  return (
    <div key={songKey} className="aspect-square h-auto">
      {song.about ? (
        <Link href={`/music/${songKey}`}>
          <Image
            src={song.imageUrl}
            width={600}
            height={600}
            alt={song.title}
            placeholder="blur"
            blurDataURL={song.imageUrl}
          />
        </Link>
      ) : (
        <Image
          src={song.imageUrl}
          width={600}
          height={600}
          alt={song.title}
          placeholder="blur"
          blurDataURL={song.imageUrl}
        />
      )}
    </div>
  );
};

export default Album;
