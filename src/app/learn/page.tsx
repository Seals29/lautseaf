import Image from "next/image";
import Navbar from "../../components/navbar";
import "../../app/globals.css";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000D1E' }}>
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
        <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-center z-10 text-7xl">
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

      {/* Section with image on the left and text centered on the right */}
      <div className="flex justify-center items-center p-4 space-x-4">
        {/* Image container - left 50% */}
        <div className="w-1/2 relative h-[500px]"> {/* Set a specific height */}
          <Image
            src="/assets/ocean-waves.jpg" // Replace with the correct image source
            alt="Ocean Waves"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Text container - right 50% */}
        <div className="w-1/2 text-center text-white p-6">
          <h3 className="text-xl font-semibold">About Sea Matrix</h3>
          <p className="mt-4 font-thin">SeaMatrix is a website created as part of the thesis project.</p>
          <p className="mt-4 font-bold">"Analysis and Prediction of Ocean Constituents Based on Correlation Between Variables in California Waters."</p>
          <p className="mt-4 font-thin">This tool represents the Model Deployment stages of the thesis, demonstrating how the predictive model can be utilized in a user-friendly interface.</p>
        </div>
      </div>
    {/* ---- */}
      <div className="flex justify-center items-center p-4 space-x-4">
        {/* Image container - left 50% */}
        

        {/* Text container - right 50% */}
        <div className="w-1/2 text-center text-white p-6">
          <h3 className="text-xl font-semibold">About Sea Matrix</h3>
          <p className="mt-4 font-thin">SeaMatrix is a website created as part of the thesis project.</p>
          <p className="mt-4 font-bold">"Analysis and Prediction of Ocean Constituents Based on Correlation Between Variables in California Waters."</p>
          <p className="mt-4 font-thin">This tool represents the Model Deployment stages of the thesis, demonstrating how the predictive model can be utilized in a user-friendly interface.</p>
        </div>
        <div className="w-1/2 relative h-[500px]"> {/* Set a specific height */}
          <Image
            src="/assets/ocean-waves.jpg" // Replace with the correct image source
            alt="Ocean Waves"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
        {/* --- */}
      <div className="flex justify-center items-center p-4 space-x-4">
        {/* Image container - left 50% */}
        <div className="w-1/2 relative h-[500px]"> {/* Set a specific height */}
          <Image
            src="/assets/ocean-waves.jpg" // Replace with the correct image source
            alt="Ocean Waves"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Text container - right 50% */}
        <div className="w-1/2 text-center text-white p-6">
          <h3 className="text-xl font-semibold">About Sea Matrix</h3>
          <p className="mt-4 font-thin">SeaMatrix is a website created as part of the thesis project.</p>
          <p className="mt-4 font-bold">"Analysis and Prediction of Ocean Constituents Based on Correlation Between Variables in California Waters."</p>
          <p className="mt-4 font-thin">This tool represents the Model Deployment stages of the thesis, demonstrating how the predictive model can be utilized in a user-friendly interface.</p>
        </div>
      </div>
      {/* -- */}
      <div className="flex justify-center items-center p-4 space-x-4">
        {/* Image container - left 50% */}
       

        {/* Text container - right 50% */}
        <div className="w-1/2 text-center text-white p-6">
          <h3 className="text-xl font-semibold">About Sea Matrix</h3>
          <p className="mt-4 font-thin">SeaMatrix is a website created as part of the thesis project.</p>
          <p className="mt-4 font-bold">"Analysis and Prediction of Ocean Constituents Based on Correlation Between Variables in California Waters."</p>
          <p className="mt-4 font-thin">This tool represents the Model Deployment stages of the thesis, demonstrating how the predictive model can be utilized in a user-friendly interface.</p>
        </div>
        <div className="w-1/2 relative h-[500px]"> {/* Set a specific height */}
          <Image
            src="/assets/ocean-waves.jpg" // Replace with the correct image source
            alt="Ocean Waves"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex justify-center items-center p-4 space-x-4">
        {/* Image container - left 50% */}
        <div className="w-1/2 relative h-[500px]"> {/* Set a specific height */}
          <Image
            src="/assets/ocean-waves.jpg" // Replace with the correct image source
            alt="Ocean Waves"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Text container - right 50% */}
        <div className="w-1/2 text-center text-white p-6">
          <h3 className="text-xl font-semibold">About Sea Matrix</h3>
          <p className="mt-4 font-thin">SeaMatrix is a website created as part of the thesis project.</p>
          <p className="mt-4 font-bold">"Analysis and Prediction of Ocean Constituents Based on Correlation Between Variables in California Waters."</p>
          <p className="mt-4 font-thin">This tool represents the Model Deployment stages of the thesis, demonstrating how the predictive model can be utilized in a user-friendly interface.</p>
        </div>
      </div>


      <div className="flex justify-center p-4 mt-14 pb-5">
  <div className="text-white p-6 w-[80%] md:w-[60%]">
    {/* Card content */}
    <h1 className="text-4xl font-semibold text-center">Water Constituents and Related Ocean Factors</h1>
    <p className="mt-4 text-center text-xl font-extralight m-10">The ocean contains a variety of chemical and biological constituents that are essential for marine ecosystems and play a critical role in ocean productivity and health. These include</p>
  </div>
</div>

<div className="w-full h-[1200px] relative z-0">
  {/* Image component */}
  <Image
    src="/assets/home_tengah.jpg"
    alt="fog"
    layout="fill" // Makes the image fill the parent container
    objectFit="cover" // Ensures the image covers the entire container while maintaining its aspect ratio
  />

  {/* Text container with adjusted z-index */}
  <div className="absolute inset-0 flex justify-center items-center p-4 z-10 pb-0">
    <div className="text-white p-6 w-[80%] md:w-[60%]  via-transparent to-transparent">
      {/* Card content */}
      <h1 className="text-3xl font-semibold text-center">Water Salinity</h1>
      <p className="mt-4 text-center text-lg font-extralight m-10">The concentration of salts in seawater, typically ranging between 32-37 parts per thousand (ppt), varies depending on location and climate factors. High salinity is often found in subtropical regions, while polar and coastal regions have lower salinity due to freshwater inflows.</p>
      

      <h1 className="text-3xl font-semibold text-center">Phosphate</h1>
      <p className="mt-4 text-center text-lg font-extralight m-10">Essential for marine plants, especially phytoplankton, phosphate levels typically range from 0.1 to 2.0 micromoles per liter (µmol/L). Excess phosphate, often from agricultural runoff, can lead to eutrophication and harmful algae blooms. Phosphate is a vital nutrient for the growth of these microorganisms, which form the base of marine food webs.</p>
      

      <h1 className="text-3xl font-semibold text-center">Chlorophyll-a</h1>
      <p className="mt-4 text-center text-lg font-extralight m-10">A key pigment for photosynthesis, chlorophyll-a concentrations typically range between 0.1 to 10 micrograms per liter (µg/L), but can vary based on ocean productivity. High concentrations often indicate rich marine life, particularly in areas where phytoplankton thrive. This pigment is used to monitor the health of marine plants and the amount of primary production in the ocean.</p>
      
      <h1 className="text-3xl font-semibold text-center">Oxygen</h1>
      <p className="mt-4 text-center text-lg font-extralight m-10">Crucial for marine life, oxygen levels range between 4 to 10 milligrams per liter (mg/L) in well-oxygenated waters. However, oxygen levels can drop significantly in areas with high nutrient inputs, creating 'dead zones' where oxygen is depleted and marine life cannot survive. These areas are a growing concern due to pollution and climate change.</p>
      
      <h1 className="text-3xl font-semibold text-center">Silicate, Nitrite, Nitrate</h1>
      <p className="mt-4 text-center text-lg font-extralight m-10">These are essential nutrients for phytoplankton growth. Silicate typically ranges from 1 to 10 micromoles per liter (µmol/L), while nitrite and nitrate range from 0.01 to 1 micromoles per liter (µmol/L). High concentrations of nitrate can indicate nutrient-rich waters conducive to phytoplankton blooms, but excessive levels may lead to imbalances in marine ecosystems.</p>

    </div>
  </div>
  
</div>
<br />

<div className=" inset-0 flex justify-center items-center p-4 z-10 pb-0">
        <div className=" text-white p-6 w-[80%] md:w-[60%]  " >
        <h1 className="text-4xl font-semibold text-center">Other Constituents</h1>
        <p className="mt-4 text-center text-xl font-extralight">Trace elements like iron, calcium, and dissolved gases are also vital for ocean health and productivity. These constituents support various biochemical processes in marine life, from coral reefs to the smallest plankton. For instance, calcium is crucial for the formation of coral skeletons, while iron is an essential nutrient for phytoplankton in iron-limited regions.</p>
        </div>
        </div>

    </div>
  );
}
