import ReactLenis from "lenis/react";
import Footer from "../components/home/footer";
import Givingli from "../components/home/givingli";
import Hero from "../components/home/hero";
import MadeSimple from "../components/home/made-simple";
import Possibilities from "../components/home/possibilities";
import Ready from "../components/home/ready";

export default function HomePage() {
  return (
    <ReactLenis root options={{}}>
      <div>
        {/* <div className="flex justify-center text-center"> */}
        <Hero />
        {/* </div> */}
        <Possibilities />
        <MadeSimple />
        <Givingli />
        <Ready />
        <Footer />
        {/* <section className="h-[100dvh] w-full bg-amber-200"></section> */}
      </div>
    </ReactLenis>
  );
}
