import Navbar from "@/components/navbar";
import Image from "next/image";

interface Album {
  title: string;
  imageUrl: string;
  releaseDate: string;
}

const albums: Album[] = [
  {
    title: "The Lie",
    imageUrl: "/the-lie-demo.webp",
    releaseDate: "July 2024",
  },
  {
    title: "Killing Twins Demo",
    imageUrl: "/demo-art.png",
    releaseDate: "2024",
  },
];

export default function Music() {
  return (
    <div className="bg-black text-white min-h-dvh">
      <Navbar />
      <div className="container mx-auto w-5/6 md:w-3/4 py-10">
        <h2 className="text-3xl pb-9">Discography</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-lg">
          {albums.map((album) => (
            <div key={album.title} className="aspect-square h-auto">
              <Image
                src={album.imageUrl}
                width={1600}
                height={1600}
                alt={album.title}
              />
              <p className="text-center pt-2">{album.title}</p>
              <p className="text-center pt-2">{album.releaseDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
