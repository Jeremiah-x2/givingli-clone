import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Givingli() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const leftImages = document.querySelectorAll(".giving-img-left");
    const rightImages = document.querySelectorAll(".giving-img-right");
    gsap.registerPlugin(ScrollTrigger);

    const bgTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "+=100%",
        scrub: true,
        // pin: true,
        // pinSpacing: false,
      },
    });
    bgTl.to("body", { background: "#333333" });

    bgTl.to(".givingli-title", { color: "white" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "40% bottom",
        end: "bottom bottom",
        scrub: true,
        // pin: true,
      },
    });
    // tl.to(".left-images div", {
    //   // background: "red",
    //   x: "-30",
    //   stagger: 0.1,
    // });
    leftImages.forEach((item) => {
      tl.to(
        item,
        {
          x: "-90%",
          y: () => {
            if (item.classList.contains("giving-left-top")) return "-40%";
            if (item.classList.contains("giving-left-bottom")) return "40%";
            else {
              return "0";
            }
          },
          stagger: 0.3,
        },
        "0"
      );
    });
    rightImages.forEach((item) => {
      tl.to(
        item,
        {
          x: "90%",
          y: () => {
            if (item.classList.contains("giving-right-top")) return "-40%";
            if (item.classList.contains("giving-right-bottom")) return "40%";
            else {
              return "0";
            }
          },
          stagger: 1,
        },
        "0"
      );
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="hello grid mt-40 relative grid-cols-12 auto-cols-[1fr] grid-rows-[auto] min- h-[100dvh] mb-20"
    >
      <h3 className="col-start-5 text-[#333] givingli-title font-mauline col-end-9 text-center font-extrabold text-[44px] leading-[1.2]">
        Givingli <br />
        Cash
      </h3>

      <div className="row-start-2 col-span-12 row-end- flex justify-center items-center relative ">
        <div className="img-left giving-img-left giving-left-top w-[17rem] rounded-2xl overflow-hidden absolute bg-red-400 rotate-[30deg]  origin-[100%] -translate-y-[40%] z-40">
          <img
            src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6529764b75e7fb5018596db9_gifts-card-nordstrom.webp"
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div className="img-left giving-img-left w-[17rem] overflow-hidden rounded-2xl z-30 absolute bg-red-400 ">
          <img
            src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254282816c4f99f9a04c7b_gifts-card-target.webp"
            alt=""
            className="w-full"
          />
        </div>
        <div className="img-left giving-img-left giving-left-bottom w-[17rem] rounded-2xl overflow-hidden absolute bg-red-400 -rotate-[30deg]  origin-[100%] translate-y-[40%]">
          <img
            src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce094aa04d73fdff6d4_wallet-card-nike.webp"
            alt=""
            className="w-full"
          />
        </div>

        <div className="w-[17rem] giving-img-right giving-right-top rounded-2xl overflow-hidden absolute bg-red-400 -rotate-[30deg] tralate-x-[90%] origin-[0%] -translate-y-[40%] z-40">
          <img
            src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce001c0c827c6bac1fb_wallet-card-starbucks.webp"
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div className="w-[17rem] giving-img-right overflow-hidden rounded-2xl z-30 absolute bg-red-400 trslate-x-[90%]">
          <img
            src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254283c535bafbfa5b3720_gifts-card-sephora.webp"
            alt=""
            className="w-full"
          />
        </div>
        <div className="w-[17rem] giving-img-right giving-right-bottom rounded-2xl overflow-hidden absolute bg-red-400 rotate-[30deg] anslate-x-[90%] origin-[0%] translate-y-[40%]">
          <img
            src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254282d3dc76c4aa996868_gifts-card-amazon.webp"
            alt=""
            className="w-full"
          />
        </div>

        <div className="w-full max-w-[276px] relative z-50">
          <div className="w-full absolute p-[3.5%_4.5%_3.5%_4%] inset-[0%] [mask-size:cover] [mask-repeat:no-repeat] [mask-position:center] [mask-image:url(https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6524580ed7a5a72f93403af6_phone_mockup_mask.svg)]">
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65258848b946af99ef62cc70_givingli-cash-ui.svg"
              alt=""
              className="w-full z-20"
            />
          </div>
          {/*  */}
          <div className="absolute px-[4%] left-0 right-0 top-[15%] w-full">
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525891610faf129a1885e87_givingli-cash-card.webp"
              alt=""
              className="w-full"
            />
          </div>
          {/*  */}
          <div className="absolute top-[55%] left-[2%] right-[2%] px-[10%] text-center">
            <div className="">Select Amount</div>
            {/* <div className="grid grid-cols-[1fr_1fr_1fr] items-center">
              <div className="border-4 w-[70%] pb-[70%]">
                <Minus />
              </div>
              <h3>$10</h3>
              <div>
                <Plus />
              </div>
            </div> */}
          </div>
          {/*  */}
          <div className="w-full z-30 relative">
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6524472ece64b75ac0024818_phone_mockup.webp"
              alt=""
              className="w-full"
            />
          </div>
        </div>
        {/* <div
          ref={imageContainerRef}
          className="relative  max-w-[22.5rem] w-full h-[459px] flex justify-center items-center"
        >
          <div className="flex absolute w-full h-full  flex-col  justify-center">
            <div className=" relative -translate-x-[10%] left-images">
              <div className="w-[17rem] rounded-lg relative h-[110px] bg-red-200 rotate-[15deg] -z-10">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6529764b75e7fb5018596db9_gifts-card-nordstrom.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[176px] mid rounded-lg relative h-[110px]  bg-green-200 -z-20"></div>
              <div className="w-[176px] rounded-lg relative h-[110px] bg-red-200 -rotate-[15deg] -z-30"></div>
            </div>
          </div>

          <img
            src="/images/phone-mock.png"
            alt=""
            className="w-full h-full object-cover z-[1000] relative"
          />
        </div> */}
      </div>

      <div className="col-start-1 col-end-13 text-center font-poppins text-sm mt-4 text-[#3e627c]">
        <p>
          Givingli Cash gives your family and friends the
          <br />
          ability to choose from any of our 300+ gifts. No <br /> more gifting
          anxiety. No more unwanted gifts.
        </p>
      </div>
    </section>
  );
}
