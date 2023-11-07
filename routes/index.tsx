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
        <div class="bg-[#00000033] h-screen rounded-lg flex justify-center items-center flex-col">
          <section class="flex flex-wrap">undergoing changes</section>
          <Footer />
        </div>
      </main>
    </>
  );
}
