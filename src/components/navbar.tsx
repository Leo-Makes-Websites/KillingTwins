"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/music", label: "Music" },
    { href: "/tour", label: "Tour" },
    { href: "/media", label: "Media" },
    { href: "/about", label: "About" },
    { href: "", label: "Store" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={toggleMenu ? "true" : "false"}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${toggleMenu ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${toggleMenu ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Logo and Navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            <div className="hidden w-full sm:block">
              <div className="flex w-full justify-evenly">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-md rounded-md px-3 py-2 font-medium text-red-600 hover:bg-neutral-700 hover:text-red-500 ${
                      isActive(link.href) ? "bg-neutral-800 text-red-500" : ""
                    }`}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed left-0 right-0 top-0 z-50 mt-16 bg-black sm:hidden ${toggleMenu ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block rounded-md px-3 py-2 text-base font-medium text-red-600 hover:bg-neutral-700 hover:text-red-500 ${
                  isActive(link.href) ? "bg-neutral-800 text-red-500" : ""
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
