import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function OurProducts() {
  const productContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(".second-product", {
      right: 0,
      rotate: "0",
      scrollTrigger: {
        trigger: ".product-connection",
        start: "bottom bottom",
        end: "+=20%",
        scrub: true,
      },
    });

    gsap.to(".third-product", {
      right: 0,
      rotate: "0",
      scrollTrigger: {
        trigger: ".product-sustain",
        start: "bottom bottom",
        end: "+=20%",
        scrub: true,
      },
    });

    gsap.to(".product-float-img-1", {
      // opacity: 0,
      scale: 0,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".product-design",
        start: "top top",
        end: "+=20%",
        scrub: true,
      },
    });

    gsap.to(".product-float-img-2", {
      // opacity: 0,
      scale: 1,
      // stagger: 0.4,
      scrollTrigger: {
        trigger: ".product-connection",
        start: "bottom bottom",
        end: "+=20%",
        scrub: true,
      },
    });

    gsap.to(".product-float-img-2", {
      // opacity: 0,
      scale: 0,
      // stagger: 0.4,
      scrollTrigger: {
        trigger: ".product-connection",
        start: "top top",
        end: "+=20%",
        scrub: true,
      },
    });

    gsap.to(".product-float-img-3", {
      // opacity: 0,
      scale: 1,
      // stagger: 0.4,
      scrollTrigger: {
        trigger: ".product-sustain",
        start: "bottom bottom",
        end: "+=20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="py-[5rem]">
      <div className="px-[15rem] w-full">
        <div className="container">
          <div className="grid gap-8 grid-cols-12">
            <div className="row-start-1 row-end10 col-start-4 col-end-10">
              <h2 className="leading-[1] font-mauline text-[4rem] mb-4 text-center">
                We create <br /> products that <br /> focus on
              </h2>
            </div>
            {/*  */}
            <div
              ref={productContainerRef}
              className="row-start-2 col-start-3 col-end-11 row-end-3"
            >
              <div className="grid grid-cols-[3fr_1fr_4fr] grid-rows-[auto] auto-cols-[1fr] gap-8">
                <div className="row-start-[span_1] border4 col-start-[span_1] row-end-[span_1] col-end-[span_1]">
                  <div className="min-h-[100vh] flex items-center">
                    <div className="space-y-4 product-design">
                      <h3 className="font-mauline text-2xl">Design</h3>
                      <p className="text-sm">
                        We partner with independent artists to keep our
                        greetings design-forward. We have thousands of
                        beautiful, fun, and creative cards to choose from. Our
                        product is clean and easy to use.
                      </p>
                    </div>
                  </div>

                  <div className="min-h-[100vh] flex items-center">
                    <div className="space-y-4 product-connection">
                      <h3 className="font-mauline text-2xl">Connection</h3>
                      <p className="text-sm">
                        Our products put an emphasis on helping real people
                        connect with the ones they love.
                      </p>
                    </div>
                  </div>

                  <div className="min-h-[100vh] flex items-center">
                    <div className="space-y-4 product-sustain">
                      <h3 className="font-mauline text-2xl">Sustainability</h3>
                      <p className="text-sm">
                        Our greetings are 100% digital, meaning we don&apos;t
                        contribute to the 2.5M trees cut down each year for
                        cards. 75M lbs of plastic goes to waste every year for
                        gift cards. Our gift store is made up of 90% e-gifts so
                        you can send a gift now without compromising the future.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row-start-1 row-end-2 col-start-3 col-end-4 h-[100vh] sticky top-0 flex items-end justify-center flex-col border4 overflowhidden">
                  <div className="absolute w-full ">
                    <img
                      src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bbcfd383b02fa57ba8360_about-mission-03.webp"
                      alt=""
                      className="w-full h-full rounded-2xl  opacity-0 top-0 "
                    />

                    <img
                      src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/652449ef97483c3d8a1e9f3b_10.webp"
                      alt=""
                      className="absolute w-[95px] z-[1000] h-[95px] product-float-img-1 -top-[15%] left-[7%]"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/652449ee6428aa59fe443695_03.webp"
                      alt=""
                      className="absolute w-[133px] z-[1000] h-[135px] product-float-img-1 -bottom-[17%] -rotate-[17deg] right-[1%]"
                    />

                    <img
                      src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/652449efe3d029fa14ace127_09.webp"
                      alt=""
                      className="absolute rotate-12 w-[125px] h-[139px] z-[1000] product-float-img-2 scale-0 -top-[13%] -right-[12%] "
                    />
                    <img
                      src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/652449ef6226c78b71f32ce4_05.webp"
                      alt=""
                      className="absolute w-[95px] h-[117px] z-[1000] product-float-img-2 scale-0 -bottom-[10%] rotate-12 -left-[19%]"
                    />

                    <img
                      src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655cfe4e4c3bc91e73f7218b_11.webp"
                      alt=""
                      className="absolute w-[95px] z-[1000] scale-0 product-float-img-3 h-[95px] -top-[8%] -rotate-[17deg] -left-[19%]"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655cfe4e99cfc1da29359429_12.webp"
                      alt=""
                      className="absolute w-[95px] z-[1000] scale-0 product-float-img-3 h-[95px] -bottom-[4%] -rotate-[17deg] -right-[22%]"
                    />
                  </div>
                  <div className="relative z-[101] border4 rounded-2xl overflow-hidden">
                    {/*  */}
                    <img
                      src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bbcfd86c9234dcfa64535_about-mission-01.webp"
                      alt=""
                      className="w-full h-full rounded-2xl"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bbcfd0df66913cf48a411_about-mission-02.webp"
                      alt=""
                      className="w-full h-full rounded-2xl absolute second-product top-0 -right-[130%] rotate-[35deg] origin-center z30"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bbcfd383b02fa57ba8360_about-mission-03.webp"
                      alt=""
                      className="w-full h-full rounded-2xl absolute third-product top-0 rotate-[35deg] -right-[130%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
