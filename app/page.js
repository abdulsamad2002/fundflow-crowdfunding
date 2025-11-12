import Home from "@/Components/Home";

export const metadata = {
  title: "FundFlow - Where Ideas Find Support",
  description:
    "Launch your project, share your story, and connect with a community ready to help bring your vision to life."
};

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden">
      <Home />
    </main>
  );
}
