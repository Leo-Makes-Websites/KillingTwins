import Image from "next/image";
import { promises as fs } from "fs";

export const metadata = { title: "Killing Twins - Media" };

interface MediaItem {
  src: string;
  alt: string;
  size?: number;
  width?: number;
  height?: number;
}

export default async function Media() {
  const file = await fs.readFile(
    process.cwd() + "/src/json/media.json",
    "utf8",
  );
  const media = JSON.parse(file);

  return (
    <div className="container mx-auto px-2 py-10 sm:px-0 md:w-3/4">
      <div className="mx-auto">
        <div className="h-full lg:grid lg:grid-cols-6">
          <p className="col-span-1 pb-9 text-center text-3xl lg:p-9">Photos</p>
          <div className="col-span-5 m-1 grid grid-cols-2 gap-2 md:grid-cols-3 lg:ml-5 lg:grid-cols-4 zfold:grid-cols-1">
            {media.map(
              (item: MediaItem, index: number) =>
                item.src && (
                  <div key={index} className="aspect-square h-auto">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width || item.size || 600}
                      height={item.height || item.size || 600}
                      placeholder="blur"
                      blurDataURL={item.src}
                    />
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
