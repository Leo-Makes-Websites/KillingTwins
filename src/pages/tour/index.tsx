import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Event {
  date: string;
  location: string;
  ticketLink: string;
}

export default function HomePage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/events.json")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="bg-black text-white min-h-dvh">
      <Navbar />
      <div className="container mx-auto w-5/6 md:w-2/3 py-10">        <div className="grid grid-cols-4 mx-auto mb-5">
          <div className="col w-auto h-auto">
            {" "}
            <Image
              src="/logo-white.svg"
              alt="Killing Twins Logo"
              width={1800}
              height={1165}
              priority
            />
          </div>
          <div className="col-start-2 col-end-4 w-auto my-auto text-center text-5xl">
            <p>Upcoming Events</p>
          </div>
        </div>
        <div className="py-4 bg-zinc-900 rounded-xl">
          <table className="table-fixed w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 w-1/6 border-b border-zinc-700">Date</th>
                <th className="p-4 w-4/6 border-b border-zinc-700">Location</th>
                <th className="p-4 w-1/6 border-b border-zinc-700">Tickets</th>
              </tr>
            </thead>
            <tbody>
              {events.length > 0 ? (
                events.map((event) => (
                  <tr key={event.date}>
                    <td className="p-4 w-1/6 border-b border-zinc-700">
                      {event.date}
                    </td>
                    <td className="p-4 w-3/6 border-b border-zinc-700">
                      {event.location}
                    </td>
                    <td className="p-4 w-1/6 border-b border-zinc-700">
                      <a
                        href={event.ticketLink}
                        className="bg-red-500 text-white font-medium py-2 px-4 rounded-md hover:bg-red-700"
                      >
                        Buy Tickets
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    className="p-4 w-full border-b border-zinc-700 text-center text-lg"
                  >
                    No upcoming events
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
