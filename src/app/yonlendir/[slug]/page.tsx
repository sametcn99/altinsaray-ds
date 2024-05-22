import { redirectLinks } from "@/lib/redirect";
import { permanentRedirect } from "next/navigation";

interface Params {
  slug: string;
}

export function generateMetada({ params }: { params: Params }) {
  const page = redirectLinks.find((post) => post.title.includes(params.slug));
  if (page) {
    return {
      title: `${page.title}`,
      openGraph: {
        title: `${page.title}`,
      },
    };
  }
}

export default function Page({ params }: { params: Params }) {
  const page = redirectLinks.find((post) => post.title.includes(params.slug));
  console.log(params.slug);
  if (page) {
    permanentRedirect(page.href);
  }
  return permanentRedirect("/");
}
