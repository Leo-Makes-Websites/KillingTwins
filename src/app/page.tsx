import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-dvh items-center justify-center bg-black text-center text-4xl text-slate-500">
      <h1 className="absolute">
        You're not supposed to see this. Please click <br />
        <Link className="text-blue-700" href="/home">
          here
        </Link>
      </h1>
    </div>
  );
}
