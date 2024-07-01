import Navbar from "@/components/navbar";
import Image from "next/image";

interface Album {
  title: string;
  imageUrl: string;
  releaseDate: string;
}

export async function getStaticProps() {
  let albums: Album[] = [];

  try {
    albums = await require("@/../../public/albums.json");
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  return {
    props: { albums },
  };
}

export default function Music({ albums }: { albums: Album[] }) {
  return (
    <div className="min-h-dvh bg-black text-white">
      <Navbar />
      <div className="container mx-auto w-5/6 py-10 md:w-3/4">
        <h2 className="pb-9 text-3xl">Discography</h2>
        <div className="grid grid-cols-1 gap-4 text-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {albums.map((album) => (
            <div key={album.title} className="aspect-square h-auto">
              <Image
                src={album.imageUrl}
                width={1600}
                height={1600}
                alt={album.title}
                placeholder="blur"
                blurDataURL={album.imageUrl}
              />
              <p className="pt-2 text-center">{album.title}</p>
              <p className="pt-2 text-center">{album.releaseDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
