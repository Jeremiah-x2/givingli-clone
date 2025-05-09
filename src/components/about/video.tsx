import { Play } from "lucide-react";

export default function Video() {
  return (
    <section className="pt[30rem] pb-[10rem]">
      <div className="w-full px-10 ">
        <div className="w-full max-w-[85rem] pb-[4rem] mx-auto px-[94px]">
          <div className="mt-[12rem] pb-[6rem]">
            <a href="#" className="relative max-w-full">
              <div className="w-full flex justify-center items-center overflow-hidden rounded-[2.5rem]">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/66fdbaf6cb89262a44306b5b_WebsitePreview1.png"
                  alt=""
                  className="w-full object-cover aspect-[16/9] mx-auto"
                />
                <div className="flex w-[10rem] h-[10rem] justify-center items-center p-2 absolute">
                  <div className="relative z-40 w-full h-full flex justify-center items-center rounded-full bg-white">
                    <Play size={60} fill="#222" stroke="#222" />
                  </div>
                </div>
                <div className="inset-[0%] absolute rounded-full"></div>
              </div>
            </a>
          </div>
          {/*  */}
          <div className="w-full grid grid-cols-12 text-[#52225e] gap-8 auto-cols-[1fr]">
            <h2 className="col-start-2 font-mauline col-end-5 row-start-1 row-end-2 text-[3rem] leading-none font-bold">
              How we started
            </h2>

            <div className="row-start-2 col-start-2 row-end-5 col-end-6 [align-self:start]">
              <div className="rounded-[2rem] overflow-hidden">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bbcfd773d472447a39e01_how-we-started-01.webp"
                  alt=""
                  className=""
                />
              </div>
            </div>
            {/*  */}
            <div className="row-start-1 col-start-7 row-end-4 col-end-12">
              <div className="rounded-[2.5rem] overflow-hidden">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65258fc9af9773d82c8e938b_stop-motion-img-02.webp"
                  alt=""
                />
              </div>
            </div>
            {/*  */}
            <div className="row-start-4 col-start-7 col-end-12 row-end-5">
              <p className="mb-4">
                Nicole and Ben started Givingli with a simple yet bold idea: to
                redefine digital gifting. They envisioned a platform where
                modern design meets heartfelt connections, making the act of
                sending gifts and greetings from phones both meaningful and
                enjoyable.
              </p>
              <p className="mb-4">
                Today, Givingli proudly serves millions of people who choose to
                celebrate their special moments with us. It's more than just an
                app; it's a way for us to connect in life’s most meaningful
                moments. Showcasing works from dozens of independent artists,
                Givingli offers not just convenience but a personal touch in
                every gift and greeting.
              </p>
              <p className="mb-4">We hope you enjoy!</p>

              <div className="flex justify-start items-center mt-8">
                <button className="px-6 bg-[#52225e] text-sm py-2 rounded-full text-white">
                  Work with us
                </button>
              </div>
            </div>
            {/*  */}
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
}
