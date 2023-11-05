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
      status: false,
    },
    {
      id: 2,
      image: img2,
      status: false,
    },
    {
      id: 3,
      image: img3,
      status: false,
    },
    {
      id: 4,
      image: img4,
      status: false,
    },
    {
      id: 5,
      image: img5,
      status: false,
    },
    {
      id: 6,
      image: img6,
      status: false,
    },
    {
      id: 7,
      image: img7,
      status: false,
    },
    {
      id: 8,
      image: img8,
      status: false,
    },
    {
      id: 9,
      image: img9,
      status: false,
    },
    {
      id: 10,
      image: img10,
      status: false,
    },
    {
      id: 11,
      image: img11,
      status: false,
    },
  ];
  const [gallaryState, setGallaryState] = useState(gallaryArray);
  // const [selectedProduct,setSelectedProduct]=useState()

  const handleCheckboxChange = (id) => {
    const checkedProduct = gallaryState.map((product) => {
      if (product.id !== id) {
        return product;
      } else {
        return { ...product, status: !product.status };
      }
    });

    setGallaryState(checkedProduct);
  };
  console.log(gallaryState);

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
                  ? "col-span-2 row-span-2 border-2 rounded-lg relative group hover:border-none overflow-hidden"
                  : "border-2 rounded-lg relative group hover:border-none overflow-hidden"
              }`}
            >
              <img
                src={gallary?.image}
                alt=""
                className={`${
                  gallary.status === true
                    ? "w-full h-auto transition duration-300 transform scale-105 border-none"
                    : "w-full h-auto transition duration-300 transform group-hover:scale-105 border-none"
                }`}
              />
              <div
                className={`${
                  gallary.status === true
                    ? "absolute inset-0 bg-black border-none rounded-lg  opacity-20 flex justify-center items-center group-hover:opacity-20"
                    : "absolute inset-0 bg-black border-none  rounded-lg  opacity-0 flex justify-center items-center group-hover:opacity-20"
                }`}
              >
                <input
                  type="checkbox"
                  checked={gallary?.status}
                  onChange={() => handleCheckboxChange(gallary.id)}
                  className={`${
                    gallary.status === true
                      ? "transform absolute scale-150 opacity-100 top-4 left-4 cursor-pointer"
                      : "transform absolute scale-150 opacity-100 top-4 left-4 cursor-pointer"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
