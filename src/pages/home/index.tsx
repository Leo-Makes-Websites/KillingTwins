import Navbar from "@/components/navbar";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-2 sm:px-0 md:w-3/4 pt-10">
        <div className="m-10 mx-auto w-1/3 md:w-1/4">
          <Image
            src="/logo-white.svg"
            alt="Killing Twins Logo"
            width={1800}
            height={1165}
            priority
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="aspect-square h-auto bg-blue-100">
            <Image
              src="/demo-art.png"
              alt="Demo Art"
              width={1600}
              height={1600}
              priority
            />
          </div>
          {/* <div className="aspect-square h-auto bg-blue-200"></div>
          <div className="aspect-square h-auto bg-blue-300"></div>
          <div className="aspect-square h-auto bg-blue-400"></div> */}
        </div>
      </div>
    </div>
  );
}
