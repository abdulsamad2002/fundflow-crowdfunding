import Home from "@/Components/Home";

export const metadata = {
  title: "FundFlow - Where Ideas Find Support",
  description:
    "Launch your project, share your story, and connect with a community ready to help bring your vision to life.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden">
      <Home />
    </main>
  );
}
