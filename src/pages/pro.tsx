import ReactLenis from "lenis/react";
import { Link } from "react-router-dom";
import ProTools from "../components/pro-tools";

export default function ProPage() {
  return (
    <ReactLenis root options={{}}>
      <main className="bg-[#fcfaf4] min-h-[100dvh]">
        <section className="min-h-[100dvh] ">
          <div className="text-center w-full h-[100vh] flex justify-center items-center space-y-4 relative">
            <img
              src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65bc2f3db51516f7fcd37243_Avatar2.png"
              alt=""
              className="w-[88px] h-[88px] absolute top-[117px] left-[140px]"
            />
            <div className="space-y-4 ">
              <p>Givingli Pro</p>
              <h3 className="text-[4.5rem] leading-none font-mauline">
                Better Business <br />
                Gifting
              </h3>
              <p className="text-lg">
                Get your gifting done in minutes, not hours
              </p>

              <div className="">
                <Link
                  to={"/create"}
                  className="bg-[#333]  inline-flex overflow-hidden items-center relative justify-center w-[140px] h-10 rounded-full before:content['*'] before:w-0 before:bg-white before:bg-opacity-30 before:absolute before:top-full hover:before:top-0 before:rounded-full before:h-0 before:z-10 hover:before:w-[200px] hover:before:h-[200px] before:transition-all hover:before:rounded-none text-white text-xs font-poppins start-gifting-btn"
                >
                  Try Pro for Free
                </Link>
              </div>
            </div>
          </div>

          <div className="px-[140px] relative gap-60 flex justify-center">
            <div className="absolute left-[140px]">
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65bc2eb6eaabc58fa4a68729_Avatar%20Image.png"
                alt=""
                className="w-[88px] h-[88px]"
              />
            </div>
            <div className="">
              <p className="text-[3rem] font-mauline leading-none">
                Loved by pros at <br />
                leading companies
              </p>
            </div>
          </div>
        </section>

        <section className="py-[15rem] px-10">
          <div className="container max-w-[85rem] mx-auto">
            <div className="grid gap-x-8 gap-y-20 [grid-template-rows:auto] grid-cols-12 auto-cols-[1fr] w-full">
              <div className="col-start-4 col-end-10 row-start-1 row-end-2">
                <h3 className="text-[4rem] font-mauline text-center leading-none">
                  Powerful gifting tools for modern businesses
                </h3>
              </div>

              <div className="col-start-3 col-end-11  space-y-[5rem] row-start-2 row-end-3">
                {proTools.map((item, i) => (
                  <ProTools item={item} i={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-[4rem]">
            <Link
              to={"/create"}
              className="bg-[#333]  inline-flex overflow-hidden items-center relative justify-center w-[140px] h-10 rounded-full before:content['*'] before:w-0 before:bg-white before:bg-opacity-30 before:absolute before:top-full hover:before:top-0 before:rounded-full before:h-0 before:z-10 hover:before:w-[200px] hover:before:h-[200px] before:transition-all hover:before:rounded-none text-heart start-gifting-btn"
            >
              Get Started
            </Link>
          </div>
        </section>

        <section className="py-[12rem] px-6 lg:px-10  relative">
          <div className="absolute w-full h-full flex items-center top-0 left-0  border-red-500">
            <div className="rounded-[1.5rem] absolute top-0 left-[50%] shadow-[4px_12px_20px_rgba(0,0,0,0.4)] overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/667ca138cc44532c25cef9b4_Starbucks.webp"
                alt=""
                className="w-[94px] h-[94px]"
              />
            </div>

            <div className="rounded-[1.5rem] absolute top-10 left-10 shadow-[4px_12px_20px_rgba(0,0,0,0.4)] overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/667ca18e01a2286be6f32e0e_Sephora.jpg"
                alt=""
                className="w-[94px] h-[94px]"
              />
            </div>

            <div className="rounded-[1.5rem] bottom-[15%] left-[4%] absolute shadow-[4px_12px_20px_rgba(0,0,0,0.4)] overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/667ca137012f25b31bf03d06_Target.webp"
                alt=""
                className="w-[94px] h-[94px]"
              />
            </div>

            <div className="rounded-[1.5rem] absolute bottom-0 left-[40%] shadow-[4px_12px_20px_rgba(0,0,0,0.4)] overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/667ca137c7a197bcaf165940_Target-1.webp"
                alt=""
                className="w-[142px] h-[142px]"
              />
            </div>

            <div className="rounded-[1.5rem] absolute bottom-[20%] right-[10%] shadow-[4px_12px_20px_rgba(0,0,0,0.4)] overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/667ca18ef3c5440fdacdfdb4_Dunkin.jpg"
                alt=""
                className="w-[94px] h-[94px]"
              />
            </div>

            <div className="rounded-[1.5rem] absolute top-[20%] right-[5%] shadow-[4px_12px_20px_rgba(0,0,0,0.4)] overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/667ca13780beb02a94a952a4_Amazon.webp"
                alt=""
                className="w-[94px] h-[94px]"
              />
            </div>
          </div>
          <div className="container max-w-[85rem] mx-auto">
            <div className="grid gap-x-8 gap-y-20 [grid-template-rows:auto] grid-cols-12 auto-cols-[1fr] w-full">
              <div className="col-start-4 col-end-10 text-center">
                <div className="text-[3rem] lg:text-[4rem] font-mauline max-w-[20rem] leading-none mx-auto">
                  <h3>300+ gift options from brands they love.</h3>
                </div>
                <h2 className="text-xs max-w-[28rem] mx-auto mt-5">
                  Send gifts your team and clients will actually want. Plus, if
                  recipients prefer a different gift, they can easily swap for
                  something else.
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[15rem] lg:px-40">
          <div className="container max-w-[85rem] mx-auto">
            <div className="grid col-start-2 col-end-12 grid-cols-12 gap-8">
              <div className="col-start-2 flex flex-col col-end-8 row-start-1 bg-[#020b66] row-end-3 p-8 rounded-[2.5rem]">
                <div className="max-w-[20rem] text-[#c0c6fe] space-y-8">
                  <p className="text-sm">Givingli Pro</p>
                  <h3 className="font-mauline text-[3.3rem] leading-none ">
                    Want to learn more? Let&apos;s chat.
                  </h3>
                  <p className="text-[14px] font-poppins">
                    Share your contact info and our dedicated Pro team will
                    reach out to discuss your gifting needs. We look forward to
                    connecting!
                  </p>
                </div>

                <div className="border4 flex-grow flex flex-col justify-between mt-8 mb-4 space-y-4">
                  <div className="space-y-4">
                    <input
                      type="text"
                      className="w-full px-6 py-2 rounded-lg"
                      placeholder="Full Name"
                    />
                    <input
                      type="text"
                      className="w-full px-6 py-2 rounded-lg"
                      placeholder="Company Name"
                    />
                    <input
                      type="text"
                      className="w-full px-6 py-2 rounded-lg"
                      placeholder="Your Email"
                    />
                  </div>

                  <button className="bg-[#c0c6fe] rounded-2xl px-[15px] py-[16px] w-full text-[#020b66] text-sm">
                    Submit
                  </button>
                </div>
              </div>

              <div className="col-start-8 col-end-12 row-start-1 row-end-2 rounded-[2rem] overflow-hidden">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/677c05e004a73a6363081533_SmallCustomizeTemplate.jpg"
                  alt=""
                  className="w-full"
                />
              </div>

              <div className="col-start-8 col-end-12 row-start-2 row-end-3 rounded-[2rem] overflow-hidden">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/677c05e004a73a6363081533_SmallCustomizeTemplate.jpg"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
      </main>
    </ReactLenis>
  );
}

const proTools = [
  {
    title: "Flexible Sender Name",
    desc: "Create multiple sender aliases. Send on your behalf or your team's.",
    image:
      "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/667dd7c4032b130fa4d7fddb_flexsendername.png",
  },

  {
    title: "Enhanced Contract Management",
    desc: "Bulk upload contacts and create groups within your address book.",
    image:
      "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/667af07c1b3777b191e1d237_contactmanagement-p-1080.png",
  },

  {
    title: "Expence Management",
    desc: "Download receipts and manage all your gifting expences in one place.",
    image:
      "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/667dd9553db3d1b51b9f2b79_Receipt.png",
  },

  {
    title: "Interactive Account Dashboard",
    desc: "Track your spending, Givinglis sent, and days made.",
    image:
      "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/667aeffc71cbd5f4f71358df_dashboard-ezgif.com-video-to-gif-converter%20(1).gif",
  },

  {
    title: "Mass Gifting",
    desc: "Send to 100+ people with one click.",
    image:
      "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/667af097422f18f5517632b9_contacts-ezgif.com-video-to-gif-converter.gif",
  },

  {
    title: "Brand Kit",
    desc: "Design and save custom templates using your brand assets, colors, and fonts.",
    image:
      "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/670027e7f256107e42cd0aa6_1.png",
  },

  {
    title: "No Gifting Fees",
    desc: "Save big with zero gifting fees on every gift.",
    image:
      "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6671d8fd85b1cef8dda643d5_savemoneygif.gif",
  },

  {
    title: "Access to Premium Content",
    desc: "Enjoy more creative freedom with unlimited access to thousands of cards, templates, and design tools.",
    image:
      "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/667af0b3b09e4cc0a0c0b5b3_Packaged%20Card.gif",
  },
];
