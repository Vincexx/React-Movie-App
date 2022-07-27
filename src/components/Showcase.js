import React from "react";

const Showcase = () => {
  return (
    <div
      className={`py-24`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/bg.jpg"})`,
        backgroundRepeat: `none`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    >
      {/* <img src={process.env.PUBLIC_URL + "/bg.jpg"} alt="" /> */}
      <div className="md:w-1/2">
        <h1 className="text-white font-extrabold text-6xl">
          LOOK FOR A MOVIE DETAILS?
        </h1>
        <p className="text-white my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          veritatis assumenda libero, laboriosam obcaecati quod! Veritatis
          suscipit sequi laudantium earum quisquam deleniti reiciendis, unde
          illum exercitationem, temporibus itaque doloremque ipsa.
        </p>
        <button className="bg-red-500 px-3 py-3 font-bold text-white rounded-sm">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default Showcase;
