import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Altın Saray Düğün Salonları",
    categories: ["Wedding"],
    lang: "tr",
    icons: [
      {
        src: "/favicon.png",
        sizes: "1000x1000",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Altın Saray Düğün Salonları",
        short_name: "Altın Saray",
        description: "Altın Saray Düğün Salonları",
        url: "/",
        icons: [
          {
            src: "/favicon.png",
            sizes: "1000x1000",
            purpose: "any",
          },
        ],
      },
    ],
    short_name: "Altın Saray",
    start_url: "/",
    theme_color: "#e2cb65",
    background_color: "#e2cb65",
    description: "Altın Saray Düğün Salonları",
  };
}
