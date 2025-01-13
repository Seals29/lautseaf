import Image from "next/image";
import Navbar from "../../components/navbar";
import "../../app/globals.css";

export default function Home() {
  return (
    <div style={{ 
                  backgroundImage: `url("/assets/home_bawah.jpg")`, 
            backgroundAttachment: "fixed", 
            backgroundSize: "cover", 
            backgroundRepeat: "no-repeat"
     }}>
      <Navbar />

      <div className="w-full h-[400px] relative">
        <Image
          src="/assets/ocean-waves-lighten.jpg"
          alt="fog"
          layout="fill"
          objectFit="cover" 
        />

        <div className="absolute inset-0 flex items-center justify-center text-black text-7xl  text-center z-10 font-bold">
          <div>
            About SeaMatrix
          </div>
        </div>
      </div>

      <div className="flex justify-center p-4">
        <div className=" text-white p-6 w-[80%] md:w-[60%]">
          <h3 className="text-xl font-semibold text-center">About Sea Matrix</h3>
          <p className="mt-4 text-center font-thin">SeaMatrix is a website created as part of the thesis project.</p>
          <p className="mt-4 text-center font-bold">"Analysis and Prediction of Ocean Constituents Based on Correlation Between Variables in California Waters."</p>
          <p className="mt-4 text-center font-thin">This tool represents the Model Deployment stages of the thesis, demonstrating how the predictive model can be utilized in a user-friendly interface.</p>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <div className=" text-white p-6 w-[80%] md:w-[60%]">
          <h3 className="text-xl font-semibold text-center">Purpose of SeaMatrix</h3>
          <p className="mt-4 text-center font-thin">This website was designed to showcase the practical application of machine learning in predicting ocean constituents, such as salinity, phosphate, chlorophyll-a, and oxygen concentration. By providing an interactive interface, SeaMatrix illustrates how complex predictions can be made accessible to a wider audience.</p>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <div className=" text-white p-6 w-[80%] md:w-[60%]">
          <h3 className="text-xl font-semibold text-center">Model and Performance</h3>

          <p className="mt-4 text-center font-thin">SeaMatrix utilizes advanced machine learning models, including XGBoost, to predict ocean constituents with an impressive error rate of less than 7%. The predictive models were trained using high-quality data from the CalCOFI dataset, ensuring accuracy and reliability.</p>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <div className=" text-white p-6 w-[80%] md:w-[60%]">
          <h3 className="text-xl font-semibold text-center">Acknowledgements</h3>
          <p className="mt-4 text-center font-thin">This project would not have been possible without the extensive dataset provided by CalCOFI (California Cooperative Oceanic Fisheries Investigations), whose contributions to oceanographic research are invaluable. I would also like to express my gratitude to my Supervisor for their invaluable guidance and support throughout this project.</p>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <div className=" text-white p-6 w-[30%] md:w-[30%]">
          <h3 className="text-xl font-semibold text-center">Contact Information</h3>
          <p className="mt-4 text-center font-thin">For inquiries or feedback, feel free to reach out at:
            <br />
            📧 samuel.alamsyah@binus.ac.id
            <br />
            Bina Nusantara University, Jakarta, Indonesia</p>
        </div>
      </div>
    </div>
  );
}
