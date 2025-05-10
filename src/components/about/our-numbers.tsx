export default function OurNumbers() {
  return (
    <section className=" my-[5rem] ">
      <div className="lg:px-10">
        <div className="containr">
          <div className="grid grid-cols-12 gap-8 auto-cols-[1fr]">
            <div className="col-start-5 col-end-9 row-start-1 row-end-2">
              <h2 className="text-[3rem] lg:text-[5rem] font-mauline font-bold leading-none text-center">
                Givingli in numbers
              </h2>
            </div>
            {/*  */}
            <div className="row-start-2 gap-8 row-end-3 lg:px-[7rem] col-start-2 col-end-12 grid grid-cols-[1fr] mt-6 auto-cols-[1fr]">
              <div className="row-start-[span_1] row-end-[span_1] col-start-[span_2] col-end-[span_2] min-h-[22rem] rounded-[2.5rem] relative overflow-hidden flex p-8 bg-[#c9da8f] items-end">
                <div className="font-mauline">
                  <h3 className="text-[8rem] leading-[0.8]">Millions</h3>
                  <p className="text-xl text-white tracking-wider font-medium leading-none">
                    of Givinglis Sent
                  </p>
                </div>
                <div className="absolute  w-[70%] h-full top-0 right-0 ">
                  <div className="absolute w-[7.5rem] h-[7.5rem] -top-[9%]  left-[60%] ">
                    <div className="w-full h-full">
                      <img
                        src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655d13d8066b57aefdc2e5f2_givingli-sent-img-02.webp"
                        alt=""
                        className="w-full h-full rounded-[2rem] shadow-[0px_12px_16px_rgba(0,0,0,0.3)]"
                      />
                    </div>
                  </div>
                  <div className="absolute w-[92px] h-[92px] top-[28%]  -right-[3%] ">
                    <div className="w-full h-full">
                      <img
                        src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655d13d936bc1c5cd1f0ac13_givingli-sent-img-03.webp"
                        alt=""
                        className="rounded-[1.25rem] w-full h-full shadow-[0px_12px_16px_rgba(0,0,0,0.3)]"
                      />
                    </div>
                  </div>
                  <div className="absolute w-[7.5rem] h-[7.5rem] top-[3%] left-[18%] ">
                    <div className="w-full h-full">
                      <img
                        src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655d13d9cf4de441a2fd5d3d_givingli-sent-img-01.webp"
                        alt=""
                        className="rounded-[2rem] shadow-[0px_12px_16px_rgba(0,0,0,0.3)] w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="absolute w-[92px] h-[92px] bottom-[32%] left-[50%] ">
                    <div className="w-full h-full">
                      <img
                        src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655d13d99cad7d74fd927940_givingli-sent-img-05.webp"
                        alt=""
                        className="rounded-[1.25rem] w-full h-full shadow-[0px_12px_16px_rgba(0,0,0,0.3)]"
                      />
                    </div>
                  </div>
                  <div className="absolute w-[7.5rem] h-[7.5rem] bottom-[6%] right-[4%] ">
                    <div className="w-full h-full">
                      <img
                        src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655d13d97da1812356184c2b_givingli-sent-img-06.webp"
                        alt=""
                        className="w-full h-full rounded-[2rem] shadow-[0px_12px_16px_rgba(0,0,0,0.3)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="grid grid-cols-1 border-4 gap-8"> */}
              <div className="min-h-[380px] p-8 flex flex-col justify-end bg-heart rounded-[2.5rem] relative">
                <div className="">
                  <h3 className="text-[6rem] leading-none flex items-start">
                    150
                    <span className="font-poppins font-light text-4xl">+</span>
                  </h3>
                  <p className="font-mauline text-2xl text-white">
                    Independent Artists Globally
                  </p>
                </div>

                <div className="absolute w-full h-1/2 top-0 left-0 overflow-hidden rounded-t-[2.5rem] right-0">
                  <div className="w-full h-full relative -top-[20%] p">
                    <img
                      src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655d1d7f21d44dba7e58b623_globe_countries.svg"
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="min-h-[380px] p-8 flex flex-col justify-end bg-[#f9a474] rounded-[2.5rem] relative">
                <div className="">
                  <h3 className="text-[6rem] leading-none flex items-start">
                    250
                    <span className="font-poppins font-light text-4xl">+</span>
                  </h3>
                  <p className="font-mauline text-2xl text-white">
                    Brand Partners
                  </p>
                </div>

                <div className="absolute w-full h-1/2 top-0 left-0 overflow-hidden rounded-t-[2.5rem] right-0">
                  <div className="w-full h-full relative -top-[20%] p">
                    {/* <img
                      src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655d1d7f21d44dba7e58b623_globe_countries.svg"
                      alt=""
                      className="w-full h-full object-contain"
                    /> */}
                  </div>
                </div>
              </div>
              {/* <div className=""></div> */}
              {/* </div> */}
              <div className="bg-[#f682a5] mx-auto row-start-[span_1] row-end-[span_1] col-start-[span_2] col-end-[span_2] rounded-[2.5rem] p-8 flex min-h-[380px] relative items-center">
                <div className="">
                  <h3 className="text-4xl leading-none text-[#52225e] mb-4">
                    Want to learn <br />
                    more about us?
                  </h3>
                  <div className="text-[#F682A5] bg-[#52225E] mt-8 px-[30px] py-3 rounded-full ">
                    Follow our Instagram
                  </div>
                </div>

                <div className="absolute w-1/2 rounded-r-[2.5rem] overflow-hidden flex flex-col justify-end items-center top-0 right-0 bottom-0">
                  <img
                    src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6570594ecd4cd453c0a084b0_app-how-it-works-pink.webp"
                    alt=""
                    className="w-[80%] relative align-middle top-[10%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
