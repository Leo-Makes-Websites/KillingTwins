import Navbar from "@/components/navbar";
import Image from "next/image";

interface MediaItem {
  src: string;
  alt: string;
  size?: number;
  width?: number;
  height?: number;
}

export async function getStaticProps() {
  let mediaData: MediaItem[] = [];

  try {
    mediaData = await require("@/../../public/media.json");
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  return {
    props: { mediaData },
  };
}

export default function Media({ mediaData }: { mediaData: MediaItem[] }) {
  return (
    <div className="min-h-dvh bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-2 py-10 sm:px-0 md:w-3/4">
        <div className="mx-auto">
          <div className="h-full lg:grid lg:grid-cols-6">
            <p className="col-span-1 pb-9 text-center text-3xl lg:p-9">
              Photos
            </p>
            <div className="col-span-5 grid grid-cols-2 gap-2 md:grid-cols-3">
              {mediaData.map(
                (item, index) =>
                  item.src && (
                    <div key={index} className="aspect-square h-auto">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={item.width || item.size || 1600}
                        height={item.height || item.size || 1600}
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
    </div>
  );
}
