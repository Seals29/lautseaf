import Image from "next/image";
import Navbar from "../components/navbar";
import "../app/globals.css";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000D1E', fontFamily: 'Poppins' }}>
      <Navbar />

      <div className="w-full h-[825px] relative">
        {/* Image component */}
        <Image
          src="/assets/home_atas.jpg"
          alt="fog"
          layout="fill" // Makes the image fill the parent container
          objectFit="cover" // Ensures the image covers the entire container while maintaining its aspect ratio
        />

        {/* Centered text and logo */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-extralight text-center z-10">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/assets/SeaMatrixLogo.png"
              alt="SeaMatrix Logo"
              width={500}
              height={200}
              objectFit="cover" // Ensures the image covers the entire container while maintaining its aspect ratio
            />
            <br />
            <span>Predict Key Ocean Constituents Instantly with SeaMatrix</span>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="p-2">
            <button className="border-2 border-white text-white pr-14 pl-14  hover:bg-white hover:text-black transition-all duration-300 p-2">
  Start Predicting {'>'}
</button>
            </div>
          </div>
        </div>
      </div>

      {/* Box Card below the image */}
      <div className="pt-0 flex justify-center p-4">
        <div className=" text-white p-6 w-[80%] md:w-[60%]">
          <h3 className="text-xl font-semibold text-center">What is SeaMatrix?</h3>
          <p className="mt-4 text-center font-thin">SeaMatrix is your go-to platform for analyzing and predicting marine water constituents.
            <br />
             Predict salinity, nutrients, or oxygen levels with ease—no need to register or log in.
             <br /> Just input your data, and let SeaMatrix do the work!</p>
         
        </div>
      </div>
      {/* Repeat Box Cards */}
      <div className="pt-0 flex justify-center p-4">
        <div className=" text-white p-6 w-[80%] md:w-[60%]">
          <h3 className="text-xl font-semibold text-center">Predict Key Ocean Constituents</h3>
          <p className="mt-4 text-center font-thin mb-16">SeaMatrix enables you to predict essential marine variables
            <br />


              </p>
              <p className="mt-1 text-center font-thin">Water Salinity
              </p>

              <p className="mt-1 text-center font-thin">Phosphate Concentration
              </p>
              <p className="mt-1 text-center font-thin">Chlorophyll-a Levels
              </p>
              <p className="mt-1 text-center font-extralight">Oxygen Concentration
              </p>
        </div>
        
      </div>
      <div className="p-5 flex justify-center flex-row">
            <button className="border-2 border-white text-white pr-14 pl-14  hover:bg-white hover:text-black transition-all duration-300 p-2">
  Start Predicting {'>'}
</button>
            </div>


             <div className="w-full h-[1120px] relative">
                    {/* Image component */}
                    <Image
                      src="/assets/home_bawah.jpg"
                      alt="fog"
                      layout="fill" // Makes the image fill the parent container
                      objectFit="cover" // Ensures the image covers the entire container while maintaining its aspect ratio
                    />
            
                    {/* Centered text */}
                    <div className="absolute inset-0 flex items-center justify-center text-white  text-center z-10 text-3xl flex-col gap-16">
                      <h1>Explore SeaMatrix</h1>
                      <p className="text-sm">Navigate our website and discover everything SeaMatrix has to offer. Jump straight to the sections you're most interested in:</p>
                      <a href="./predict" className="border-2 border-white text-whitepr-12 pl-12 w-[500px] hover:bg-white hover:text-black transition-all duration-300 p-2">
  SeaMatrix Prediction Tool
</a>
<a href="./learn" className="border-2 border-white text-white pr-12 pl-12 w-[500px] hover:bg-white hover:text-black transition-all duration-300 p-2">
  Learn About the Ocean
</a>
<a href="./predict"  className="border-2 border-white text-white pr-12 pl-12 w-[500px] hover:bg-white hover:text-black transition-all duration-300 p-2">
  How to Use Prediction Tool
</a>
<a href="./about" className="border-2 border-white text-white pr-12 pl-12 w-[500px] hover:bg-white hover:text-black transition-all duration-300 p-2">
  About SeaMatrix
</a>

                        <br />
                        <br />
                        <h1 className="pt-5 text-white">Did You Know?</h1>
                        <p className="text-white w-[60%] text-sm ">Salinity levels are shifting in various parts of the ocean, with freshening in polar regions and increased salinity in subtropics, driven by climate change.</p>
                    </div>
                  </div>
      {/* You can repeat the following structure for additional content as needed */}
    </div>
  );
}
