import Image from "next/image";
import Navbar from "../../components/navbar";
import "../../app/globals.css";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000D1E', fontFamily: 'Poppins, sans-serif' }}>
      <Navbar />

      <div className="w-full h-[400px] relative">
        {/* Image component */}
        <Image
          src="/assets/ocean-waves-lighten.jpg"
          alt="fog"
          layout="fill" // Makes the image fill the parent container
          objectFit="cover" // Ensures the image covers the entire container while maintaining its aspect ratio
        />

        {/* Centered text */}
        <div className="absolute inset-0 flex items-center justify-center text-black text-7xl  text-center z-10">
          <div>
            The Ocean: Our Planets
            <br />
            Lifeblood
          </div>
        </div>
      </div>

      {/* Box Card below the image */}
      <div className="flex justify-center p-4">
        <div className=" text-white p-6 w-[80%] md:w-[60%]">
          {/* Card content */}
          <h3 className="text-xl font-semibold text-center">About Sea Matrix</h3>
          <p className="mt-4 text-center font-thin">SeaMatrix is a website created as part of the thesis project.</p>
          <p className="mt-4 text-center font-bold">"Analysis and Prediction of Ocean Constituents Based on Correlation Between Variables in California Waters."</p>
          <p className="mt-4 text-center font-thin">This tool represents the Model Deployment stages of the thesis, demonstrating how the predictive model can be utilized in a user-friendly interface.</p>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <div className=" text-white p-6 w-[80%] md:w-[60%]">
          {/* Card content */}
          <h3 className="text-xl font-semibold text-center">About Sea Matrix</h3>
          <p className="mt-4 text-center font-thin">SeaMatrix is a website created as part of the thesis project.</p>
          <p className="mt-4 text-center font-bold">"Analysis and Prediction of Ocean Constituents Based on Correlation Between Variables in California Waters."</p>
          <p className="mt-4 text-center font-thin">This tool represents the Model Deployment stages of the thesis, demonstrating how the predictive model can be utilized in a user-friendly interface.</p>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <div className=" text-white p-6 w-[80%] md:w-[60%]">
          {/* Card content */}
          <h3 className="text-xl font-semibold text-center">About Sea Matrix</h3>
          <p className="mt-4 text-center font-thin">SeaMatrix is a website created as part of the thesis project.</p>
          <p className="mt-4 text-center font-bold">"Analysis and Prediction of Ocean Constituents Based on Correlation Between Variables in California Waters."</p>
          <p className="mt-4 text-center font-thin">This tool represents the Model Deployment stages of the thesis, demonstrating how the predictive model can be utilized in a user-friendly interface.</p>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <div className=" text-white p-6 w-[80%] md:w-[60%]">
          {/* Card content */}
          <h3 className="text-xl font-semibold text-center">About Sea Matrix</h3>
          <p className="mt-4 text-center font-thin">SeaMatrix is a website created as part of the thesis project.</p>
          <p className="mt-4 text-center font-bold">"Analysis and Prediction of Ocean Constituents Based on Correlation Between Variables in California Waters."</p>
          <p className="mt-4 text-center font-thin">This tool represents the Model Deployment stages of the thesis, demonstrating how the predictive model can be utilized in a user-friendly interface.</p>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <div className=" text-white p-6 w-[80%] md:w-[60%]">
          {/* Card content */}
          <h3 className="text-xl font-semibold text-center">About Sea Matrix</h3>
          <p className="mt-4 text-center font-thin">SeaMatrix is a website created as part of the thesis project.</p>
          <p className="mt-4 text-center font-bold">"Analysis and Prediction of Ocean Constituents Based on Correlation Between Variables in California Waters."</p>
          <p className="mt-4 text-center font-thin">This tool represents the Model Deployment stages of the thesis, demonstrating how the predictive model can be utilized in a user-friendly interface.</p>
        </div>
      </div>
    </div>
  );
}
