import React, { useState } from 'react';

function Section2() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="bg-[white] lg:h-[500px] md:h-[800px] sm:h-[810px] mb-9">
        <div className="m-[40px]">
          <div className="text-center font-bold text-[25px] text-[#7b7c63]">CATEGORIES</div>
          <div className="text-center text-[15px] lg:px-[325px] text-[#7a7979]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores mollitia, dolor sequi temporibus consequuntur quam. At exceptu saepe.
          </div>

          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 mt-[15px]">
            {/* Image 1 */}
            <div className="transition ease-out delay-150 hover:scale-110 hover:m-2 duration-300">
              <img
                className="rounded-[5px] cursor-pointer"
                src="https://images.pexels.com/photos/16534745/pexels-photo-16534745/free-photo-of-pavilions-on-gadisar-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Image 1"
                onClick={() => handleImageClick("https://images.pexels.com/photos/16534745/pexels-photo-16534745/free-photo-of-pavilions-on-gadisar-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")}
              />
              <div>
                <h3 className="text-[#97987d] font-bold">Image 1</h3>
                <p className="text-[#7a7979]">temporibus consequuntur quam.</p>
                <button className="bg-[#989a6f] hover:bg-[#7f8058] text-white py-2 px-4 rounded-md transition-colors">
                  Click Me
                </button>
              </div>
            </div>

            {/* Image 2 */}
            <div className="transition ease-out delay-150 hover:-translate-y-1 hover:m-2 hover:scale-110 duration-300">
              <img
                className="rounded-[5px] mt-[25px] cursor-pointer"
                src="https://images.pexels.com/photos/20074914/pexels-photo-20074914/free-photo-of-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Image 2"
                onClick={() => handleImageClick("https://images.pexels.com/photos/20074914/pexels-photo-20074914/free-photo-of-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")}
              />
              <div>
                <h3 className="text-[#97987d] font-bold">Image 2</h3>
                <p className="text-[#7a7979]">temporibus consequuntur quam.</p>
                <button className="bg-[#989a6f] hover:bg-[#7f8058] text-white py-2 px-4 rounded-md transition-colors">
                  Click Me
                </button>
              </div>
            </div>

            {/* Image 3 */}
            <div className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 hover:m-2 duration-300">
              <img
                className="rounded-[5px] cursor-pointer"
                src="https://images.pexels.com/photos/16534745/pexels-photo-16534745/free-photo-of-pavilions-on-gadisar-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Image 3"
                onClick={() => handleImageClick("https://images.pexels.com/photos/16534745/pexels-photo-16534745/free-photo-of-pavilions-on-gadisar-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")}
              />
              <div>
                <h3 className="text-[#97987d] font-bold">Image 3</h3>
                <p className="text-[#7a7979]">temporibus consequuntur quam.</p>
                <button className="bg-[#989a6f] hover:bg-[#7f8058] text-white py-2 px-4 rounded-md transition-colors">
                  Click Me
                </button>
              </div>
            </div>

            {/* Image 4 */}
            <div className="transition ease-out delay-150 hover:-translate-y-1 hover:m-2 hover:scale-110 duration-300">
              <img
                className="rounded-[5px] mt-[25px] cursor-pointer"
                src="https://images.pexels.com/photos/17708522/pexels-photo-17708522/free-photo-of-woman-in-white-dress-among-sheep-on-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Image 4"
                onClick={() => handleImageClick("https://images.pexels.com/photos/17708522/pexels-photo-17708522/free-photo-of-woman-in-white-dress-among-sheep-on-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")}
              />
              <div>
                <h3 className="text-[#97987d] font-bold">Image 4</h3>
                <p className="text-[#7a7979]">temporibus consequuntur quam.</p>
                <button className="bg-[#989a6f] hover:bg-[#7f8058] text-white py-2 px-4 rounded-md transition-colors">
                  Click Me
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
            <div className="relative">
              <img src={selectedImage} alt="Selected" className="rounded-[5px] max-w-[80%] max-h-[90vh]" />
              <button className="absolute top-2 right-2 text-white" onClick={closeModal}>
                X
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Section2; 
