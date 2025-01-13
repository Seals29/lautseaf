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
        <div className=" text-white p-6 w-[60%] md:w-[40%]">
          {/* Card content */}
          <p className="mt-4 text-center font-thin">The ocean covers over 70% of Earth's surface and plays a crucial role in regulating climate, supporting biodiversity, and providing resources. It is divided into several layers, each with unique characteristics. The ocean is not just a body of water; it’s a dynamic, living system that influences weather patterns, stores carbon, and sustains marine life.</p>
        </div>
      </div>

      <div className="flex justify-center p-4">
        <div className=" text-white p-6 w-[80%] md:w-[60%]">
          {/* Card content */}
          <h3 className="text-xl font-semibold text-center">Zones of the Waters</h3>
          <p className="mt-4 text-center font-thin">The ocean is divided into distinct zones, each with unique environmental characteristics and animal life. These zones are determined by both light penetration and water depth, affecting the type of organisms that can survive there.</p>
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
        <div className="w-1/2 text-left text-white p-6">
          <h3 className="text-xl font-semibold">Epipelagic Zone (Sunlit Zone)</h3>
          <p className="mt-4 font-thin">The top layer of the ocean, extending from the surface to about 200 meters (660 feet) deep. Sunlight penetrates this zone, allowing for photosynthesis and supporting the highest density of marine life. Notable animals include the blue whale (the largest animal on Earth) and the sailfish (known for its speed). You’ll also find schools of mackerel and tuna, and other whales.</p>
        </div>
      </div>
    {/* ---- */}
      <div className="flex justify-center items-center p-4 space-x-4">
        {/* Image container - left 50% */}
        

        {/* Text container - right 50% */}
        <div className="w-1/2 text-left text-white p-6">
          <h3 className="text-xl font-semibold">Mesopelagic Zone (Twilight Zone)</h3>
          <p className="mt-4 font-thin">SeaMatrix is a website created as part of the thesis project.</p>
          <p className="mt-4 font-thin">Stretching from 200 to about 1,000 meters (3,280 feet) deep, light only penetrates slightly into this zone, creating a twilight atmosphere. Here, you'll find animals like the lanternfish (which uses bioluminescence to navigate the dark) and the cookiecutter shark (named for the unique circular bite marks it leaves on larger animals).</p>
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
          <h3 className="text-xl font-semibold">Bathypelagic Zone (Midnight Zone)</h3>
          <p className="mt-4 font-thin">This zone ranges from 1,000 to about 4,000 meters (13,120 feet) deep. It’s pitch black, with extreme pressure and cold temperatures. Notable animals include the giant squid (which can grow up to 12-14 feet long) and the anglerfish (which uses a bioluminescent lure to attract prey).</p>
        </div>
      </div>
      {/* -- */}
      <div className="flex justify-center items-center p-4 space-x-4">
        {/* Image container - left 50% */}
       

        {/* Text container - right 50% */}
        <div className="w-1/2 text-left text-white p-6">
          <h3 className="text-xl font-semibold">Abyssopelagic Zone</h3>
          <p className="mt-4 font-thin">Extending from 4,000 to about 6,000 meters (19,680 feet) deep, it remains pitch black and has freezing temperatures and very high pressure. The creatures found here include the deep-sea anglerfish (known for its glowing lure) and abyssal octopus (which thrives under extreme pressure). </p>
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
          <h3 className="text-xl font-semibold">Hadal Zone</h3>
          <p className="mt-4 font-thin">The deepest part of the ocean, located in deep ocean trenches and exceeding depths of 6,000 meters (19,680 feet). Life here is adapted to extreme conditions, including extreme pressure and minimal oxygen. Notable animals include hadal amphipods (shrimp-like creatures) and hadal worms (which live in deep-sea trenches and are adapted to survive the harsh conditions).</p>
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
    layout="fill" 
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
