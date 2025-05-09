export default function OurNumbers() {
  return (
    <section className=" my-[5rem]">
      <div className="px-10">
        <div className="container">
          <div className="grid grid-cols-12 gap-8 auto-cols-[1fr]">
            <div className="col-start-5 col-end-9 row-start-1 row-end-2">
              <h2 className="text-[5rem] font-mauline font-bold leading-none text-center">
                Givingli in numbers
              </h2>
            </div>
            {/*  */}
            <div className="row-start-2 row-end-3 col-start-2 col-end-12 grid grid-cols-[1fr] mt-6 auto-cols-[1fr]">
              <div className="row-start-[span_1] row-end-[span_1] col-start-[span_2] col-end-[span_2] min-h-[288px] rounded-[2.5rem] overflow-hidden flex p-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
