import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

interface IProTool {
  item: { title: string; desc: string; image: string };
  i: number;
}
export default function ProTools({ item, i }: IProTool) {
  const containerRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const slideTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "10% bottom",
      },
    });

    slideTl.from(
      descRef.current,
      {
        opacity: 0,
        x: () => {
          if (i % 2 === 0) return -100;
          else {
            return 100;
          }
        },
        duration: 1,
      },
      "0"
    );
    slideTl.from(
      imgRef.current,
      {
        opacity: 0,
        x: () => {
          if (i % 2 === 0) return 100;
          else {
            return -100;
          }
        },
        duration: 1,
      },
      "0"
    );
  }, []);
  return (
    <div
      ref={containerRef}
      key={i}
      className="grid grid-cols-12 gap8 auto-cols-fr"
    >
      <div
        ref={descRef}
        className={` ${
          i % 2 === 0 ? "col-start-1 col-end-6" : "col-start-7 col-end-13"
        } row-start-1 row-end-2 flex flex-col justify-center gap-6 opacity-1`}
      >
        <h3 className="font-mauline text-[2.3rem] leading-none">
          {item.title}
        </h3>
        <p className="max-w-[14rem] font-poppins text-sm">{item.desc}</p>
      </div>
      <div
        ref={imgRef}
        className={` ${
          i % 2 !== 0 ? "col-start-1 col-end-6" : "col-start-7 col-end-13"
        } row-start-1 row-end-2  opacity-1`}
      >
        <img src={item.image} alt="" className="w-full rounded-3xl" />
      </div>
    </div>
  );
}
