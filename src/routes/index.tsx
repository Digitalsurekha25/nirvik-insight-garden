import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BCC Live — Roulette Prediction Dashboard" },
      { name: "description", content: "BCC live roulette analysis with priority tiers, combined evidence and hit tracking." },
      { property: "og:title", content: "BCC Live — Roulette Prediction Dashboard" },
      { property: "og:description", content: "Priority tiers, confidence ranks and hit tracking with graphs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/bcc.html"
      title="BCC Live"
      className="block h-screen w-full border-0"
    />
  );
}
