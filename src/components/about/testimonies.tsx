import { Star } from "lucide-react";
import EditorsChoiceIcons from "../editors-choice-icon";

export default function Testimonies() {
  return (
    <section className="py-[5rem] lg:py-[15rem]  px-[2.5rem] text-[1.25rem] ">
      <div className="max-w-[85rem] mx-auto lg:px-[2rem]">
        <div className="grid grid-cols-12 gap-8 grid-rows-[auto] auto-cols-[1fr] ">
          <div className="row-start-1 col-end-11 col-start-3 row-end-2 text-center text-[rgba(51,51,51,1)] ">
            <h3 className="text-[3rem] lg:text-[5rem] leading-none">
              See what everyone is saying about Givingli
            </h3>
          </div>

          <div className="row-start-2 row-end-3 text-[rgba(51,51,51,1)] col-start-1 col-end-13 grid gap-8 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] mt-6">
            <div className="row-start-[span_1] row-end-[span_1] col-start-[span_1] col-end-[span_1] bg-[#fedf6f] p-6 rounded-[2rem] overflow-hidden flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="lg:text-[1.5rem] leading-none">
                  Super Cute &amp; Easy to Use!
                </h3>
                <p className="font-poppins text-[10px] lg:text-xs">
                  This makes telling someone happy birthday SO much more fun and
                  special!!!
                </p>
              </div>
              <div className="">
                <Star />
              </div>
            </div>
            <div className="row-start-1 row-end-2 col-start-2 col-end-3 bg-[#fedf6f] p-6 rounded-[2rem] overflow-hidden flex flex-col justify-between gap-4">
              <div className="space-y-2">
                <h3 className="lg:text-[1.5rem] leading-none">
                  Super Cute &amp; Easy to Use!
                </h3>
                <p className="font-poppins text-[10px] lg:text-xs">
                  This makes telling someone happy birthday SO much more fun and
                  special!!!
                </p>
              </div>
              <div className="">
                <Star />
              </div>
            </div>
            {/*  */}
            <div className="row-start-1 relative row-end-3 flex flex-col justify-end rounded-[2rem] overflow-hidden col-start-3 col-end-5 ">
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bdc5d80f3037af8f2d048_news-img-01.webp"
                alt=""
                className="w-full h-full object-cover inset-[0%] absolute rounded-[2rem]"
              />
              <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-b from-[#0000] to-black"></div>
              <div className="relative mt-[4rem] lg:mt-[9rem] bottom-0 border4 pb-4 w-full px-4 inset-[0%]">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bdcfe7f6fd66b9fb838e9_logo-apple.svg"
                  alt=""
                  className="w-[2.5rem] h-[2.5rem] mb-10"
                />
                <h3 className="text-[2.8rem] lg:text-[3.8rem] leading-none  text-white">
                  App of the day - Send some love (and gifts too).
                </h3>
              </div>
            </div>

            {/*  */}

            <div className="row-start-2 relative row-end-3 rounded-[2rem] overflow-hidden col-start-1 col-end-3 ">
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bdc5d2796a74f4de7011c_news-img-02.webp"
                alt=""
                className="w-full h-full object-cover inset-[0%] absolute rounded-[2rem]"
              />
              <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-b from-[#0000] to-black"></div>
              <div className="relative mt-[4rem] lg:mt-[9rem] pb-4 w-full px-4 inset-[0%]">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bdcfe7f6fd66b9fb838e9_logo-apple.svg"
                  alt=""
                  className="w-[2.5rem] h-[2.5rem] mb-10"
                />
                <h3 className="text-[2rem] lg:text-[3rem] leading-none  text-white">
                  A Better Way to Send Cards
                </h3>
              </div>
            </div>

            {/*  */}

            <div className="row-start-3 relative row-end-5 rounded-[2rem] overflow-hidden col-start-1 col-end-3 flex flex-col justify-end">
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655bdc5e0004f66662f483a3_news-img-03.webp"
                alt=""
                className="w-full h-full object-cover inset-[0%] absolute rounded-[2rem]"
              />
              <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-b from-[#0000] to-black"></div>
              <div className="relative mt-[4rem] lg:mt-[9rem] pb-4 w-full px-4 inset-[0%]">
                <p className=" text-[4rem] lg:text-[5rem] leading-none font-worn text-white mb-4 lg:mb-7">
                  Los Angeles Business Journal
                </p>
                <h3 className=" text-[2rem] lg:text-[3rem] leading-none  text-white">
                  Husband-Wife Team Seek To Change Gifting
                </h3>
              </div>
            </div>

            <div className="row-start-[span_1] col-start-[span_1] row-end-[span_1] col-end-[span_1] rounded-[2rem] p-6 flex flex-col justify-between bg-heart">
              <div className="mb-3 lg:mb-6">
                <div className="">
                  <EditorsChoiceIcons width={100} />
                </div>
              </div>
              <div className="">
                <p className="mb-4 text-[12px] lg:text-[15px] font-poppins">
                  Thanks to Givingli, the magic of opening up a card doesn’t
                  disappear when you go digital.
                </p>
                <div className="mt-6 flex gap-2 text-sm items-center">
                  <img
                    src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/655d29fdd87f48a9714ee84d_apple-testimonial.svg"
                    alt=""
                    className="rounded-full w-[37px] h-[37px]"
                  />{" "}
                  <div>Apple</div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="row-start-4 col-start-3 row-end-5 col-end-4 bg-[#fedf6f] rounded-[2rem] p-6">
              <div className="space-y-1 lg:space-y-3">
                <h3 className="text-[1.5rem]">Obsessed!</h3>
                <p className=" text-xs lg:text-[15px]">
                  Thanks for giving a born encourager and influencer such a
                  phenomenal platform to use .... simple, amazing fonts and
                  features, and a blessing to your users and receivers.
                </p>
              </div>
              <div className="">
                <Star />
              </div>
            </div>
            {/*  */}
            <div className="row-start-[span_2] col-start-[span_1] row-end-[span_2] col-end-[span_1] rounded-[2rem] p-6 bg-[#f9a474] flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-[86px] h-[86px] rounded-full overflow-hidden">
                  <img
                    src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65705b6a1dcdf92f75541a9b_testimonial-alexis.jpg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <p className=" text-xs lg:text-[16px] text-[rgba(51,51,51,1)]">
                  This is as much a social network as it is a gifting platform
                  and it’s been valuable for all sides: artists who design the
                  gifts, brands who are partners, and ultimately the gift givers
                  and receivers who keep coming back and spreading the word.
                </p>
              </div>
              <div className="">
                <div className="text-sm">
                  Alexis Ohanian <br />
                  Co-founder Reddit, 776
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
