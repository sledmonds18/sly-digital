    export default function Footer() {
    return (
    <footer className="border-t border-white/10 bg-gray-950 px-6 py-12 text-white">
        <div className="mx-auto max-w-6xl">

            {/* Footer Top */}
            <div className="grid gap-12 md:grid-cols-3">

            {/* Brand */}
            <div>
                <h2 className="text-2xl font-bold tracking-tight">
                SLY<span className="text-blue-500">.</span>DIGITAL
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                I build digital experiences that look good, work well,
                and help businesses stand out online.
                </p>

                <p className="mt-4 text-sm text-gray-500">
                Technology meets creativity.
                </p>
            </div>

            {/* Navigation */}
            <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Navigation
                </h3>

                <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">
                <a
                    href="#work"
                    className="w-fit transition-colors duration-200 hover:text-blue-500"
                >
                    Work
                </a>

                <a
                    href="#services"
                    className="w-fit transition-colors duration-200 hover:text-blue-500"
                >
                    Services
                </a>

                <a
                    href="#about"
                    className="w-fit transition-colors duration-200 hover:text-blue-500"
                >
                    About
                </a>

                <a
                    href="#skills"
                    className="w-fit transition-colors duration-200 hover:text-blue-500"
                >
                    Skills
                </a>

                <a
                    href="#contact"
                    className="w-fit transition-colors duration-200 hover:text-blue-500"
                >
                    Contact
                </a>
                </div>
            </div>

            {/* Contact */}
            <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Get In Touch
                </h3>

                <div className="mt-5 flex flex-col gap-4 text-sm text-gray-400">
                <a
                    href="tel:+233532551180"
                    className="w-fit transition-colors duration-200 hover:text-blue-500"
                >
                    +233 53 255 1180
                </a>

                <a
                    href="mailto:sylvesteredmonds18@gmail.com"
                    className="break-all transition-colors duration-200 hover:text-blue-500"
                >
                    sylvesteredmonds18@gmail.com
                </a>
                </div>

                <a
                href="#contact"
                className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
                >
                Let&apos;s Work Together →
                </a>
            </div>

            </div>

            {/* Footer Bottom */}
            <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>
                © 2026 Sly Digital. All rights reserved.
            </p>

            <p>
                Built with Next.js & Tailwind CSS.
            </p>
            </div>

        </div>
        </footer>
    );
    }