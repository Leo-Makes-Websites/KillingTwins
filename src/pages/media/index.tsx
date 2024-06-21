import Navbar from "@/components/navbar";
import Image from "next/image";

interface MediaItem {
  src: string;
  alt: string;
  size: number;
}

const mediaData: MediaItem[] = [
  {
    src: "/demo-art.png",
    alt: "Killing Twins Demo",
    size: 1600
  },
];

export default function Media() {
  return (
    <div className="bg-black text-white min-h-dvh">
      <Navbar />
      <div className="container mx-auto px-2 sm:px-0 md:w-3/4 py-10">
        <div className="mx-auto">
          <div className="h-full lg:grid lg:grid-cols-6">
            <p className="col-span-1 text-center text-3xl pb-9 lg:p-9">
              Photos
            </p>
            <div className="col-span-5 grid grid-cols-2 md:grid-cols-3 gap-2">
              {mediaData.map((item, index) => (
                <div key={index} className="aspect-square h-auto">
                  <Image
                    src={item.src}
                    width={item.size}
                    height={item.size}
                    alt={item.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
