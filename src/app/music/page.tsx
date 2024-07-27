import { promises as fs } from "fs";
import path from "path";
import Album from "@/components/album";

export const metadata = { title: "Killing Twins - Music" };

interface Song {
  title: string;
  imageUrl: string;
  releaseDate: string;
  about?: {
    description: string;
    links: { platform: string; url: string }[];
  };
}

const monthToNumber: { [key: string]: number } = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

interface ParsedDate {
  year: number | null;
  month: number | null;
  day: number | null;
}

function parseDate(date: string): ParsedDate | null {
  const parts = date.split(" ");
  let year: number | null = null;
  let month: number | null = null;
  let day: number | null = null;

  switch (parts.length) {
    case 1:
      year = parseInt(parts[0], 10);
      month = null;
      day = null;
      break;
    case 2:
      year = parseInt(parts[1], 10);
      month = monthToNumber[parts[0]] || null;
      day = null;
      break;
    case 3:
      year = parseInt(parts[2], 10);
      month = monthToNumber[parts[0]] || null;
      day = parseInt(parts[1], 10);
      break;
    default:
      return null;
  }

  if (month === null) {
    return null;
  }

  return { year, month, day };
}

function compareDates(a: ParsedDate, b: ParsedDate): number {
  if (a.year !== b.year) {
    return (b.year || 0) - (a.year || 0);
  }

  if (a.month !== b.month) {
    return (b.month || 0) - (a.month || 0);
  }

  if (a.day === null && b.day !== null) {
    return -1;
  } else if (a.day !== null && b.day === null) {
    return 1;
  } else if (a.day === null && b.day === null) {
    return 0;
  } else {
    return (b.day || 0) - (a.day || 0);
  }
}

export default async function Music() {
  const file = await fs.readFile(
    path.join(process.cwd(), "src/json/albums.json"),
    "utf8",
  );
  const data = JSON.parse(file);

  const songs: { [key: string]: Song } = data;

  const validSongKeys = Object.keys(songs).filter(
    (key) => parseDate(songs[key].releaseDate) !== null,
  );

  validSongKeys.sort((a, b) =>
    compareDates(
      parseDate(songs[a].releaseDate)!,
      parseDate(songs[b].releaseDate)!,
    ),
  );

  return (
    <div className="container mx-auto w-5/6 py-10 md:w-3/4">
      <h2 className="pb-9 text-3xl">Discography</h2>
      <div className="grid grid-cols-1 gap-4 text-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {validSongKeys.map((key) => (
          <div key={key}>
            <Album songKey={key} />
            <p className="pt-2 text-center">{songs[key].title}</p>
            <p className="pt-2 text-center">{songs[key].releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
