"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tight text-white">
                    SLY<span className="text-blue-500">.</span>DIGITAL
                </Link>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="#work"
                        className="text-sm text-gray-300 transition hover:text-white"
                    >
                        Work
                    </Link>

                    <Link
                        href="#services"
                        className="text-sm text-gray-300 transition hover:text-white"
                    >
                        Services
                    </Link>

                    <Link
                    href="#skills"
                    className="text-sm text-gray-300 transition hover:text-white"
                    >
                    Skills
                    </Link>

                    <Link
                        href="#about"
                        className="text-sm text-gray-300 transition hover:text-white"
                    >
                        About
                    </Link>

                    <Link
                        href="#contact"
                        className="text-sm text-gray-300 transition hover:text-white"
                    >
                        Contact
                    </Link>

                    <Link
                        href="#contact"
                        className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                    >
                        Let&apos;s Talk →
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl text-white md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

                        {/* Mobile Navigation */}
            {isOpen && (
            <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
                <div className="flex flex-col gap-5">

                <Link
                    href="#work"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 transition hover:text-white"
                >
                    Work
                </Link>

                <Link
                    href="#services"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 transition hover:text-white"
                >
                    Services
                </Link>

                
                <Link
                    href="#skills"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 transition hover:text-white"
                >
                    Skills
                </Link>

                <Link
                href="#skills"
                className="text-sm text-gray-300 transition hover:text-white"
                >
                Skills
                </Link>

                <Link
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 transition hover:text-white"
                >
                    About
                </Link>

                <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 transition hover:text-white"
                >
                    Contact
                </Link>

                <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-2 rounded-full bg-blue-500 px-5 py-3 text-center font-medium text-white transition hover:bg-blue-600"
                >
                    Let&apos;s Talk →
                </Link>

                </div>
            </div>
            )}
        </nav>
    );
}