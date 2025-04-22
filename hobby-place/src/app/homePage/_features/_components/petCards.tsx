/* eslint-disable @next/next/no-img-element */
export const PetCards = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <div className="w-1/3 f-fit p-2 border rounded-lg shadow-md">
          <img
            alt=""
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full h-16 object-cover rounded-lg"
          />
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold mt-2">Pet Name</h2>
            <p className="text-gray-500 text-xs">Pet Price</p>
          </div>
        </div>
      </div>
    </div>
  );
};
