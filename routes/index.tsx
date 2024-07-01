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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Teko:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <title>Fresh App</title>
      </Head>
      <main>
        <div class="bg-[#00000077] min-h-screen text-white">
          <div class="h-20"></div>
          <div class="flex flex-col items-center justify-center gap-2">
            <div class="text-center bg-[#3b82f644] h-fit w-10/12 md:w-2/4 p-2 rounded-lg flex justify-center items-center gap-8">
              <div>
                <h4 class="text-2xl">Rob</h4>
                <p class="text-xl">Software Engineer</p>
              </div>
              {/* <img src="IMG_8283 (1).JPG" alt="avt" class="h-28 rounded-lg" /> */}
            </div>
            <div class="bg-[#06b6d444] rounded-lg w-10/12 md:w-2/4 text-center pt-2">
              <p class="text-2xl">Skills</p>
              <div class="bg-[#155e7544] rounded-b-lg flex flex-wrap items-center justify-center gap-2 p-2">
                <img src="javascript-logo.png" alt="javascript" />
                <img src="node-logo.png" alt="nodejs" class="hidden sm:flex" />
                <img src="React-icon.svg.png" alt="react" class="h-10" />

                <img src="html-logo.png" alt="html" />
                <img src="css-logo.png" alt="css" />
                <img src="python-logo.png" alt="python" />
                <img
                  src="django-logo.png"
                  alt="django"
                  class="hidden sm:flex"
                />
              </div>
            </div>
            <div class="flex flex-col w-10/12 md:w-2/4 gap-2">
              <div class="rounded-lg bg-[#06b6d444] p-4  text-xl">
                As an Army veteran turned developer, I bring a unique blend of
                discipline and expertise to web development and Python
                programming. With a passion for crafting elegant solutions, I
                excel in translating complex ideas into user-friendly
                applications. My military background instilled in me a strong
                work ethic and attention to detail, qualities that shine through
                in my coding and problem-solving approach. Whether building
                responsive websites or developing robust backend systems, I
                thrive on the challenges of the digital landscape, continuously
                honing my skills to deliver efficient and innovative solutions.
              </div>
              <div>
                <div class="bg-[#3b82f655] rounded-t-lg pt-2 text-center">
                  <p class="text-2xl">Projects / Samples</p>
                </div>
                <div class="flex flex-wrap justify-center gap-2 pt-2 bg-[#3b82f644] rounded-b-lg">
                  <div class="flex items-center justify-center h-24 w-24 text-4xl">
                    updating
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
