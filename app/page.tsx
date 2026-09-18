import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="flex min-h-screen items-center px-6 pt-24 animate-fade-in">
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-400 animate-fade-up">
            Welcome to Sly Digital
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl animate-fade-up">
            I build digital experiences that
            look good and work well.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400 animate-fade-up">
            I&apos;m Sly, an IT Technical Support Officer, Frontend Developer,
            UI Designer and Graphic Designer passionate about technology,
            creativity and building useful digital experiences.
          </p>

              <div className="mt-8 flex flex-wrap gap-4 animate-fade-up">
          <a
            href="#work"
            className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-gray-700 px-6 py-3 font-semibold text-white transition hover:bg-gray-900"
          >
            Let&apos;s Talk
          </a>
        </div>
                  {/* Skills Strip */}
          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-gray-500">
              Skills & Technologies
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-gray-400">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Tailwind CSS</span>
              <span>UI Design</span>
              <span>Graphic Design</span>
              <span>IT Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
              About Me
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Technology meets creativity.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-400">
              I&apos;m a technology enthusiast with a passion for building
              digital experiences and solving technical problems. My interests
              span frontend development, UI design, graphic design and IT
              support.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I enjoy turning ideas into clean, functional and visually
              engaging digital products while continuously learning new
              technologies and improving my skills.
            </p>
          </div>

        </div>
      </section>

        {/* Experience Section */}
  <section id="experience" className="px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
          Experience
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Where technology meets real-world problem solving.
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          My professional experience combines technical support,
          troubleshooting, customer assistance and digital technology.
        </p>
      </div>
<div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 transition duration-300 hover:border-blue-500/30">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
              IT & Technical Support
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              IT Technical Support Officer
            </h3>

            <p className="mt-2 text-lg text-gray-400">
              Sametro Company Limited
            </p>
          </div>

          <span className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
            2026 — Present
          </span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-semibold text-white">
              Technical Support
            </h4>

            <p className="mt-3 leading-7 text-gray-400">
              Troubleshooting technical issues, assisting users and helping
              resolve problems with digital systems and devices.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">
              Customer Assistance
            </h4>

            <p className="mt-3 leading-7 text-gray-400">
              Supporting customers with technical and financing-related
              concerns while documenting issues and solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">
              System Support
            </h4>

            <p className="mt-3 leading-7 text-gray-400">
              Assisting with system maintenance, updates and the ongoing
              improvement of customer support processes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">
              Problem Solving
            </h4>

            <p className="mt-3 leading-7 text-gray-400">
              Investigating technical problems, identifying possible causes
              and working toward practical solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

            {/* Services Section */}

<section id="services" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">

```
<div className="max-w-2xl">
  <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
    What I Do
  </p>

  <h2 className="text-4xl font-bold md:text-5xl">
    Services built around technology and creativity.
  </h2>

  <p className="mt-6 text-lg leading-8 text-gray-400">
    I combine technical knowledge and creative skills to build,
    design and support digital experiences.
  </p>
</div>

{/* Service Cards */}
<div className="mt-12 grid gap-6 md:grid-cols-2">

  {/* Frontend Development */}
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.07]">
    <div className="flex items-start justify-between">
      <div className="text-3xl">💻</div>
      <span className="text-sm font-medium text-gray-600">01</span>
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
      Frontend Development
    </h3>

    <p className="mt-4 leading-7 text-gray-400">
      Building responsive and user-friendly websites using modern
      frontend technologies such as HTML, CSS, JavaScript, React and
      Next.js.
    </p>
  </div>

  {/* UI Design */}
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.07]">
    <div className="flex items-start justify-between">
      <div className="text-3xl">🎨</div>
      <span className="text-sm font-medium text-gray-600">02</span>
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
      UI Design
    </h3>

    <p className="mt-4 leading-7 text-gray-400">
      Creating clean, modern and intuitive interfaces that make
      digital products easy and enjoyable to use.
    </p>
  </div>

  {/* Graphic Design */}
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.07]">
    <div className="flex items-start justify-between">
      <div className="text-3xl">✏️</div>
      <span className="text-sm font-medium text-gray-600">03</span>
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
      Graphic Design
    </h3>

    <p className="mt-4 leading-7 text-gray-400">
      Designing professional flyers, promotional graphics and
      visual content for businesses, events and brands.
    </p>
  </div>

  {/* IT Support */}
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.07]">
    <div className="flex items-start justify-between">
      <div className="text-3xl">🛠️</div>
      <span className="text-sm font-medium text-gray-600">04</span>
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
      IT Technical Support
    </h3>

    <p className="mt-4 leading-7 text-gray-400">
      Providing technical assistance, troubleshooting and
      problem-solving support to help users and systems work
      effectively.
    </p>
  </div>

</div>
```

  </div>
</section>

            {/* Skills Section */}

<section id="skills" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">

```
{/* Section Heading */}
<div className="max-w-2xl">
  <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
    Skills
  </p>

  <h2 className="text-4xl font-bold md:text-5xl">
    What I work with.
  </h2>

  <p className="mt-6 text-lg leading-8 text-gray-400">
    A combination of technical, creative and problem-solving skills
    that I use to build and support digital experiences.
  </p>
</div>

{/* Skills Grid */}
<div className="mt-12 grid gap-6 md:grid-cols-2">

  {/* Frontend Development */}
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.07]">
    <div className="flex items-start justify-between">
      <div className="text-3xl">💻</div>
      <span className="text-sm font-medium text-gray-600">01</span>
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
      Frontend Development
    </h3>

    <div className="mt-6 flex flex-wrap gap-3">
      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        HTML
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        CSS
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        JavaScript
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        React
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Next.js
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Tailwind CSS
      </span>
    </div>
  </div>

  {/* UI & Graphic Design */}
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.07]">
    <div className="flex items-start justify-between">
      <div className="text-3xl">🎨</div>
      <span className="text-sm font-medium text-gray-600">02</span>
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
      UI & Graphic Design
    </h3>

    <div className="mt-6 flex flex-wrap gap-3">
      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        UI Design
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Responsive Design
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Graphic Design
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Visual Design
      </span>
    </div>
  </div>

  {/* IT Support */}
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.07]">
    <div className="flex items-start justify-between">
      <div className="text-3xl">🛠️</div>
      <span className="text-sm font-medium text-gray-600">03</span>
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
      IT Technical Support
    </h3>

    <div className="mt-6 flex flex-wrap gap-3">
      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Technical Troubleshooting
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        User Support
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        System Maintenance
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Problem Solving
      </span>
    </div>
  </div>

  {/* Currently Learning */}
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.07]">
    <div className="flex items-start justify-between">
      <div className="text-3xl">🚀</div>
      <span className="text-sm font-medium text-gray-600">04</span>
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
      Currently Learning
    </h3>

    <div className="mt-6 flex flex-wrap gap-3">
      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Advanced JavaScript
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Modern React
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Next.js
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Cybersecurity
      </span>
    </div>
  </div>

</div>
```

  </div>
</section>


           {/* Projects Section */}

<section id="work" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">

```
{/* Section Heading */}
<div className="max-w-2xl">
  <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
    Selected Work
  </p>

  <h2 className="text-4xl font-bold md:text-5xl">
    Projects I&apos;ve worked on.
  </h2>

  <p className="mt-6 text-lg leading-8 text-gray-400">
    A selection of projects that showcase my interests in
    frontend development, design and digital experiences.
  </p>
</div>

{/* The Sports Digest */}
<div className="group mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:border-blue-500/30">

  {/* Project Preview */}
  <div className="flex min-h-[320px] items-center justify-center bg-gradient-to-br from-blue-950 via-black to-gray-900 p-8">
    <div className="text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
        Featured Project
      </p>

      <h3 className="mt-4 text-4xl font-bold md:text-5xl">
        The Sports Digest
      </h3>

      <p className="mt-4 text-gray-400">
        Where Sport Meets Story
      </p>
    </div>
  </div>

  {/* Project Information */}
  <div className="p-8 md:p-10">

    <div className="flex items-start justify-between gap-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
          Web Development
        </p>

        <h3 className="mt-3 text-3xl font-bold">
          A modern sports news experience
        </h3>
      </div>

      <span className="hidden text-sm font-medium text-gray-600 md:block">
        01
      </span>
    </div>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
      The Sports Digest is a sports-focused web platform designed
      to bring news, live match information and engaging sports
      content together in one digital experience.
    </p>

    {/* Technologies */}
    <div className="mt-8 flex flex-wrap gap-3">
      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Next.js
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        React
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        JavaScript
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Tailwind CSS
      </span>
    </div>

    {/* Project Links */}
    <div className="mt-8 flex flex-wrap gap-4 animate-fade-up">
      <a
        href="https://sports-digest.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
      >
        View Live Project →
      </a>

      <a
        href="https://github.com/sledmonds18"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-gray-700 px-6 py-3 font-semibold text-white transition hover:bg-gray-900"
      >
        View GitHub →
      </a>
    </div>

  </div>

</div>
  ```    

{/* Graphic Design */}
<div className="group mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:border-purple-500/30">

{/* Project Preview */}
<div className="overflow-hidden bg-gray-950">
  <Image
    src="/images/sametro-design.jpg"
    alt="Sametro promotional graphic design"
    width={1600}
    height={900}
    className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
  />
</div>

  {/* Project Information */}
  <div className="p-8 md:p-10">

    <div className="flex items-start justify-between gap-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
          Graphic Design
        </p>

        <h3 className="mt-3 text-3xl font-bold">
          Creative designs that communicate.
        </h3>
      </div>

      <span className="hidden text-sm font-medium text-gray-600 md:block">
        02
      </span>
    </div>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
      A collection of promotional flyers, business graphics and
      event designs created to help brands communicate their message
      visually.
    </p>

    {/* Design Categories */}
    <div className="mt-8 flex flex-wrap gap-3">
      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Flyer Design
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Branding
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Promotional Design
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Visual Design
      </span>
    </div>

  </div>
</div>

  ```

{/* UI Design */}
<div className="group mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:border-cyan-500/30">

  {/* Project Preview */}
  <div className="flex min-h-[320px] items-center justify-center bg-gradient-to-br from-cyan-950 via-black to-gray-900 p-8">
    <div className="text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Interface Design
      </p>

      <h3 className="mt-4 text-4xl font-bold md:text-5xl">
        UI Design
      </h3>

      <p className="mt-4 text-gray-400">
        Clean, intuitive and user-focused interfaces
      </p>
    </div>
  </div>

  {/* Project Information */}
  <div className="p-8 md:p-10">

    <div className="flex items-start justify-between gap-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
          UI Design
        </p>

        <h3 className="mt-3 text-3xl font-bold">
          Interfaces designed for people.
        </h3>
      </div>

      <span className="hidden text-sm font-medium text-gray-600 md:block">
        03
      </span>
    </div>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
      Exploring clean and intuitive user interfaces that balance
      visual design, usability and functionality across different
      screen sizes.
    </p>

    {/* Design Skills */}
    <div className="mt-8 flex flex-wrap gap-3">
      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        UI Design
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        User Experience
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Responsive Design
      </span>

      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
        Prototyping
      </span>
    </div>

  </div>
</div>
```

  </div>
</section>


              {/* Contact Section */} 
              
        <section id="contact" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 transition duration-300 hover:border-blue-500/30">

              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
                  Get In Touch
                </p>

                <h2 className="text-4xl font-bold md:text-6xl">
                  Let&apos;s build something great together.
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-400">
                  Whether you need a website, a user interface, graphic
                  design or technical support, I&apos;d love to hear about
                  your project and see how I can help.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">

                            <a
              href="tel:+233532551180"
              className="rounded-full border border-gray-700 px-6 py-3 font-semibold text-white transition hover:bg-gray-900"
            >
              Call Me →
            </a>

                <a
                  href="mailto:sylvesteredmonds18@gmail.com"
                  className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
                >
                  Email Me →
                </a>

                <a
                  href="#work"
                  className="rounded-full border border-gray-700 px-6 py-3 font-semibold text-white transition hover:bg-gray-900"
                >
                  View My Work
                </a>

              </div>

            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
    );
  }

