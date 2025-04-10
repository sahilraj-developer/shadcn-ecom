import { Button } from "@/components/ui/button";
import { Key } from "react";

const Section2 = ({ carouselImages, handleImageUpload, handleCancel, handleSave }:any) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Section 2: Edit Carousel Images
      </h2>

      {/* Instructions for Image Restrictions */}
      <div className="mb-4 text-gray-600 text-sm text-center">
        <p>
          Note: Images must be in JPEG, PNG, or GIF format and should be no larger than 2MB in size. Recommended dimensions are 800x400 pixels.
        </p>
      </div>

      {/* Carousel Image Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {carouselImages.map((image: { image: any; alt: string | undefined; }, index: Key | null | undefined) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="relative w-full h-40 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={image.image || "https://via.placeholder.com/800x400?text=Placeholder+Image"}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
              {/* Placeholder text for clarity */}
              {!image.image && (
                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 text-sm font-semibold">
                  <span>Upload Image</span>
                </div>
              )}
            </div>

            {/* Image Upload Input */}
            <input
              type="file"
              onChange={(e) => handleImageUpload(e, index, "carousel")}
              className="w-full mt-4 p-2 border border-gray-300 rounded-md text-sm cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-6 justify-center mt-8">
        <Button
          onClick={handleCancel}
          variant="outline"
          className="px-6 py-3 rounded-md border-2 border-gray-300 text-gray-700 hover:bg-gray-200 transition duration-300"
        >
          Cancel
        </Button>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </section>
  );
};

export default Section2;