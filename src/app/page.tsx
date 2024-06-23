import Grid from "@/components/Grid";
import { Navbar } from "@/components/Navbar";
import { Vortex } from "@/components/Vortex";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { GlareCard } from "@/components/ui/glare-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "./data";
import MagicButton from "@/components/ui/MagicButton";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

const myApproach = [
  {
    phase: "Phase 1",
    title: "Planning & Strategy",
    description:
      " We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
  },
  {
    phase: "Phase 2",
    title: "Development & Progress Update",
    description:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way",
  },
  {
    phase: "Phase 3",
    title: "Development & Launch",
    description:
      "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
  },
];
const DummyContent = () => {
  return (
    <Image
      src="/observatory.jpg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const tabs = [
  {
    title: "HR Dashboard",
    value: "HR Dashboard",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>HR Dashboard</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Crypto Staking App",
    value: "Crypto Staking App",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Crypto Staking App</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Adexports",
    value: "Adexports",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Adexports</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Capabara",
    value: "Capabara",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Capabara</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Neemiya",
    value: "Neemiya",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Neemiya</p>
        <DummyContent />
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen bg-black flex-col items-center justify-between">
      <div className="mx-auto max-w-screen rounded-md h-[40rem] overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="relative z-10 text-lg md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Hello, I am Prayag Bagthariya
          </h2>
          <p className="text-white text-sm  max-w-4xl mt-6 text-center">
            Welcome to my digital portfolio! With 1.5 years of hands-on
            experience, I specialize in building dynamic and responsive web
            applications using a range of modern technologies. My expertise
            includes Next.js, Vite.js, React Router DOM, Tailwind CSS, React
            Query, Redux Toolkit, Zustand, Shadcn, and Bootstrap. Here is a
            glimpse of what I can do for you:
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Button>Connect with me!!!</Button>
          </div>
        </Vortex>
      </div>
      <Grid />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          My approach
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myApproach &&
            myApproach.map((myApporach, index) => (
              <GlareCard
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-600 to-black rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <p className="text-white font-bold text-xl md:text-2xl mt-4 mb-2 text-center">
                  {myApporach.phase}
                </p>
                <p className="text-white text-lg md:text-xl mb-4 text-center">
                  {myApporach.title}
                </p>
                <p className="text-white text-base">{myApporach.description}</p>
              </GlareCard>
            ))}
        </div>
      </div>

      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
        <h2 className="text-white md:text-4xl font-sans text-xl mb-4">
          Some of my projects
        </h2>
        <Tabs tabs={tabs} />
      </div>

      <div className=" rounded-md flex flex-col w-screen antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-neutral-500 max-w-xl mx-auto my-2 text-sm md:text-sm text-center relative z-10">
            Let&rsquo;s discuss which idea you are passionate about and how we
            can help you. We are always happy to hear from you and will get back
            to you as soon as possible. Thank you for your interest in our
            services. Have a great day!
          </p>
          <input
            type="text"
            placeholder=""
            className="rounded-lg border text-white border-neutral-800 focus:ring-2 focus:ring-yellow-900 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 px-4 py-2 text-sm md:text-base"
          />
          <div className=" flex justify-center mt-4 text-center">
            <MagicButton
              icon={
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              }
              title="Let's get in touch"
              position="right"
            />
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </main>
  );
}
