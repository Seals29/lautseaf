"use client";
import { useState } from "react";
import { Input, Slider } from "@nextui-org/react";
import Navbar from "seaf/components/navbar";
import Image from "next/image";

export default function Home() {
    const [value, setValue] = useState("");

    const handleSliderChange = (newValue: any) => {
        setValue(newValue);
    };

    return (
        <div
            style={{
                backgroundColor: "#000D1E",
                fontFamily: "Poppins, sans-serif",
            }}
            className="text-white"
        >
            <Navbar />
            <div className="w-full h-[400px] relative">
                {/* Image component */}
                <Image
                    src="/assets/pred-page.jpg"
                    alt="fog"
                    layout="fill" // Makes the image fill the parent container
                    objectFit="cover" // Ensures the image covers the entire container while maintaining its aspect ratio
                />

                {/* Centered text */}
                <div className="absolute inset-0 flex items-center justify-center text-black text-5xl text-center z-10">
                    <div>
                        Predict Ocean Water
                        <br />
                        <br />
                        Constituents
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center  max-w-[60%] mx-auto">
                <div className="p-5">
                    <p className="text-center">
                        Select a variable to predict and input the necessary
                        details
                    </p>
                </div>
                <div className="mt-16">
                    <p className="text-center font-bold text-2xl">
                        Don't know how to use the tool yet?{" "}
                    </p>
                </div>
                <div className="mt-2 mb-24">
                    <button className="border-2 border-white text-white pr-12 pl-12 w-[280px] hover:bg-white hover:text-black transition-all duration-300 p-2">
                        Learn How!
                    </button>
                </div>
                {/* Select dropdown */}

                <div className="mt-16">
                    <p className="text-center font-bold text-2xl">
                        What would you like to know?{" "}
                    </p>
                </div>
                <div className="mt-2">
                    <select
                        id="dropdown"
                        className="border-2 border-white text-white bg-transparent px-6 py-3 mt-2 hover:bg-white hover:text-black transition-all duration-300"
                        defaultValue="water"
                    >
                        <option disabled value="">
                            Choose an option
                        </option>
                        <option value="water salinity">Water Salinity</option>
                        <option value="2">2. Input the .</option>
                        <option value="3">3. results.</option>
                    </select>
                </div>

                <div className="mt-16 pb-2">
                    <p className="text-center font-bold text-2xl">
                        Fill in the required fields for accurate predictions
                    </p>
                </div>

                <div className="p-5 max-w-[60%]">
                    <p className="text-center leading-10">
                        Use the sliders or input boxes to enter values within
                        the specified range for each parameter. Accurate inputs
                        lead to better predictions! Typical (Typ) are various
                        each region: Epipelagic Zone (EZ), Mesopelagic Zone
                        (MZ), Bathypelagic Zone (BZ), Abyssopelagic Zone (AZ),
                        Hadal Zone (HZ)
                    </p>
                </div>

                {/* Slider component */}
                {/* <Slider
          aria-label="Select a value"
          value={value} // Track the value with state
          onChange={handleSliderChange} // Use the new handler
          step={1} // Step size
        /> */}
                <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                    <h1 className="text-white font-bold  text-center">
                        Water Temperature (c)
                    </h1>
                    <p className="text-white font-normal text-sm">
                        {" "}
                        Typ: 10-30 (EZ), 5-10 (MZ), 0-5 (BZ), 0-2 (AZ), 0-1 (HZ)
                    </p>
                    <input
                        type="text"
                        value={value}
                        disabled
                        style={{
                            textAlign: "center",
                            width: "100%",
                            backgroundColor: "transparent", // Ensures background is transparent
                        }}
                        className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                    />
                    <Slider
                        className=""
                        defaultValue={0}
                        onChange={handleSliderChange}
                        label="sda"
                        maxValue={50}
                        minValue={-5}
                        step={0.01}
                    />
                </div>

                <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                    <h1 className="text-white font-bold text-center ">
                        Water Salinity (ppt)
                    </h1>
                    <p className="text-white font-normal text-sm">
                        {" "}
                        Typ: 30-36 (EZ), 34-35.5 (MZ), 34.5-35 (BZ), 34.6-35
                        (AZ), 35+ (HZ)
                    </p>
                    <input
                        type="text"
                        value={value}
                        disabled
                        style={{
                            textAlign: "center",
                            width: "100%",
                            backgroundColor: "transparent", // Ensures background is transparent
                        }}
                        className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                    />
                    <Slider
                        defaultValue={0}
                        onChange={handleSliderChange}
                        label="sda"
                        maxValue={50}
                        minValue={-5}
                        step={0.01}
                    />
                </div>

                <div
                    className="flex text-black flex-col gap-2 mt-20 w-[50%]"
                    style={{
                        backgroundColor: "#000D1E",
                    }}
                >
                    <h1 className="text-white font-bold  text-center">
                        Oxygen Concentration (mL/L)
                    </h1>
                    <p className="text-white font-normal text-sm">
                        {" "}
                        Typ: 6-10 (EZ), 1-6 (MZ), 3-6 (BZ), 4-8 (AZ & HZ)
                    </p>
                    <input
                        type="text"
                        value={value}
                        disabled
                        style={{
                            textAlign: "center",
                            width: "100%",
                            backgroundColor: "transparent", // Ensures background is transparent
                        }}
                        className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                    />

                    <Slider
                        defaultValue={0}
                        onChange={handleSliderChange}
                        label="sda"
                        maxValue={50}
                        minValue={-5}
                        step={0.01}
                    />
                </div>

                <div
                    className="flex text-black flex-col gap-2 mt-20 w-[50%]"
                    style={{
                        backgroundColor: "#000D1E",
                    }}
                >
                    <h1 className="text-white font-bold  text-center">
                        Potential Density (kg/m³)
                    </h1>
                    <p className="text-white font-normal text-sm">
                        {" "}
                        Typ: 19-24 (EZ), 24-27.5 (MZ), 27.5-28 (BZ), 28+ (AZ &
                        HZ)
                    </p>
                    <input
                        type="text"
                        value={value}
                        disabled
                        style={{
                            textAlign: "center",
                            width: "100%",
                            backgroundColor: "transparent", // Ensures background is transparent
                        }}
                        className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                    />

                    <Slider
                        defaultValue={0}
                        onChange={handleSliderChange}
                        label="sda"
                        maxValue={50}
                        minValue={-5}
                        step={0.01}
                    />
                </div>

                <div
                    className="flex text-black flex-col gap-2 mt-20 w-[50%]"
                    style={{
                        backgroundColor: "#000D1E",
                    }}
                >
                    <h1 className="text-white font-bold  text-center">
                        Chlorophyll-a (µg/L)
                    </h1>
                    <p className="text-white font-normal text-sm">
                        {" "}
                        Typ: 0.10-20 (EZ), 0.01-0.1 (MZ), 0-0.01 (BZ), Near 0
                        (AZ & HZ)
                    </p>
                    <input
                        type="text"
                        value={value}
                        disabled
                        style={{
                            textAlign: "center",
                            width: "100%",
                            backgroundColor: "transparent", // Ensures background is transparent
                        }}
                        className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                    />

                    <Slider
                        defaultValue={0}
                        onChange={handleSliderChange}
                        label="sda"
                        maxValue={50}
                        minValue={-5}
                        step={0.01}
                    />
                </div>

                <div
                    className="flex text-black flex-col gap-2 mt-20 w-[50%]"
                    style={{
                        backgroundColor: "#000D1E",
                    }}
                >
                    <h1 className="text-white font-bold  text-center">
                        Phaeophytin-a (µg/L)
                    </h1>
                    <p className="text-white font-normal text-sm">
                        {" "}
                        Typ: 0-5 (EZ), 0-1 (MZ), Near 0 (BZ & AZ & HZ)
                    </p>
                    <input
                        type="text"
                        value={value}
                        disabled
                        style={{
                            textAlign: "center",
                            width: "100%",
                            backgroundColor: "transparent", // Ensures background is transparent
                        }}
                        className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                    />

                    <Slider
                        defaultValue={0}
                        onChange={handleSliderChange}
                        label="sda"
                        maxValue={50}
                        minValue={-5}
                        step={0.01}
                    />
                </div>
                <div
                    className="flex text-black flex-col gap-2 mt-20 w-[50%]"
                    style={{
                        backgroundColor: "#000D1E",
                    }}
                >
                    <h1 className="text-white font-bold  text-center">
                        Silicate (µmol/L)
                    </h1>
                    <p className="text-white font-normal text-sm">
                        {" "}
                        Typ: 1-5 (EZ), 5-50 (MZ), 50-100 (BZ), 100+ (AZ & HZ)
                    </p>
                    <input
                        type="text"
                        value={value}
                        disabled
                        style={{
                            textAlign: "center",
                            width: "100%",
                            backgroundColor: "transparent", // Ensures background is transparent
                        }}
                        className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                    />

                    <Slider
                        defaultValue={0}
                        onChange={handleSliderChange}
                        label="sda"
                        maxValue={50}
                        minValue={-5}
                        step={0.01}
                    />
                </div>

                <div
                    className="flex text-black flex-col gap-2 mt-20 w-[50%]"
                    style={{
                        backgroundColor: "#000D1E",
                    }}
                >
                    <h1 className="text-white font-bold  text-center">
                        Nitrite (µmol/L)
                    </h1>
                    <p className="text-white font-normal text-sm">
                        {" "}
                        Typ: 0-0.5 (EZ), 0.5-1 (MZ), 0-0.5 (BZ & AZ & HZ)
                    </p>
                    <input
                        type="text"
                        value={value}
                        disabled
                        style={{
                            textAlign: "center",
                            width: "100%",
                            backgroundColor: "transparent", // Ensures background is transparent
                        }}
                        className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                    />

                    <Slider
                        defaultValue={0}
                        onChange={handleSliderChange}
                        label="sda"
                        maxValue={50}
                        minValue={-5}
                        step={0.01}
                    />
                </div>

                <div
                    className="flex text-black flex-col gap-2 mt-20 w-[50%]"
                    style={{
                        backgroundColor: "#000D1E",
                    }}
                >
                    <h1 className="text-white font-bold  text-center">
                        Nitrate (µmol/L)
                    </h1>
                    <p className="text-white font-normal text-sm">
                        {" "}
                        Typ: 0-5 (EZ), 5-20 (MZ), 2-30 (BZ), 30+ (AZ & HZ)
                    </p>
                    <input
                        type="text"
                        value={value}
                        disabled
                        style={{
                            textAlign: "center",
                            width: "100%",
                            backgroundColor: "transparent", // Ensures background is transparent
                        }}
                        className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                    />

                    <Slider
                        defaultValue={0}
                        onChange={handleSliderChange}
                        label="sda"
                        maxValue={50}
                        minValue={-5}
                        step={0.01}
                    />
                </div>

                <div className="mt-2 mb-24">
                    <button className="border-2 border-white text-white pr-12 pl-12 w-[280px] hover:bg-white hover:text-black transition-all duration-300 p-2 mt-24 ">
                        GET PREDICTION
                    </button>
                </div>

                <h2>Your Results Are</h2>
                <div className="mt-2 mb-24">
                    <div className="border-2 border-white text-white pr-14 pl-14 w-[280px] p-2 pt-10 pb-10  ">
                        XXX
                    </div>
                </div>
                <p>You are mostlikely asdaskdkasdasd</p>

                <div className="flex justify-center p-4">
                    <div className=" text-white p-6 w-[80%] md:w-[60%]">
                        {/* Card content */}
                        <h3 className="text-xl font-semibold text-center">
                            How It Works
                        </h3>
                        <p className="mt-4 text-center font-thin">
                            This tool leverages advanced machine learning models
                            such as XGBoost and Linear Regression, optimized for
                            each variable to ensure the highest accuracy. By
                            analyzing the relationships between the provided
                            inputs, the tool delivers predictions with the
                            smallest RMSE (Root Mean Squared Error) possible.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center p-4">
                    <div className=" text-white p-6 w-[80%] md:w-[60%]">
                        {/* Card content */}
                        <h3 className="text-xl font-semibold text-center">
                            About Sea Matrix
                        </h3>
                        <p className="mt-4 text-center font-thin">
                            1. Choose a Variable to Predict: Use the dropdown
                            menu to select what you want to predict—water
                            salinity, phosphate, chlorophyll-a, or oxygen
                            concentration.
                        </p>
                        <p className="mt-4 text-center font-thin">
                            2. Fill in the Required Fields: Enter the remaining
                            values using either the sliders or input boxes.
                            Ensure the inputs are within the specified ranges
                            for better accuracy.
                        </p>
                        <p className="mt-4 text-center font-thin">
                            3. Click the "Get Prediction" Button: The tool will
                            process your inputs and display the prediction.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
