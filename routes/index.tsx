import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";

interface Data {
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";

    return ctx.render({ query });
  },
};

export default function Home({ data }: PageProps<Data>) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/app.css" />
        <title>Fresh App</title>
      </Head>
      <main>
        <div class="bg-[#00000033] rounded-lg">
          <section class="text-white">
            <div class="container px-5 pt-12 mx-auto flex-col">
              <div class="lg:w-4/6 mx-auto">
                <div class="flex flex-col sm:flex-row mt-10 p-4 rounded-lg bg-gradient-to-b from-[#1e3b8ac5] to-[#1e3b8a3f] border-[1px] border-solid border-white border-opacity-20">
                  <div class="sm:w-1/3 text-center pt-8 rounded-lg">
                    <div class="w-28 h-28 rounded-full inline-flex items-center justify-center">
                      <img
                        src="/profile_img.JPG"
                        class="rounded-2xl"
                        alt=""
                      />
                    </div>
                    <div class="flex flex-col items-center text-center justify-center">
                      <h1 class="mt-4">Rob Peterson</h1>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div class=" bg-[#00000055] sm:w-2/3 sm:px-8 px-4 sm:py-8 py-4 sm:border-l border-solid border-white border-opacity-20  mt-4 pt-4 sm:mt-0 text-center sm:text-left  rounded-lg">
                    <p class="leading-normal mt-3 mb-4">
                      I am a junior Software Developer. Prior to becoming a
                      Software Developer, I was a student and in the U.S.Army
                      for 5 years where I learned and polished skills such as
                      Team Work, Time Management, Organization, Comunication,
                      and Problem Sovling to accomplish task in a timely manor.
                      I am eagar to work as a Software Developer, gain
                      experience, and to learn from others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="text-white">
            <div class="container px-5 pt-12 mx-auto flex-col">
              <div class="lg:w-4/6 mx-auto">
                <div class="flex flex-col items-center justify-center mt-10 p-4 rounded-lg bg-gradient-to-b from-[#1e3b8ac5] to-[#1e3b8a3f] border-[1px] border-solid border-white border-opacity-20">
                  <div class="pb-4">
                    <h1>Projects</h1>
                  </div>
                  <div class="flex flex-col items-center sm:flex-row">
                    <div class="flex flex-col items-center bg-[#00000055] w-auto h-auto rounded-lg p-4 m-2">
                      <h1>robrpete.github.io</h1>
                      <a href="https://github.com/robrpete/robrpete.github.io">
                        <img
                          src="/space-octopus.jpg"
                          class="h-20 w-20 rounded-full"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="flex flex-col items-center bg-[#00000055] w-auto h-auto rounded-lg p-4 m-2">
                      <h1>Smite.gg</h1>
                      <a href="https://github.com/robrpete/Smite.gg">
                        <img
                          src="/smite-bolt.jpg"
                          class="h-20 w-20 rounded-full object-cover"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="flex flex-col items-center bg-[#00000055] w-auto h-auto rounded-lg p-4 m-2">
                      <h1>todo-list</h1>
                      <a href="https://github.com/robrpete/todo-list">
                        <img
                          src="/todo-list.png"
                          class="h-20 w-20 rounded-full object-cover"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="flex flex-col items-center bg-[#00000055] w-auto h-auto rounded-lg p-4 m-2">
                      <h1>AoC</h1>
                      <a href="https://github.com/robrpete/adventofcode">
                        <img
                          src="/tbd.png"
                          class="h-20 w-20 rounded-full"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="text-gray-400">
            <div class="container px-5 py-24 mx-auto">
              <div class="lg:w-4/6 mx-auto">
                <div class="flex flex-wrap -m-4">
                  <div class="p-4 w-full md:w-1/3">
                    <div class="h-full overflow-hidden bg-gradient-to-b from-[#1e3b8ac5] to-[#1e3b8a3f] text-[#fff] border-[1px] border-solid border-white border-opacity-20 rounded-2xl shadow-2xl">
                      <div class="p-6">
                        <h1 class="text-xl font-bold text-white mb-3">
                          Skills
                        </h1>
                        <div class="w-12 h-1 rounded mt-2 mb-4"></div>
                        <ul class="leading-normal mt-3 mb-3">
                          <li class="pb-1 pt-6 hover:text-white flex">
                            <img
                              src="/python-logo.png"
                              class="h-5 w-5 mr-2"
                              alt="python-logo"
                            />

                            Python
                          </li>
                          <li class="py-3 hover:text-white flex">
                            <img
                              src="/javascript-logo.png"
                              class="h-5 w-5 mr-2"
                              alt="javascript-logo"
                            />

                            JavaScript
                          </li>
                          <li class="py-3 hover:text-white flex">
                            <img
                              src="/html-logo.png"
                              class="h-5 w-5 mr-2"
                              alt="html-logo"
                            />

                            HTML
                          </li>
                          <li class="py-3 hover:text-white flex">
                            <img
                              src="/css-logo.png"
                              class="h-5 w-5 mr-2"
                              alt="html-logo"
                            />

                            CSS
                          </li>
                          <li class="py-3 hover:text-white flex">
                            <img
                              src="/django-logo.png"
                              class="h-5 w-5 mr-2"
                              alt="html-logo"
                            />

                            Django
                          </li>
                          <li class="py-3 hover:text-white flex">
                            <img
                              src="/favicon.ico"
                              class="h-5 w-5 mr-2"
                              alt=""
                            />

                            Fresh
                          </li>
                          <li class="py-3 hover:text-white flex">
                            <img
                              src="/react-logo.png"
                              class="h-5 w-5 mr-2"
                              alt=""
                            />

                            React
                          </li>
                          <li class="py-3 hover:text-white flex">
                            <img
                              src="/vue-logo.png"
                              class="h-5 w-5 mr-2"
                              alt=""
                            />

                            Vue
                          </li>
                          <li class="py-3 hover:text-white flex">
                            <img
                              src="/node-logo.png"
                              class="h-5 w-5 mr-2"
                              alt=""
                            />

                            Node
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 w-full md:w-2/3 ">
                    <div class="h-full overflow-hidden bg-gradient-to-b from-[#1e3b8ac5] to-[#1e3b8a3f] text-[#fff] border-[1px] border-solid border-white border-opacity-20 rounded-2xl shadow-2xl">
                      <div class="p-6">
                        <h1 class="text-xl font-bold mb-3">
                          Experience
                        </h1>
                        <div class="w-12 h-1 rounded mt-2 mb-4"></div>
                        <article class="text-gray-200 overflow-hidden">
                          <div class="container px-5 py-2 mx-auto">
                            <div class="my-8 divide-y-1 divide-[rgba(255,255,255)]">
                              <div class="py-8 flex flex-wrap md:flex-nowrap">
                                <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                  <span class="font-semibold text-white">
                                    PDX cod guild
                                  </span>
                                  <span class="mt-1 text-gray-200 text-sm">
                                    Jul 2022 - Oct 2022
                                  </span>
                                </div>
                                <div class="md:flex-grow">
                                  <h2 class="text-2xl font-medium text-white mb-2">
                                    14 week Python Developer
                                  </h2>
                                  <p class="leading-normal mt-3">
                                    Foundation of Python
                                  </p>
                                  <p class="leading-normal mt-3">
                                    Django and Flask
                                  </p>
                                  <p class="leading-normal mt-3">
                                    Capstone Project
                                  </p>
                                </div>
                              </div>
                              <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                                <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                  <span class="font-semibold text-white">
                                    Student
                                  </span>
                                  <span class="mt-1 text-gray-200 text-sm">
                                    Jan 2020 - April 2022
                                  </span>
                                </div>
                                <div class="md:flex-grow ml-4">
                                  <h2 class="text-2xl font-medium text-white mb-2">
                                    BGSU
                                  </h2>
                                  <p class="leading-normal mt-3">
                                    Science AS
                                  </p>
                                </div>
                              </div>
                              <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                                <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                  <span class="font-semibold text-white">
                                    U.S. Army
                                  </span>
                                  <span class="mt-1 text-gray-200 text-sm">
                                    Aug 2014 - Aug 2018
                                  </span>
                                </div>
                                <div class="md:flex-grow ml-4">
                                  <h2 class="text-2xl font-medium text-white mb-2">
                                    Engineer
                                  </h2>
                                  <p class="leading-normal mt-3">
                                    Leadership
                                  </p>
                                  <p class="leading-normal mt-3">
                                    Teamwork
                                  </p>
                                  <p class="leading-normal mt-3">
                                    Time Management
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
