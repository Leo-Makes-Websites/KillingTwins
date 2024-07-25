import Image from "next/image";
export default function HomePage() {
  return (
    <div className="container mx-auto px-2 py-10 sm:px-0 md:w-3/4">
      <div className="m-10 mx-auto w-1/3 md:w-1/4">
        <Image
          src="/logo-white.svg"
          alt="Killing Twins Logo"
          width={1800}
          height={1165}
          priority
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <div className="aspect-square h-auto text-center">
          <div className="mb-2">On the release radar</div>
          <Image
            className="h-auto"
            src="/media/scream-for-war.webp"
            alt="Scream For War"
            width={600}
            height={600}
            priority
          />
          <div className="mt-2">July 26</div>
        </div>

        {/*
        <div className="aspect-square h-auto bg-blue-200"></div>
        <div className="aspect-square h-auto bg-blue-300"></div>
        <div className="aspect-square h-auto bg-blue-400"></div>
        */}
      </div>
    </div>
  );
}
