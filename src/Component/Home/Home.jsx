import { useState } from "react";
import { galleryArray } from "../../config/ImageGallery";

const Home = () => {
  let count = 0;

  const [galleryState, setGalleryState] = useState(galleryArray);
  const [dragStart, setDragStart] = useState(null);

  //calculating of total number of selected item
  galleryState.forEach((photo) => {
    if (photo.status === true) {
      count++;
    }
  });

  //updated status of selected item
  const handleCheckboxChange = (id) => {
    const checkedPhoto = galleryState.map((photo) => {
      if (photo.id !== id) {
        return photo;
      } else {
        return { ...photo, status: !photo.status };
      }
    });

    setGalleryState(checkedPhoto);
  };

  //delete photos
  const handleDelete = () => {
    const selectedPhoto = galleryState.filter(
      (photo) => photo.status === false
    );
    setGalleryState(selectedPhoto);
  };

  //swapping photo position based on where the photo is dropping
  const handleDrop = (e, index) => {
    const updatedGallery = galleryState.filter(
      (photo) => photo.id !== dragStart.id
    );
    updatedGallery.splice(index, 0, dragStart);
    setGalleryState(updatedGallery);
  };

  return (
    <div className="flex justify-center items-end ">
      <div className="w-4/5 rounded-lg bg-white p-4 shadow-2xl">
        <h1
          className={`${
            count > 0 ? "hidden" : "text-black text-2xl font-semibold p-3 pl-10"
          }`}
        >
          Gallery
        </h1>
        <div
          className={`${
            count > 0
              ? "flex justify-between items-center px-10 py-3"
              : "hidden"
          }`}
        >
          <div>
            {" "}
            <input checked type="checkbox" name="" id="" />{" "}
            <span className="text-black">
              {count}
              {count > 1 ? " Files Selected" : " File Selected"}
            </span>
          </div>
          <p
            onClick={handleDelete}
            className="text-red-500 hover:underline hover:cursor-pointer"
          >
            Delete files
          </p>
        </div>
        <hr />
        <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-4 p-10">
          {galleryState.map((photo, index) => (
            <div
              key={photo?.id}
              draggable
              //drag down events
              onDragStart={() => setDragStart(photo)}
              onDrop={(e) => handleDrop(e, index)}
              onDragOver={(event) => event.preventDefault()}
              className={`rounded-xl border-2  relative group hover:border-none overflow-hidden ${
                index === 0 ? "col-span-2 row-span-2 " : ""
              }`}
            >
              <img
                src={photo?.image}
                alt=""
                className={`w-full h-auto transition duration-300 transform ${
                  photo?.status === true ? "scale-105" : "group-hover:scale-105"
                }`}
              />
              <div
                className={`absolute inset-0 bg-black  rounded-lg  flex justify-center items-center group-hover:opacity-20 ${
                  photo?.status === true ? "opacity-20 " : "opacity-0"
                }`}
              >
                <input
                  type="checkbox"
                  checked={photo?.status}
                  onChange={() => handleCheckboxChange(photo?.id)}
                  className="transform absolute scale-150 opacity-100 top-4 left-4 cursor-pointer"
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
