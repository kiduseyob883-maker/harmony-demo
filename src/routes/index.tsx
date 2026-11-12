import { createFileRoute } from "@tanstack/react-router";
import HarmonySite from "@/components/harmony/HarmonySite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harmony Cafe — Coffee, Breakfast & Mojitos in Adama" },
      { name: "description", content: "Ethiopian coffee, fresh breakfasts, pizzas, burgers and mojitos at Harmony Cafe, Adama. View the menu and reserve on WhatsApp." },
      { property: "og:title", content: "Harmony Cafe — Adama" },
      { property: "og:description", content: "Coffee, food and friendship in perfect harmony. Explore the menu and reserve a table." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HarmonySite,
});
