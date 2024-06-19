import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto w-5/6 md:w-3/4 pt-10">
        <h2 className="text-3xl pb-9">Contact Information</h2>
        <p>
          Booking:{" "}
          <a
            className="text-teal-300"
            href="mailto:killingtwinsband@gmail.com"
            target="_blank"
          >
            killingtwinsband@gmail.com
          </a>
        </p>
        <p>778 980 7795</p>
      </div>
    </div>
  );
}
