import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, MailIcon } from "../socials";
import { animate, onScroll, svg } from "animejs";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

export default function Footer() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(DrawSVGPlugin);
    const svgTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top center",
        end: "+=100%",
        scrub: true,
      },
    });
    gsap.fromTo(
      "#path",
      { drawSVG: "0%", duration: 1 },
      {
        drawSVG: "100%",
        duration: 4,
        scrollTrigger: { trigger: ".footer", start: "top top" },
      }
    );
  }, []);
  return (
    <footer className="min-h-[100dvh] footer relative text-[#184363] w-full max-w-[85rem] mx-auto p-[2.5rem]">
      <div className="grid gap-8 grid-cols-[5fr_5fr_2fr] grid-rows-[2fr_1fr] p-12">
        <div className="row-start-[span_2] row-end-[span_2] col-start-[span_1] col-end-[span_1] p-[2rem] rounded-3xl leading-[1] bg-white">
          <h2 className="text-[5rem] mb-8 font-[700] font-mauline">
            Every moment matters
          </h2>
          <p className="mb-4 text-inherit">
            <Link to={"/"}>
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/667463d01a10a9f3654e3f47_Logo.svg"
                alt="Logo"
                className="w-[92px]"
              />
            </Link>
          </p>
          <p className="text-sm font-regular">
            &copy; 2023 All Rights Reserved, Givingli Inc.
          </p>
        </div>

        <div className="bg-white flex  flex-col rounded-3xl row-start-[span_1] row-end-[span_1] col-end-[span_1] col-start-[span_1] p-8 ">
          <h3 className="font-mauline text-3xl">Support</h3>
          <p className="text-sm">
            Have questions?{" "}
            <Link to={"#"} className="underline">
              Get in touch
            </Link>{" "}
            or check out our{" "}
            <Link to={"#"} className="underline">
              Help Center
            </Link>
            .
          </p>
          <p className="text-sm mt-auto">
            You can also text our support team at{" "}
            <Link to={"#"}>
              <span>(</span>310
              <span>)</span>773-5384
            </Link>{" "}
            or email us at{" "}
            <Link to={"#"} className="underline">
              help@givingli.com
            </Link>
          </p>
        </div>

        <div className="row-start-2 col-start-2 row-end-3 flex items-center justify-center gap-6 col-end-3 bg-white rounded-3xl p-8">
          <Link to={"#"} className="underline">
            Terms of use
          </Link>
          <Link to={"#"} className="underline">
            Privacy Policy
          </Link>
        </div>

        <div className="row-start-[span_2] col-start-[span_1] flex flex-col items-center py-5 row-end-[span_2] col-end-[span_1] bg-white rounded-3xl">
          <h3 className="font-mauline text-4xl">Social </h3>

          <ul className="flex-grow flex flex-col justify-evenly">
            <li>
              <InstagramIcon
                width={60}
                height={60}
                fill="none"
                stroke="#184363"
              />
            </li>
            <li>
              <FacebookIcon width={60} height={60} fill="#184363" />
            </li>
            <li>
              <MailIcon width={60} height={60} fill="#184363" />
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute top-0 -z-10">
        <svg
          width="1045"
          height="838"
          viewBox="0 0 1045 838"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="svg"
        >
          <path
            d="M661.175 252.914C552.591 252.914 320.556 338.554 421.175 466.914C528.175 603.414 830.992 141.835 713.175 80.4144C502.175 -29.5856 -111.981 326.345 106.175 635.914C353.175 986.414 1119.18 603.414 963.175 375.914C878.587 252.557 719.675 252.914 661.175 252.914Z"
            stroke="#184363"
            stroke-width="120"
            id="path"
          />
        </svg>
      </div>
    </footer>
  );
}
