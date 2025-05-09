import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

// eslint-disable-next-line
import "swiper/css";
// eslint-disable-next-line
import "swiper/css/effect-fade";
// eslint-disable-next-line
import "swiper/css/autoplay";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const colors = [
  "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65258fc8fbb47fb7bb15c484_stop-motion-img-01.webp",
  "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65258fc9af9773d82c8e938b_stop-motion-img-02.webp",
  "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65258fc8974ce249b664e95e_stop-motion-img-03.webp",
  "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65258fc9b946af99ef6b4442_stop-motion-img-04.webp",
];
export default function Ready() {
  const readyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: readyRef.current,
        start: "top bottom",
        end: "+=100%",
        scrub: true,
      },
    });
    tl.to("body", {
      background: "#b8cedc",
    });
  }, []);
  return (
    <section
      ref={readyRef}
      className="w-full max-w-[85rem] min-h-[100vh] mx-auto px-16 py-40"
    >
      <div className="h-[85vh] w-full p-14 rounded-[2rem] overflow-hidden relative bg-red-400 flex justify-between">
        <div className="w-full h-full absolute top-0 left-0">
          <Swiper
            style={{
              width: "100%",
              height: "100%",
            }}
            modules={[EffectFade, Autoplay]}
            effect="fade"
            autoplay={{ delay: 300 }}
          >
            {colors.map((item, i) => (
              <SwiperSlide>
                <div
                  key={i}
                  className={` w-full flex justify-center items-center h-full rounded-xl`}
                >
                  <img
                    src={item}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full max-w-[28.75rem] relative z-50">
          <h2 className="text-[3rem] leading-[1] mb-4 font-bold text-white">
            Ready to start giving?
          </h2>
          <div className="inline-flex h-10 w-[132px] mt-8 justify-center items-center bg-white rounded-full">
            Get Givingli
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
}
