import Navbar from "@/components/navbar";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-black text-white min-h-dvh">
      <Navbar />
      <div className="container mx-auto px-2 sm:px-0 md:w-3/4 py-10">
        <Image
          src="/about.jpg"
          height={1440}
          width={2560}
          alt={"Killing Twins band members"}
        />
        <p className="text-3xl pt-2">About</p>
        <p>about text (WIP)</p>
        <p className="block sm:hidden text-4xl text-center pt-4">Band Members</p>
        <div className="grid grid-cols-1 sm:grid-cols-4 pt-2">
          <div className="col-span-1 aspect-square h-auto">
            <div className="relative">
              <Image
                className="p-1 bg-red-400"
                src="https://placehold.co/1000.png"
                width={1000}
                height={1000}
                alt="Jack Drews"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-2xl font-bold">
                Jack Drews
              </div>
            </div>
            <p className="text-center mb-4">
              Lead Guitar and Vocals
              <br />
              2023-Present
            </p>
          </div>
          <div className="col-span-2 h-auto hidden sm:block mb-4">
            <Image
              className="h-3/4"
              src="/logo-white.svg"
              alt="Killing Twins Logo"
              width={1800}
              height={1165}
              priority
            />
            <div className="h-1/4 translate-y-1/2 text-center text-6xl font-extrabold">
              Band Members
            </div>
          </div>
          <div className="col-span-1 aspect-square h-auto">
            <div className="relative">
              <Image
                className="p-1 bg-red-400"
                src="https://placehold.co/1000.png"
                width={1000}
                height={1000}
                alt="Kyle Desharnais"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-2xl font-bold">
                Kyle Desharnais
              </div>
            </div>
            <p className="text-center mb-4">
              Rythm Guitar
              <br />
              2024-Present
            </p>
          </div>
          <div className="col-span-1 aspect-square h-auto">
            <p className="text-center mt-4 hidden sm:block">
              Drums
              <br />
              2023-Present
            </p>
            <div className="relative">
              <Image
                className="p-1 bg-red-400"
                src="https://placehold.co/1000.png"
                width={1000}
                height={1000}
                alt="Kurt Winter"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-2xl font-bold">
                Kurt Winter
              </div>
            </div>
            <p className="text-center mb-4 block sm:hidden">
              Drums
              <br />
              2023-Present
            </p>
          </div>
          <div className="col-span-2 h-auto hidden sm:block mb-4"></div>
          <div className="col-span-1 aspect-square h-auto">
            <p className="text-center mt-4 hidden sm:block">
              Bass and Occasional Vocals
              <br />
              2023-Present
            </p>
            <div className="relative">
              <Image
                className="p-1 bg-red-400"
                src="https://placehold.co/1000.png"
                width={1000}
                height={1000}
                alt="Alex Winter"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-2xl font-bold">
                Alex Winter
              </div>
            </div>
            <p className="text-center mb-4 block sm:hidden">
              Bass and Occasional Vocals
              <br />
              2023-Present
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
