import { createFileRoute } from "@tanstack/react-router";
import { LoveApp } from "@/components/love/LoveApp";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <LoveApp />;
}
