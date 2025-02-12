"use client";
import { SetStateAction, useState, Dispatch, useRef } from "react";
import { Input, Slider } from "@nextui-org/react";
import Navbar from "seaf/components/navbar";
import Image from "next/image";
import { AuroraBackgroundDemo } from "seaf/components/aurora_components";

export default function Home() {
    const [value, setValue] = useState("");

    const handleSliderChange = (newValue: any) => {
        setValue(newValue);
    };
    const [selectedOption, setSelectedOption] = useState("");
    const handleDropdownChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setSelectedOption(event.target.value);
    };
    const handleInputChange = (
        setter: Dispatch<SetStateAction<number>>, // Setter function for state
        value: number | number[] // Input value can be a number or an array of numbers
    ) => {
        if (typeof value === "number") {
            setter(value); // If it's a single number, update the state
        } else if (Array.isArray(value) && value.length > 0) {
            setter(value[0]); // If it's an array, use the first value
        } else {
            console.error("Invalid value passed to handleInputChange");
        }
    };
    // Create a reference for the button click
    const bottomRef = useRef(null);

    const scrollToBottom = () => {
        // Scroll the page to the bottom
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    const [waterSalinity, setWaterSalinity] = useState<number>(0);
    const [waterTemp, setWaterTemp] = useState<number>(0);
    const [potentialDensity, setPotentialDensity] = useState<number>(0);
    const [phaeop, setPhaeop] = useState(0);
    const [silicate, setSilicate] = useState(0);
    const [nitrate, setNitrate] = useState(0);
    const [nitrite, setNitrite] = useState(0);
    const [chlorophyl, setChlorophyl] = useState(0);
    const [oxygenConc, setOxygenConc] = useState(0);
    const [phosphate, setPhosphate] = useState(0);
    const [oxygenSat, setOxygenSat] = useState(0);
    const [predictRes, setPredictRes] = useState(0);
    const handleClick = async () => {
        const payload = {
            water_salinity: waterSalinity,
            chlor_a_micrograms_per_l: chlorophyl,
            water_temp: waterTemp,
            o2_conc_milimeters_per_liter: oxygenConc,
            o2_sat: oxygenSat,
            potential_density: potentialDensity,
            phaeop_micrograms_per_l: phaeop,
            phosphate_micromoles_per_l: phosphate,
            silicate_micromoles_per_l: silicate,
            nitrite_micromoles_per_l: nitrite,
            nitrate_micromoles_per_l: nitrate,
            year_part: 2025,
            month_part_sin: 1,
            month_part_cos: 0,
        };

        try {
            const response = await fetch(
                `/api/proxy?selectedOption=${selectedOption}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            if (response.ok) {
                const result = await response.json();
                console.log("API Response:", result.prediction[0]);
                setPredictRes(result.prediction[0]);
                alert("Request was successful!");
            } else {
                console.error("Error:", response.statusText);
                alert("Failed to get a valid response!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while sending the request.");
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url("/assets/home_bawah.jpg")`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className="text-white"
        >
            <Navbar />
            <div className="w-full h-[400px] relative">
                <Image
                    src="/assets/pred-page.jpg"
                    alt="fog"
                    layout="fill"
                    objectFit="cover"
                />

                {/* Centered text */}
                <div className="absolute inset-0 flex items-center justify-center text-black text-7xl text-center z-10 font-bold">
                    <div>
                        Predict Ocean Water
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
                    <button
                        className="border-2 border-white text-white pr-12 pl-12 w-[280px] hover:bg-white hover:text-black transition-all duration-300 p-2"
                        onClick={scrollToBottom}
                    >
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
                        onChange={handleDropdownChange}
                        defaultValue=""
                    >
                        <option disabled value="">
                            Choose an option
                        </option>
                        <option value="waterSalinity">
                            Water Salinity (ppt)
                        </option>
                        <option value="chlorophyl">
                            {" "}
                            Chlorophyll-a (µg/L)
                        </option>
                        <option value="phosphate">Phosphate (µmol/L)</option>
                        <option value="oxygenConcentration">
                            Oxygen Concentration (mL/L)
                        </option>
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
                    <h1 className="text-white font-bold text-center">
                        Water Temperature (°C)
                    </h1>
                    <p className="text-white font-normal text-sm">
                        Typ: 10-30 (EZ), 5-10 (MZ), 0-5 (BZ), 0-2 (AZ), 0-1 (HZ)
                    </p>
                    <input
                        type="text"
                        value={waterTemp}
                        disabled
                        style={{
                            textAlign: "center",
                            width: "100%",
                            backgroundColor: "transparent",
                        }}
                        className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                    />
                    <Slider
                        defaultValue={0}
                        onChange={(e) => handleInputChange(setWaterTemp, e)}
                        maxValue={50}
                        minValue={-5}
                        step={1}
                    />
                </div>

                {selectedOption === "waterSalinity" && (
                    <>
                        <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                            <h1 className="text-white font-bold  text-center">
                                Chlorophyll-a (µg/L)
                            </h1>
                            <p className="text-white font-normal text-sm">
                                {" "}
                                Typ: 0.10-20 (EZ), 0.01-0.1 (MZ), 0-0.01 (BZ),
                                Near 0 (AZ & HZ)
                            </p>
                            <input
                                type="text"
                                value={waterSalinity}
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
                                onChange={(e) =>
                                    handleInputChange(setWaterSalinity, e)
                                }
                                label=""
                                maxValue={25}
                                minValue={0}
                                step={0.01}
                            />
                        </div>

                        <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                            <h1 className="text-white font-bold text-center">
                                Oxygen Concentration (mL/L)
                            </h1>
                            <p className="text-white font-normal text-sm">
                                Typ: 6-10 (EZ), 1-6 (MZ), 3-6 (BZ), 4-8 (AZ &
                                HZ)
                            </p>
                            <input
                                type="text"
                                value={oxygenConc}
                                disabled
                                style={{
                                    textAlign: "center",
                                    width: "100%",
                                    backgroundColor: "transparent",
                                }}
                                className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                            />
                            <Slider
                                defaultValue={0}
                                onChange={(e) =>
                                    handleInputChange(setOxygenConc, e)
                                }
                                maxValue={15}
                                minValue={0}
                                step={0.01}
                            />
                        </div>
                        <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                            <h1 className="text-white font-bold  text-center">
                                Phosphate (µmol/L)
                            </h1>
                            <p className="text-white font-normal text-sm">
                                {" "}
                                Typ: 0.1-1 (EZ), 1-2 (MZ), 2-3 (BZ), 4+ (AZ &
                                HZ)
                            </p>
                            <input
                                type="text"
                                value={phosphate}
                                disabled
                                style={{
                                    textAlign: "center",
                                    width: "100%",
                                    backgroundColor: "transparent",
                                }}
                                className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                            />

                            <Slider
                                defaultValue={0}
                                onChange={(e) =>
                                    handleInputChange(setPhosphate, e)
                                }
                                label=""
                                maxValue={6}
                                minValue={0}
                                step={0.001}
                            />
                        </div>
                    </>
                )}

                {selectedOption === "oxygenConcentration" && (
                    <>
                        <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                            <h1 className="text-white font-bold text-center">
                                Water Salinity (ppt)
                            </h1>
                            <p className="text-white font-normal text-sm">
                                Typ: 30-36 (EZ), 34-35.5 (MZ), 34.5-35 (BZ),
                                34.6-35 (AZ), 35+ (HZ)
                            </p>
                            <input
                                type="text"
                                value={waterSalinity}
                                disabled
                                style={{
                                    textAlign: "center",
                                    width: "100%",
                                    backgroundColor: "transparent",
                                }}
                                className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                            />
                            <Slider
                                defaultValue={0}
                                onChange={(e) =>
                                    handleInputChange(setWaterSalinity, e)
                                }
                                maxValue={45}
                                minValue={20}
                                step={0.01}
                            />
                        </div>
                        <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                            <h1 className="text-white font-bold  text-center">
                                Chlorophyll-a (µg/L)
                            </h1>
                            <p className="text-white font-normal text-sm">
                                {" "}
                                Typ: 0.10-20 (EZ), 0.01-0.1 (MZ), 0-0.01 (BZ),
                                Near 0 (AZ & HZ)
                            </p>
                            <input
                                type="text"
                                value={chlorophyl}
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
                                onChange={(e) =>
                                    handleInputChange(setChlorophyl, e)
                                }
                                label=""
                                maxValue={25}
                                minValue={0}
                                step={0.01}
                            />
                        </div>
                        <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                            <h1 className="text-white font-bold  text-center">
                                Phosphate (µmol/L)
                            </h1>
                            <p className="text-white font-normal text-sm">
                                {" "}
                                Typ: 0.1-1 (EZ), 1-2 (MZ), 2-3 (BZ), 4+ (AZ &
                                HZ)
                            </p>
                            <input
                                type="text"
                                value={phosphate}
                                disabled
                                style={{
                                    textAlign: "center",
                                    width: "100%",
                                    backgroundColor: "transparent",
                                }}
                                className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                            />

                            <Slider
                                defaultValue={0}
                                onChange={handleSliderChange}
                                label=""
                                maxValue={6}
                                minValue={0}
                                step={0.001}
                            />
                        </div>
                    </>
                )}

                <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
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
                        value={potentialDensity}
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
                        onChange={(e) =>
                            handleInputChange(setPotentialDensity, e)
                        }
                        label=""
                        maxValue={35}
                        minValue={15}
                        step={0.01}
                    />
                </div>

                {selectedOption === "chlorophyl" && (
                    <>
                        <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                            <h1 className="text-white font-bold text-center">
                                Water Salinity (ppt)
                            </h1>
                            <p className="text-white font-normal text-sm">
                                Typ: 30-36 (EZ), 34-35.5 (MZ), 34.5-35 (BZ),
                                34.6-35 (AZ), 35+ (HZ)
                            </p>
                            <input
                                type="text"
                                value={waterSalinity}
                                disabled
                                style={{
                                    textAlign: "center",
                                    width: "100%",
                                    backgroundColor: "transparent",
                                }}
                                className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                            />
                            <Slider
                                defaultValue={20}
                                onChange={(e) =>
                                    handleInputChange(setWaterSalinity, e)
                                }
                                maxValue={45}
                                minValue={20}
                                step={0.01}
                            />
                        </div>
                        <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                            <h1 className="text-white font-bold  text-center">
                                Phosphate (µmol/L)
                            </h1>
                            <p className="text-white font-normal text-sm">
                                {" "}
                                Typ: 0.1-1 (EZ), 1-2 (MZ), 2-3 (BZ), 4+ (AZ &
                                HZ)
                            </p>
                            <input
                                type="text"
                                value={value}
                                disabled
                                style={{
                                    textAlign: "center",
                                    width: "100%",
                                    backgroundColor: "transparent",
                                }}
                                className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                            />

                            <Slider
                                defaultValue={0}
                                onChange={handleSliderChange}
                                label=""
                                maxValue={6}
                                minValue={0}
                                step={0.001}
                            />
                        </div>
                        <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                            <h1 className="text-white font-bold text-center">
                                Oxygen Concentration (mL/L)
                            </h1>
                            <p className="text-white font-normal text-sm">
                                Typ: 6-10 (EZ), 1-6 (MZ), 3-6 (BZ), 4-8 (AZ &
                                HZ)
                            </p>
                            <input
                                type="text"
                                value={oxygenConc}
                                disabled
                                style={{
                                    textAlign: "center",
                                    width: "100%",
                                    backgroundColor: "transparent",
                                }}
                                className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                            />
                            <Slider
                                defaultValue={0}
                                onChange={(e) =>
                                    handleInputChange(setOxygenConc, e)
                                }
                                maxValue={15}
                                minValue={0}
                                step={0.01}
                            />
                        </div>
                    </>
                )}

                <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                    <h1 className="text-white font-bold  text-center">
                    Phaeopigments (µg/L)
                    </h1>
                    <p className="text-white font-normal text-sm">
                        {" "}
                        Typ: 0-5 (EZ), 0-1 (MZ), Near 0 (BZ & AZ & HZ)
                    </p>
                    <input
                        type="text"
                        value={phaeop}
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
                        onChange={(e) => handleInputChange(setPhaeop, e)}
                        label=""
                        maxValue={15}
                        minValue={0}
                        step={0.01}
                    />
                </div>

                {selectedOption === "phosphate" && (
                    <>
                        <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                            <h1 className="text-white font-bold text-center">
                                Water Salinity (ppt)
                            </h1>
                            <p className="text-white font-normal text-sm">
                                Typ: 30-36 (EZ), 34-35.5 (MZ), 34.5-35 (BZ),
                                34.6-35 (AZ), 35+ (HZ)
                            </p>
                            <input
                                type="text"
                                value={waterSalinity}
                                disabled
                                style={{
                                    textAlign: "center",
                                    width: "100%",
                                    backgroundColor: "transparent",
                                }}
                                className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                            />
                            <Slider
                                defaultValue={0}
                                onChange={(e) =>
                                    handleInputChange(setWaterSalinity, e)
                                }
                                maxValue={50}
                                minValue={0}
                                step={0.01}
                            />
                        </div>
                        <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                            <h1 className="text-white font-bold  text-center">
                                Chlorophyll-a (µg/L)
                            </h1>
                            <p className="text-white font-normal text-sm">
                                {" "}
                                Typ: 0.10-20 (EZ), 0.01-0.1 (MZ), 0-0.01 (BZ),
                                Near 0 (AZ & HZ)
                            </p>
                            <input
                                type="text"
                                value={chlorophyl}
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
                                onChange={(e) =>
                                    handleInputChange(setChlorophyl, e)
                                }
                                label=""
                                maxValue={25}
                                minValue={0}
                                step={0.01}
                            />
                        </div>

                        <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                            <h1 className="text-white font-bold text-center">
                                Oxygen Concentration (mL/L)
                            </h1>
                            <p className="text-white font-normal text-sm">
                                Typ: 6-10 (EZ), 1-6 (MZ), 3-6 (BZ), 4-8 (AZ &
                                HZ)
                            </p>
                            <input
                                type="text"
                                value={oxygenConc}
                                disabled
                                style={{
                                    textAlign: "center",
                                    width: "100%",
                                    backgroundColor: "transparent",
                                }}
                                className="rounded-none text-white border-2 p-1 pt-3 pb-3"
                            />
                            <Slider
                                defaultValue={0}
                                onChange={(e) =>
                                    handleInputChange(setOxygenConc, e)
                                }
                                maxValue={15}
                                minValue={0}
                                step={0.01}
                            />
                        </div>
                    </>
                )}

                <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                    <h1 className="text-white font-bold  text-center">
                        Silicate (µmol/L)
                    </h1>
                    <p className="text-white font-normal text-sm">
                        {" "}
                        Typ: 1-5 (EZ), 5-50 (MZ), 50-100 (BZ), 100+ (AZ & HZ)
                    </p>
                    <input
                        type="text"
                        value={silicate}
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
                        onChange={(e) => handleInputChange(setSilicate, e)}
                        label=""
                        maxValue={125}
                        minValue={0}
                        step={1}
                    />
                </div>

                <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                    <h1 className="text-white font-bold  text-center">
                        Nitrite (µmol/L)
                    </h1>
                    <p className="text-white font-normal text-sm">
                        {" "}
                        Typ: 0-0.5 (EZ), 0.5-1 (MZ), 0-0.5 (BZ & AZ & HZ)
                    </p>
                    <input
                        type="text"
                        value={nitrite}
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
                        onChange={(e) => handleInputChange(setNitrite, e)}
                        label=""
                        maxValue={1.5}
                        minValue={0}
                        step={0.0001}
                    />
                </div>

                <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                    <h1 className="text-white font-bold  text-center">
                        Nitrate (µmol/L)
                    </h1>
                    <p className="text-white font-normal text-sm">
                        {" "}
                        Typ: 0-5 (EZ), 5-20 (MZ), 2-30 (BZ), 30+ (AZ & HZ)
                    </p>
                    <input
                        type="text"
                        value={nitrate}
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
                        onChange={(e) => handleInputChange(setNitrate, e)}
                        label=""
                        maxValue={40}
                        minValue={0}
                        step={0.01}
                    />
                </div>

                <div className="flex text-black flex-col gap-2 mt-20 w-[50%]">
                    <h1 className="text-white font-bold  text-center">
                        Saturasi Oksigen (%)
                    </h1>
                    <p className="text-white font-normal text-sm">
                        {" "}
                        Typ: 90-100 (EZ), 20-90 (MZ), 0 -20 (BZ & AZ & HZ)
                    </p>
                    <input
                        type="text"
                        value={oxygenSat}
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
                        onChange={(e) => handleInputChange(setOxygenSat, e)}
                        label=""
                        maxValue={110}
                        minValue={0}
                        step={0.01}
                    />
                </div>

                <div className="mt-2 mb-24">
                    <button
                        className="border-2 border-white text-white pr-12 pl-12 w-[280px] hover:bg-white hover:text-black transition-all duration-300 p-2 mt-24 "
                        onClick={handleClick}
                    >
                        GET PREDICTION
                    </button>
                </div>

                <h2>Your Results Are</h2>
                <div className="mt-2 mb-24">
                    <div className="border-2 border-white text-white pr-14 pl-14 w-[280px] p-2 pt-10 pb-10">
                        {predictRes}
                    </div>
                </div>
                <p>You are mostlikely </p>

                <div className="flex justify-center p-4">
                    <div className=" text-white p-6 w-[80%] md:w-[60%]">
                        {/* Card content */}
                        <h3 className="text-xl font-semibold text-center">
                            How It Works
                        </h3>
                        <p className="mt-4 text-center text-xl font-thin">
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
                        <h3 className="text-3xl font-semibold text-center">
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
