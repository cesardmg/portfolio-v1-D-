import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <header className="font-medium">
        <nav className="container flex flex-row items-center justify-between max-w-6xl px-40 mx-auto mt-4 mb-2 ">
          <div className="items-center text-2xl ">
            <h2 className="">César Camacho</h2>
          </div>
          <div className="text-xl">
            <a className="ml-8 hover:underline" href="#about">
              About
            </a>
            <a className="ml-8 hover:underline" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto">
        {/*  ---------------------------------- Hero ----------------------------------  */}

        <div id="Hero Section" className="container mx-auto ">
          <div className="container flex items-center justify-between flex-shrink-0 max-w-4xl mx-auto mt-9">
            <div className="" id="Hero Content">
              <h1 className="font-medium leading-snug">
                Hello, I’m Cesar! <br /> Front End Developer <br /> Focused
                Next.js
              </h1>
              <div className="flex justify-between w-2/5 mt-5">
                <a href="https://twitter.com/thejamdev" target="_blank">
                  <svg
                    id="twitter"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="https://github.com/ifreeDavid" target="_blank">
                  <svg
                    id="github"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/cesar-cm/" target="_blank">
                  <svg
                    id="linkedin"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div id="Hero Image" className="max-w-md">
              <img
                className="transform rounded-full scale-35"
                src="images/profile.jpg"
              />
            </div>
          </div>
        </div>

        {/*  ---------------------------------- Skils ----------------------------------  */}

        <div id="about" className="flex flex-col mx-auto mt-36 mb-36 ">
          <h2 className="text-4xl font-medium">Skills</h2>
          <div className="w-3/5 mt-5">
            <p className="text-xl ">
              I'm passionate about technologies and tools with big communities
              and high satisfaction rates.
            </p>
          </div>

          <div className="grid items-center w-4/5 grid-cols-3 mt-10 font-semibold text-center gap-x-10 gap-y-5 ">
            <div className="flex flex-col p-6 overflow-hidden bg-gray-200 rounded-3xl justify-items-center ">
              <img
                src="images/js.png"
                className="object-contain w-full h-12"
              ></img>
              <p>Javascript</p>
            </div>
            <div className="flex flex-col p-6 overflow-hidden bg-gray-200 rounded-3xl justify-items-center ">
              <img
                src="images/react.png"
                className="object-contain w-full h-12"
              ></img>
              <p>React</p>
            </div>
            <div className="flex flex-col p-6 overflow-hidden bg-gray-200 rounded-3xl justify-items-center ">
              <img
                src="images/next.png"
                className="object-contain w-full h-12"
              ></img>
              <p>Next.js</p>
            </div>
            <div className="flex flex-col p-6 overflow-hidden bg-gray-200 rounded-3xl justify-items-center ">
              <img
                src="images/node.png"
                className="object-contain w-full h-12"
              ></img>
              <p>Node</p>
            </div>
            <div className="flex flex-col p-6 overflow-hidden bg-gray-200 rounded-3xl justify-items-center ">
              <img
                src="images/figma.png"
                className="object-contain w-full h-12"
              ></img>
              <p>Figma</p>
            </div>
            <div className="flex flex-col p-6 overflow-hidden bg-gray-200 rounded-3xl justify-items-center ">
              <img
                src="images/webflow.png"
                className="object-contain w-full h-12"
              ></img>
              <p>Webflow</p>
            </div>
          </div>
        </div>
        {/*  ---------------------------------- Projects ----------------------------------  */}

        <div id="Projects" className="mb-36">
          <h2 className="text-4xl font-medium">What I’ve been working on</h2>
          <div className="w-4/5 mt-5">
            <p className="text-xl">
              I give prority to projects that are free and useful for others.
              Here is a selection of my favorite ones.
            </p>
          </div>
          <div className="grid grid-cols-2 mt-20 gap-x-32 gap-y-20">
            <div>
              <div className="transform shadow-md ">
                <a target="_blank" href="https://mealticketguyana.com/">
                  <img
                    src="images/portfolio-projects/portfolio-project-1.png"
                    className="object-cover rounded h-52 w-96 "
                  ></img>
                </a>
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-semibold">Mealticket Guyana</h3>
                <p className="mt-2">
                  A dedicated platform for all your Favourite Guyanese Foods
                </p>
              </div>
            </div>
            <div>
              <div className="shadow-md ">
                <a target="_blank" href="https://impactloopapp.com/">
                  <img
                    src="images/portfolio-projects/portfolio-project-2.png"
                    className="object-cover rounded h-52 w-96"
                  ></img>
                </a>
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-semibold">Impact Loop</h3>
                <p className="mt-2">
                  Platform that connects Australian and African founders to
                  business mentors and investors.
                </p>
              </div>
            </div>
            <div>
              <div className="shadow-md ">
                <img
                  src="images/project3.png"
                  className="object-cover rounded h-52 w-96 "
                ></img>
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-semibold">Notion Life Planner</h3>
                <p className="mt-2">
                  Not your regular life planner. After years of trying to find
                  it, I made a minimal planner that just works.
                </p>
              </div>
            </div>
            <div>
              <div className="shadow-md ">
                <img
                  src="images/project4.png"
                  className="object-cover rounded h-52 w-96 "
                ></img>
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-semibold">Top Resources</h3>
                <p className="mt-2">
                  A list of sites and apps where I get my information from
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  --------------------------------- Contact --------------------------------- */}
        <div id="contact" className="mb-36">
          <h2 className="text-4xl font-medium">Let’s talk!</h2>
          <div className="text-xl ">
            <p className="mt-4 ">Feel free to send me a message if: </p>
            <ul className="mt-4 mb-4 ml-6 list-disc ">
              <li>You want us to work together</li>
              <li>Have a cool project (i’m always interested!) </li>
              <li>Just want to say hi! </li>
            </ul>
            <a
              className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
              href="mailto: cesardcm99@gmail.com"
            >
              cesardcm99@gmail.com
            </a>
          </div>
        </div>
      </main>

      {/*  --------------------------------- Footer --------------------------------- */}
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </>
  );
}

{
  /* <div >
  <img className="rounded-full" src="images/profile.jpg" ></img>
</div> */
}
