import AboutHero from "../components/about/hero";
import OurNumbers from "../components/about/our-numbers";
import OurProducts from "../components/about/our-products";
import Video from "../components/about/video";

export default function AboutPage() {
  return (
    <main className="">
      <AboutHero />
      <Video />
      <OurProducts />
      <OurNumbers />
    </main>
  );
}
