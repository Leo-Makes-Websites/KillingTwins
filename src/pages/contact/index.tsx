import Navbar from "@/components/navbar";

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-dvh">
      <Navbar />
      <div className="container mx-auto w-5/6 md:w-3/4 py-10">
        <h1 className="text-2xl sm:text-5xl pb-9">Contact Information</h1>
        <p className="sm:text-xl">
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
