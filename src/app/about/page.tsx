import Image from "next/image";

export const metadata = { title: "Killing Twins - About" };

export default function About() {
  return (
    <div className="container mx-auto px-2 py-10 sm:px-0 md:w-3/4">
      <Image
        src="/media/about.webp"
        width={1920}
        height={1080}
        alt={"Killing Twins band members"}
        priority
        placeholder="blur"
        blurDataURL="/media/about.webp"
      />
      <p className="pt-2 text-3xl">About</p>
      <p className="py-1">
        Killing Twins is a death thrash band founded in Metro Vancouver on March
        22nd, 2023. The band was formed by lead guitarist and vocalist Jack
        Drews, who met drummer Kurt Winter on the platform Bandmix. Despite
        facing challenges in finding a permanent bassist, the duo eventually
        recruited Kurt&apos;s brother, Alex Winter, to complete the lineup. In
        February 2024, they discovered rhythm guitarist Kyle Desharnais through
        Bandmix.
      </p>
      <p className="block pt-4 text-center text-4xl sm:hidden">Band Members</p>
      <div className="grid grid-cols-1 pt-2 sm:grid-cols-4">
        <div className="col-span-1 aspect-square h-auto">
          <div className="relative">
            <Image
              className="bg-red-400 p-1"
              src="https://placehold.co/500.webp"
              width={500}
              height={500}
              alt="Jack Drews"
              priority
            />
            <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold">
              Jack Drews
            </div>
          </div>
          <p className="mb-4 text-center">
            Lead Guitar and Vocals
            <br />
            2023-Present
          </p>
        </div>
        <div className="col-span-2 mb-4 hidden h-auto sm:block">
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
              className="bg-red-400 p-1"
              src="https://placehold.co/500.webp"
              width={500}
              height={500}
              alt="Kyle Desharnais"
            />
            <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold">
              Kyle Desharnais
            </div>
          </div>
          <p className="mb-4 text-center">
            Rhythm Guitar
            <br />
            2024-Present
          </p>
        </div>
        <div className="col-span-1 aspect-square h-auto">
          <p className="mt-4 hidden text-center sm:block">
            Drums
            <br />
            2023-Present
          </p>
          <div className="relative">
            <Image
              className="bg-red-400 p-1"
              src="https://placehold.co/500.webp"
              width={500}
              height={500}
              alt="Kurt Winter"
            />
            <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold">
              Kurt Winter
            </div>
          </div>
          <p className="mb-4 block text-center sm:hidden">
            Drums
            <br />
            2023-Present
          </p>
        </div>
        <div className="col-span-2 mb-4 hidden h-auto sm:block"></div>
        <div className="col-span-1 aspect-square h-auto">
          <p className="mt-4 hidden text-center sm:block">
            Bass and Occasional Vocals
            <br />
            2023-Present
          </p>
          <div className="relative">
            <Image
              className="bg-red-400 p-1"
              src="https://placehold.co/500.webp"
              width={500}
              height={500}
              alt="Alex Winter"
            />
            <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold">
              Alex Winter
            </div>
          </div>
          <p className="mb-4 block text-center sm:hidden">
            Bass and Occasional Vocals
            <br />
            2023-Present
          </p>
        </div>
      </div>
    </div>
  );
}
