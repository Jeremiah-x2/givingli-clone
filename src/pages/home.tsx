import Footer from "../components/footer";
import Givingli from "../components/givingli";
import Hero from "../components/hero";
import MadeSimple from "../components/made-simple";
import Possibilities from "../components/possibilities";
import Ready from "../components/ready";

export default function HomePage() {
  return (
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
  );
}
