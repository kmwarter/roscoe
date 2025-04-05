"use client"

import { useState } from "react";
import Link from "next/link"
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { cn } from "@/utils/cn";

const navItems = [
  {
    id: "home",
    href: "/",
    value: "Home"
  },
  {
    id: "platform",
    href: "/platform",
    value: "Platform"
  },
  {
    id: "about",
    href: "/about",
    value: "About"
  },
  {
    id: "contact",
    href: "/contact",
    value: "Contact"
  }
]

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="relative p-6 flex items-center justify-between">
      <div className="basis-[38.2%] flex-shrink-0 mr-2 text-4xl">
      Ros<strong>coe</strong>
      </div>
      
      <div className="basis-[61.8%] flex justify-end">
        {/* Desktop nav */}
        <nav className="w-full hidden md:block mt-2">
          <ul className="flex justify-between font-bold">
            {navItems.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.href}>{item.value}</Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Hamburger button for mobile */}
        <div className="md:hidden h-[40px]">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="focus:outline-none"
          >
            <Bars3Icon className="h-11 w-11" />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        className={cn(
          "fixed inset-0 w-full bg-black text-white flex flex-col items-center justify-center z-50",
          "transition-transform duration-300 ease-in-out",
          menuOpen ? "translate-y-0" : "translate-y-full",
        )}
      >
        <div className="md:hidden h-[40px]">
          <button
            onClick={toggleMenu}
            aria-label="Close Menu"
            className="absolute top-0 right-0 m-6"
          >
            <XMarkIcon className="h-11 w-11" />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-between font-semibold">
          {navItems.map((item) => {
            return (
              <li key={item.id}>
                <Link href={item.href}>{item.value}</Link>
              </li>
            )
          })}
        </ul>
      </nav>

    </header>
  );
}