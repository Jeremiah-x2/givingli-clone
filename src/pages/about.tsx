import { useGSAP } from "@gsap/react";
import AboutHero from "../components/about/hero";
import OurNumbers from "../components/about/our-numbers";
import OurProducts from "../components/about/our-products";
import Testimonies from "../components/about/testimonies";
import Video from "../components/about/video";
import WorkTogether from "../components/about/work-together";
import Footer from "../components/home/footer";
import Ready from "../components/home/ready";
import gsap from "gsap";

export default function AboutPage() {
  useGSAP(() => {
    gsap.to("body", { background: "rgba(252,250,244,1)" });
  }, []);
  return (
    <main className="">
      <AboutHero />
      <Video />
      <OurProducts />
      <OurNumbers />
      <WorkTogether />
      <Testimonies />
      <Ready />
      <Footer />
    </main>
  );
}
