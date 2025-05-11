export default function WorkTogether() {
  return (
    <section className="min-h[100dvh] py-[6rem] max-w-[85rem] mx-auto px-[4rem] lg:px-[7rem]">
      <div className="grid grid-cols-12 gap-8 auto-cols-[1fr] grid-rows-[auto] auto-rows-[auto]">
        <div className="col-start-1 col-end-6 self-center  row-start-1 row-end-7 ">
          <div className="space-y-6">
            <h3 className=" text-[3rem] lg:text-[5rem] leading-none">
              Let&apos;s work
              <br /> together
            </h3>
            <button className="bg-[#333] text-white px-8 py-2 rounded-full">
              Explore open positions
            </button>
          </div>
        </div>

        <div className=" col-start-9 col-end-12 relative -top-[13%] row-start-1 row-end-5 min-h[300px]">
          <div className="rounded-[2rem] overflow-hidden">
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bcfddd30f5bf8bbf2dd00_jobs-img-02.webp"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
        <div className=" col-start-6 col-end-10 row-start-3 row-end-6 min-h[300px]">
          <div className="rounded-[2rem] overflow-hidden">
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bcfdd294ebddac6386a74_jobs-img-01.webp"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
        <div className=" col-start-9 col-end-11 relative -top-[9%] row-start-5 row-end-7 min-h[300px]">
          <div className="rounded-3xl lg:rounded-[2rem] overflow-hidden">
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65ae55135632d338ff18ed5a_IMG_7617.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
