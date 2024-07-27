import Image from "next/image";
import { promises as fs } from "fs";

export const metadata = { title: "Killing Twins - Tour" };

interface TourEvent {
  date: string;
  location: string;
  ticketLink: string;
  buttons?: {
    label: string;
    link: string;
  }[];
}

export default async function Tour() {
  const file = await fs.readFile(
    process.cwd() + "/src/json/events.json",
    "utf8",
  );
  const events = JSON.parse(file);

  return (
    <div className="container mx-auto w-5/6 py-10 md:w-3/4 zfold:w-full">
      <div className="mx-auto mb-5 grid grid-cols-4">
        <div className="col-span-1 h-auto w-auto zfold:col-span-4 zfold:mx-auto zfold:w-2/3">
          <Image
            src="/logo-white.svg"
            alt="Killing Twins Logo"
            width={1800}
            height={1165}
            priority
            placeholder="blur"
            blurDataURL="/logo-white.svg"
          />
        </div>
        <div className="col-span-2 col-start-2 my-auto w-auto text-center text-5xl zfold:text-2xl">
          Upcoming Events
        </div>
      </div>

      <div className="rounded-xl bg-zinc-900 py-4">
        <div className="overflow-x-auto">
          {events.length > 0 ? (
            <div>
              <div className="hidden border-b border-zinc-700 text-sm sm:grid sm:grid-cols-12 sm:text-base">
                <div className="col-span-2 w-full p-4">Date</div>
                <div className="col-span-3 w-full p-4">Location</div>
              </div>
              <ul className="list-none">
                {events.map((item: TourEvent, index: number) => (
                  <li
                    key={index}
                    className="grid grid-cols-2 border-b border-zinc-700 sm:grid-cols-12"
                  >
                    <div className="col-span-1 w-full p-4 sm:col-span-3">
                      {item.date}
                    </div>
                    <div className="col-span-1 w-full p-4 sm:col-span-4 lg:col-span-5">
                      {item.location}
                    </div>
                    <div className="col-span-2 flex w-full flex-col gap-2 p-4 sm:col-span-5 sm:grid sm:grid-cols-2 lg:col-span-4">
                      {item.buttons &&
                        item.buttons.map((button, index) => (
                          <a
                            key={button.label}
                            href={button.link}
                            className={`block rounded-lg bg-red-500 px-4 py-2 text-center font-medium text-white hover:bg-red-700 ${index === 0 && "sm:order-last"} ${item.buttons && item.buttons.length % 2 !== 0 && index === 0 && "sm:col-span-2"}`}
                          >
                            <div className="flex h-full items-center justify-center">
                              {button.label}
                            </div>
                          </a>
                        ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="col-span-full w-full p-4 text-center text-lg">
              No upcoming events
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
