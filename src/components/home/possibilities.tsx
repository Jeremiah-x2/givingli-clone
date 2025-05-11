import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Possibilities() {
  const possibilitiesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: possibilitiesRef.current,
        start: "top bottom",
        end: "+=100%",
        scrub: true,
      },
    });
    tl.to("body", { background: "#fcfaf4" });
    tl.to(".start-gifting-btn", { color: "#B8CEDC" });
  }, []);
  useGSAP(() => {
    const card1 = document.querySelector(".possibility-1");
    const card2 = document.querySelector(".possibility-2");
    const possibility1Img1 = gsap.to(".possibility-1-img-1", {
      // opacity: 0,
      rotate: "-21deg",
      paused: true,
      // duration: 0.5,
      // ease: "bounce",
    });
    const possibility1Img2 = gsap.to(".possibility-1-img-2", {
      rotate: "10deg",
      paused: true,
    });

    const possibility2Img1 = gsap.to(".possibility-2-img-1", {
      // opacity: 0,
      rotate: "-32deg",
      paused: true,
      // duration: 0.5,
      // ease: "bounce",
    });
    const possibility2Img2 = gsap.to(".possibility-2-img-2", {
      rotate: "21deg",
      paused: true,
    });
    card1?.addEventListener("mouseenter", () => {
      possibility1Img1.play();
      possibility1Img2.play();
    });
    card1?.addEventListener("mouseleave", () => {
      possibility1Img1.reverse();
      possibility1Img2.reverse();
    });

    card2?.addEventListener("mouseenter", () => {
      possibility2Img1.play();
      possibility2Img2.play();
    });
    card2?.addEventListener("mouseleave", () => {
      possibility2Img1.reverse();
      possibility2Img2.reverse();
    });
  }, []);

  useGSAP(() => {
    const card3 = document.querySelector(".possibility-3");
    const card4 = document.querySelector(".possibility-4");
    const possibility4Img = document.querySelector(".possibility-4-img");
    const walletImages = document.querySelector(".wallet-images");
    // const imageRotations: string[] = ["6deg", "18deg", "30deg"];
    let imagesAnimation: any = [];
    walletImages?.querySelectorAll("img").forEach((image, i) => {
      imagesAnimation.push(
        gsap.to(image, {
          rotate: () => {
            if (i === 0) return "-25deg";
            else if (i === 1) return "-18deg";
            else if (i === 2) return "-9deg";
            return "";
          },
          stagger: 0.5,
          delay: i * 0.1,
          paused: true,
        })
      );
    });
    card3?.addEventListener("mouseenter", () => {
      imagesAnimation.forEach((item: any) => item.play());
    });
    card3?.addEventListener("mouseleave", () => {
      imagesAnimation.forEach((item: any) => item.reverse());
    });
    //
    //
    const wrapperAnimation = gsap.to(".possibility-4-img-wrapper", {
      translateY: "-5%",
      paused: true,
    });
    const possibility4Animation = gsap.to(possibility4Img, {
      translateY: "-35%",
      paused: true,
    });
    card4?.addEventListener("mouseenter", () => {
      wrapperAnimation.play();
      possibility4Animation.play();
    });
    card4?.addEventListener("mouseleave", () => {
      wrapperAnimation.reverse();
      possibility4Animation.reverse();
    });
  }, []);

  useGSAP(() => {
    const card5 = document.querySelector(".possibility-5");
    const card6 = document.querySelector(".possibility-6");
    const card5Rows = document.querySelectorAll(".card-5-row");
    let rowsAnimations: any[] = [];
    card5Rows.forEach((item, i) => {
      rowsAnimations.push(
        gsap.to(item, {
          translateY: () => {
            if (i === 1) return "-10%";
            else {
              return "10%";
            }
          },
          paused: true,
        })
      );
    });

    const card6Animation = gsap.to(card6?.querySelector("img")!, {
      translateY: "-5%",
      paused: true,
    });
    card5?.addEventListener("mouseenter", () => {
      rowsAnimations.forEach((item) => item.play());
    });
    card5?.addEventListener("mouseleave", () => {
      rowsAnimations.forEach((item) => item.reverse());
    });
    card6?.addEventListener("mouseenter", () => {
      card6Animation.play();
    });
    card6?.addEventListener("mouseleave", () => {
      card6Animation.reverse();
    });
  }, []);

  return (
    <section
      ref={possibilitiesRef}
      className="possibilities-section max-w-[76rem] mx-auto grid grid-cols-12 grid-rows-[auto] mt-20"
    >
      <div className="mb-12 col-start-2 col-end-12">
        <h3 className="text-[44px] font-extrabold font-larken text-center">
          Explore endless <br />
          possibilities.
        </h3>
      </div>

      <section className="row-start-2 col-start-2 col-end-12 gap-8 row-end-3 grid grid-cols-[4fr_3fr_3fr] grid-rows-1">
        <div className="possibility-1 col-start-1 col-end-2 row-start-1 row-end-3 bg-creativity relative min-h-[20rem h-[466px rounded-[2.5rem] p-7">
          <div className="h-full flex flex-col justify-between max-w-[18rem]">
            <h3 className="text-[1rem] font-bold">Customization</h3>
            <p className="text-sm">
              Use a pre-designed template or personalise videos, stickers,
              fonts, and more.
            </p>
          </div>

          <div className=" absolute inset-[8rem_0] gap-4">
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253861742a03817c8f639e_customization-card-01.webp"
              alt=""
              className="possibility-1-img-1 w-[40%] top-0 left-[21%] origin-[50%_100%] -rotate-[10deg] z-20 absolute"
            />
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/652538617d7b8af462331173_customization-card-02.webp"
              alt=""
              className="w-[40%] possibility-1-img-2 rotate-1 absolute top-0 left-[41%]"
            />
            <div className="bg-white pt-2 absolute pb-4 bottom-[1%] rounded-xl -left-[4%] overflow-hidden w-full">
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525386194aa04d73fdaab28_customization-options.svg"
                alt=""
                className="w-[140%] align-middle overflow-clip inline-block [overflow-clip-margin:content-box]"
              />
            </div>
          </div>
        </div>

        <div className="possibility-2 bg-passion row-start-1 col-start-2 row-span-1 col-end-4 relative w-full min-h-[240px]  rounded-[2.5rem] p-5">
          <div className="max-w-[18rem] flex items-end h-full">
            <div>
              <h3 className="text-[1.4rem] mb-1 font-bold">Scheduling</h3>
              <p>
                Schedule all your cards and gifts now and we'll send them later.
              </p>
            </div>
          </div>
          <div className="absolute inset-[0_0_0_50%]">
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253a83bf8a1c690e94cfa8_scheduling-card.webp"
              alt=""
              className="possibility-2-img-1 w-[60%] -rotate-[26deg] h-full  absolute -top-[11%] left-[4%] origin-[50%_100%] block"
            />

            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253a825d829fa71580e41b_scheduling-ui.svg"
              alt=""
              className="possibility-2-img-2 w-[80%] rotate-[9deg] absolute right-[10%] z-20 -top-[1%] rounded-xl object-cover  origin-bottom transition-all"
            />
          </div>
        </div>

        {/* <div className="bg-red-300 min-h-[20em] col-start-2 row-start-1"></div> */}
        <div className="possibility-3 row-start-2 relative min-h-[240px] h-full row-end-3 col-start-2 col-end-3 flex flex-col justify-end items-end rounded-[2.5rem] p-5 bg-balance">
          <div className="">
            <h3 className="">Wallet</h3>
            <p className="text-sm font-underdog font-bold">
              Access all your gifts and save up your Givingli Cash
            </p>
          </div>
          <div className=" top-8 z-0 h-[40%] left-8 right-8  bg-opacity-30 rounded-lg absolute">
            <div className="wallet-images absolute overflow-hidden z-0  inset-[-4rem_0_1rem_-1rem]">
              <img
                src={cardStackImages[2]}
                alt=""
                className="-rotate-[20deg] w-[75%] h-auto z-1 left-[13%] absolute -bottom-[23%] origin-[0%] align-middle rounded-2xl"
              />
              <img
                src={cardStackImages[1]}
                alt=""
                className="-rotate-[12deg] w-[80%] h-auto z-2 left-[13%] absolute -bottom-[23%] origin-[0%] align-middle rounded-2xl"
              />
              <img
                src={cardStackImages[0]}
                alt=""
                className="-rotate-[4deg] w-[85%] h-auto z-1 left-[10%] absolute -bottom-1/4 origin-[0%] align-middle rounded-2xl"
              />
            </div>
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce030282e8a2f1e202a_wallet-givingli-cash.svg"
              alt=""
              className="rounded-2xl z-[1000] relative"
            />
          </div>
        </div>

        <div className="row-start-2 z-30 possibility-4 row-end-3 col-start-3 col-end-4 flex flex-col items-end rounded-[2.5rem] p-5 pb-0 overflow-hidden gap-4 bg-balance relative">
          <div className="">
            <h3 className="">Inbox</h3>
            <p className="text-sm">
              Track your gifts, group chats, and sent cards
            </p>
          </div>
          <div className="possibility-4-img-wrapper flex-1 w-full rounded-2xl absolute pt-[5%] inset-[45%_0%_0%] px-8">
            <div className=" rounded-2xl overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253fb67d7b8af4623b9bef_inbox-ui.webp"
                alt=""
                className="w-full h-full possibility-4-img"
              />
            </div>
          </div>
        </div>

        <div className="row-start-3 possibility-5 row-end-4 p-8 rounded-3xl min-h-[240px] bg-orange-500 col-start-1 col-end-3 flex items-end relative">
          <div className="max-w-[12rem]">
            <h3 className="text-3xl font-bold">Send Gifts</h3>
            <p>Send as a group with friends or individually</p>
          </div>
          <div className=" w-[70%] h-full absolute right-0 top-0 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-[1fr_1fr_1fr] auto-rows-auto auto-cols-[1fr] place-content-center place-items-center px-8 -rotate-[15deg] gap-6 w-full h-full">
              {/* First Row */}
              <div className="row-start-[span_1] card-5-row row-end-[span_1] col-start-[span_1] col-end-[span_1] bg-re00 z-50 h-full grid grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] place-content-center place-items-center gap-6">
                {row1.map((item, i) => (
                  <img
                    src={item}
                    key={i}
                    className="w-full rounded-[0.75rem]"
                  />
                ))}
              </div>
              {/* First Row */}

              {/* Second Row */}
              <div className="row-start-[span_1] card-5-row row-end-[span_1] col-start-[span_1] col-end-[span_1] bg-re00 z-50 h-full grid grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] place-content-center place-items-center gap-6">
                {row2.map((item, i) => (
                  <img
                    src={item}
                    key={i}
                    className="w-full rounded-[0.75rem]"
                  />
                ))}
              </div>
              {/* Second Row */}

              {/* Third Row */}
              <div className="row-start-[span_1] card-5-row row-end-[span_1] col-start-[span_1] col-end-[span_1] bg-re00 z-50 h-full grid grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] place-content-center place-items-center gap-6">
                {row1.map((item, i) => (
                  <img
                    src={item}
                    key={i}
                    className="w-full rounded-[0.75rem]"
                  />
                ))}
              </div>
              {/* Third Row */}
            </div>
          </div>
        </div>

        <div className="row-start-3 possibility-6 row-end-4 relative p-8 min-h-[240px] rounded-3xl col-start-3 col-end-4 bg-heart">
          <div className="max-w-[12rem]">
            <h3 className="text-3xl font-bold">Reminders</h3>
            <p>Never miss a birthday again</p>
          </div>

          <div className="pt-[5%] overflow-hidden absolute inset-[45%_0_0_2rem]">
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254928fb080a7f70152b1b_reminders-ui.webp"
              alt="Alt Image"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

const row1 = [
  `https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525428301c0c827c6c29243_gifts-card-bath-body-works.webp`,
  `https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254282d3dc76c4aa996868_gifts-card-amazon.webp`,
  `https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/652542828b6c40e266484f93_gifts-card-doordash.webp`,
];

const row2 = [
  `https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525428301c0c827c6c29243_gifts-card-bath-body-works.webp`,
  `https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254282d3dc76c4aa996868_gifts-card-amazon.webp`,
  `https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/652542828b6c40e266484f93_gifts-card-doordash.webp`,
  `https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254282d3dc76c4aa996868_gifts-card-amazon.webp`,
];

const cardStackImages: string[] = [
  `https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce001c0c827c6bac1fb_wallet-card-starbucks.webp`,
  `https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce094aa04d73fdff6d4_wallet-card-nike.webp`,
  `https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce078cb06ac26896fb7_wallet-card-victorias-secret.webp`,
];
