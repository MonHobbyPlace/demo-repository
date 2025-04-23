/* eslint-disable @next/next/no-img-element */
export const AdoptMeCrausel = () => {
  return (
    <>
      <div className="carousel w-full flex justify-center mx-auto mt-4">
        {
          //here is adopt me posts map
        }
        <div
          id="slide1"
          className="carousel-item rounded-xl overflow-hidden relative w-full h-[160px]"
        >
          <img
            alt=""
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="text-black ">
              ❮
            </a>
            <a href="#slide2" className="text-black">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
