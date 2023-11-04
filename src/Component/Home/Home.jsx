import { useState } from "react";
import img1 from "../../assets/images/image-1.webp";
import img2 from "../../assets/images/image-2.webp";
import img3 from "../../assets/images/image-3.webp";
import img4 from "../../assets/images/image-4.webp";
import img5 from "../../assets/images/image-5.webp";
import img6 from "../../assets/images/image-6.webp";
import img7 from "../../assets/images/image-7.webp";
import img8 from "../../assets/images/image-8.webp";
import img9 from "../../assets/images/image-9.webp";
import img10 from "../../assets/images/image-10.jpeg";
import img11 from "../../assets/images/image-11.jpeg";

const Home = () => {
  const gallaryArray = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
    {
      id: 5,
      image: img5,
    },
    {
      id: 6,
      image: img6,
    },
    {
      id: 7,
      image: img7,
    },
    {
      id: 8,
      image: img8,
    },
    {
      id: 9,
      image: img9,
    },
    {
      id: 10,
      image: img10,
    },
    {
      id: 11,
      image: img11,
    },
  ];
  const [gallaryState, setGallaryState] = useState(gallaryArray);
  console.log(gallaryArray);
  return (
    <div className="flex justify-center items-end">
      <div className="w-4/5 rounded-lg bg-white ">
        <h1 className="text-black text-2xl font-semibold p-3 pl-10">Gallary</h1>
        <div className="flex justify-between items-center px-10">
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <span className="text-black">File Selected</span>
          </div>
          <p className="text-red-500 hover:underline hover:cursor-pointer">
            Delete files
          </p>
        </div>
        <hr />
        <div className="grid grid-cols-5 gap-4 p-10">
          {gallaryState.map((gallary, index) => (
            <div
              key={gallary?.id}
              className={`${
                index === 0
                  ? "col-span-2 row-span-2 border-2 rounded-lg"
                  : "border-2 rounded-lg"
              }`}
            >
              <img src={gallary?.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
