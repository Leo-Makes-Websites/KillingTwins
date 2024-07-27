export const metadata = { title: "Killing Twins - Contact" };

export default function Contact() {
  const email = "killingtwinsband@gmail.com";

  return (
    <div className="container mx-auto w-5/6 py-10 md:w-3/4">
      <h1 className="pb-9 text-2xl sm:text-5xl">Contact Information</h1>
      <p className="sm:text-xl">
        Booking:
        <a
          className="text-teal-300"
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {email}
        </a>
      </p>
      <p>778 980 7795</p>
    </div>
  );
}
