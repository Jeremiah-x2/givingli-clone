export default function AboutHero() {
  return (
    <section className="min-h-[100vh] bg-[rgba(252,250,244,1)] w-full relative flex justify-center items-center py-10">
      <div className="px-10 w-full">
        <div className="container max-w-[85rem]">
          <div className="grid grid-cols-12 gap-8 auto-cols-[1fr] [grid-template-rows:auto]">
            <div className="row-start-1 font-mauline text-[#333] row-end-2 col-start-3 col-end-11 text-center">
              <h1>About Us</h1>
              <p className="text-[5rem] font-bold leading-none">
                We make gifting and celebrating better for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-bg-wrapper absolute w-full h-[150vh] top-0 left-0 overflow-hidden">
        <div className="about-bg-wrapper-img-1 absolute w-full h-[100vh] top-0 left-0">
          <div className="absolute w-[95px] h-[95px] overflow-hidden shadow-lg bg-blue-400 rounded-xl top-[12%] left-[7%]">
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bbcfdbb54d467dc768848_about-hero-img-01.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute w-[144px] h-[144px] bg-blue-400 rounded-xl overflow-hidden shadow-md -top-[16%] left-[45%]">
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bbcfcec9e6b4e08d2c789_about-hero-img-02.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute w-[95px] overflow-hidden h-[95px] shadow-lg bg-blue-400 rounded-xl top-[28%] -right-[3%]">
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bbcfcec9e6b4e08d2c7ad_about-hero-img-03.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute w-[95px] h-[95px] overflow-hidden shadow-lg bg-blue-400 rounded-xl bottom-[17%] left-[2%]">
            <img
              src=" https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bbcfc89add2a0e41b13c5_about-hero-img-04.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute w-[142px] h-[142px] overflow-hidden shadow-lg bg-blue-400 rounded-xl -bottom-[4%] left-[37%]">
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bbcfd40c50ae2ce21d583_about-hero-img-05.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute w-[95px] overflow-hidden shadow-lg h-[95px] bg-blue-400 rounded-xl bottom-[7%] right-[8%]">
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bbcfcc2aeacfb6e453591_about-hero-img-06.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/*  */}
      </div>
    </section>
  );
}
