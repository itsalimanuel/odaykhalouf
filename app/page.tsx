import Intro from "@/app/components/blocs/intro";
import AboutMe from "@/app/components/blocs/about";
import Works from "@/app/components/blocs/works";
export default function Home() {
  return (
    <main className="relative">
      <Intro />
      <AboutMe />
      <Works />
    </main>
  );
}
