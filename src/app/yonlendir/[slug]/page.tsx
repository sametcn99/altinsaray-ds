import { redirectLinks } from "@/lib/redirect";
import { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

interface Params {
  slug: string;
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const page = redirectLinks.find((post) => post.title.includes(params.slug));
  if (page) {
    return {
      title: `${page.title}`,
      openGraph: {
        title: `${page.title}`,
      },
    };
  }
  return {
    title: "Altın Saray Düğün Salonu",
    openGraph: {
      title: "Altın Saray Düğün Salonu",
    },
  };
}

export default function Page({ params }: { params: Params }) {
  const page = redirectLinks.find((post) => post.title.includes(params.slug));
  console.log(params.slug);
  if (page) {
    permanentRedirect(page.href);
  }
  return permanentRedirect("/");
}
