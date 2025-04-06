"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ImageReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const images = document.querySelectorAll(".img");
    // gsap.to("body", {
    //   background: "#c3b2e7",
    //   scrollTrigger: {
    //     trigger: containerRef.current,
    //     start: "top bottom",
    //     end: "+=100%",
    //     scrub: true,
    //   },
    // });
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=180%",
        pin: containerRef.current,
        pinSpacing: true,

        scrub: true,
        anticipatePin: 1,
      },
    });

    images.forEach((item) => {
      scrollTl.fromTo(
        item,
        { top: "50%", left: "50%", translateX: "-50%", translateY: "-50%" },
        {
          top: () => {
            if (item.classList.contains("img-1")) return "6";
            if (item.classList.contains("img-2")) return "40%";
            if (item.classList.contains("img-4")) return "40";
            if (item.classList.contains("img-7")) return "0%";
            else {
              return "";
            }
          },
          left: () => {
            if (item.classList.contains("img-1")) return "15%";
            if (item.classList.contains("img-2")) return "0";
            if (item.classList.contains("img-3")) return "5%";
            if (item.classList.contains("img-5")) return "40%";
            else {
              return "";
            }
          },
          bottom: () => {
            if (item.classList.contains("img-3")) return "6";
            if (item.classList.contains("img-5")) return "0";
            if (item.classList.contains("img-6")) return "0";
            if (item.classList.contains("img-8")) return "40%";
            else {
              return "0";
            }
          },
          right: () => {
            if (item.classList.contains("img-4")) return "5%";
            if (item.classList.contains("img-6")) return "0";
            if (item.classList.contains("img-7")) return "35%";
            if (item.classList.contains("img-8")) return "20%";
            else {
              return "0";
            }
          },

          translateX: "0",
          translateY: "0",

          stagger: 0.2,
        },
        "0"
      );
    });

    scrollTl.fromTo(
      ".gift-text",
      { opacity: 0, scale: 0.4 },
      { opacity: 1, scale: 1 },
      "0"
    );

    // const container = containerRef.current;
    // const handleMouseMove = (e: MouseEvent) => {
    //   if (!container || images.length === 0) return;
    //   // Get mouse position relative to the center of the hero section
    //   const rect = container.getBoundingClientRect();
    //   const centerX = rect.width / 2;
    //   const centerY = rect.height / 2;

    //   const mouseX = e.clientX - rect.left;
    //   const mouseY = e.clientY - rect.top;

    //   // Calculate direction from center (-1 to 1)
    //   const directionX = (mouseX - centerX) / centerX;
    //   const directionY = (mouseY - centerY) / centerY;

    //   // Animate each image with slightly different movement
    //   images.forEach((image, index) => {
    //     // Different movement factor for each image (5-15px)
    //     const moveFactor = 20 + (1 % 3) * 5;

    //     gsap.to(image, {
    //       x: `${directionX * moveFactor}`,
    //       y: `${directionY * moveFactor}`,

    //       duration: 0.5,
    //       ease: "power2.out",
    //     });
    //   });
    // };
    // container!.addEventListener("mousemove", handleMouseMove);
    // return () => {
    //   container!.removeEventListener("mousemove", handleMouseMove);
    // };
  }, []);

  return (
    <div ref={containerRef} className="min-h-[100dvh] w-full border-4">
      {/*  */}
      {/* <div className="absolute w-full h-full flex justify-center items-center">
        <div className="absolute w-40 h-40 top-6 left-[15%] bg-red-500 opacity-0 rounded-lg  z-40 img img-1"></div>
        <div className="absolute w-40 h-40 top-6 left-[15%] bg-blue-500 rounded-lg  z-40 img"></div>
        <div className="absolute w-20 h-20 top-[40%] left-0 bg-blue-500 rounded-lg 2 z-40 img"></div>
        <div className="absolute w-40 h-40 bottom-6 left-[5%] bg-blue-500 rounded-lg  z-40 img"></div>
        <div className="absolute w-40 h-40 top-6 right-[5%] bg-blue-500 rounded-lg  z-40 img"></div>
        <div className="absolute w-20 h-20 bottom-0 left-[45%] bg-blue-500 rounded-lg  z-40 img"></div>
        <div className="absolute w-40 h-40 bottom-0 right-[0%] bg-blue-500 rounded-lg  z-40 img"></div>
      </div> */}
      {/*  */}
      <div></div>
      <div className="absolute w-full h-[100vh] top-0 left-0 ">
        {/* <div className="absolute w-40 h-40 top-1/2 left-1/2 bg-red-500 rounded-lg opacity-0  z-40 img img-1"></div> */}
        <div className="absolute w-40 h-40 rounded-3xl overflow-hidden shadow-2xl z-50 img img-1">
          <img
            src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525511a96ec997706c72330_gifts-img-01.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-20 h-20 rounded-xl overflow-hidden shadow-2xl z-40 img img-2">
          <img
            src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525511bfaf4654a99a6aed7_gifts-img-03.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-40 h-40 rounded-3xl overflow-hidden shadow-2xl z-40 img img-3">
          <img
            src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525511a58895876456244fa_gifts-img-05.webp"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="absolute w-40 h-40 rounded-3xl overflow-hidden shadow-2xl z-40 img img-4">
          <img
            src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525511a9fcd8c08c01efd58_gifts-img-04.webp"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="absolute w-20 h-20  rounded-xl overflow-hidden shadow-2xl z-40 img img-5">
          <img
            src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525511b207a69b52a72526f_gifts-img-07.webp"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="absolute w-40 h-40  rounded-3xl overflow-hidden shadow-2xl z-40 img img-6">
          <img
            src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525539ee30ff890003ef6b7_gifts-img-08.webp"
            alt=""
            className="w-full h-full"
          />
        </div>

        <div className="absolute w-28 h-28  rounded-xl overflow-hidden  shadow-2xl z-40 img img-7">
          <img
            src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525511cd1c9d1887a65845d_gifts-img-02.webp"
            alt=""
            className="w-full h-full"
          />
        </div>

        <div className="absolute w-24 h-24  rounded-xl overflow-hidden  shadow-2xl z-40 img img-8">
          <img
            src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525511a7bc6077c6b3c7a95_gifts-img-06.webp"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
      {/*  */}
      {/* <div className="h-screen" /> */}
      <div className="absolute h-[100vh] border-4 top-0 left-0 w-full  mx-auto overflow-hidden">
        <div className="w-full h-full text-center flex justify-center items-center">
          <div ref={textRef} className="gift-text">
            <h3 className=" text-4xl leading-none">
              Gifting <br />
              made simple
            </h3>
            <p className="max-w-[18rem]">
              Send the perfect gift every time. Our gift store is packed with
              hundreds of top brands and fully curated for every occasion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
