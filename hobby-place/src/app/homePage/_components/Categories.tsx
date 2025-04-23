/* eslint-disable @next/next/no-img-element */
export const Categories = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-full h-16 ">
        <div className="text-xl extrabold">Categories</div>
        <p className="text-sm">see more</p>
      </div>
      <div>
        <button className="btn btn-outline flex items-center justify-between">
          <img
            alt=""
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            className="w-9 rounded-full"
          />
          <div>Dog</div>
        </button>
      </div>
    </div>
  );
};
