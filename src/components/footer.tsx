import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="min-h-[100dvh] w-full max-w-[85rem] mx-auto p-[2.5rem]">
      <div className="grid gap-8 grid-cols-[5fr_5fr_2fr] grid-rows-[2fr_1fr] p-12">
        <div className="row-start-[span_2] row-end-[span_2] col-start-[span_1] col-end-[span_1] p-[2rem] rounded-3xl leading-[1] bg-white">
          <h2 className="text-[4rem] mb-8 font-[700]">Every moment matters</h2>
          <p className="mb-4">
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
          <h3>Support</h3>
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

        <div className="row-start-[span_2] col-start-[span_1] row-end-[span_2] col-end-[span_1] bg-white rounded-3xl"></div>
      </div>
    </footer>
  );
}
