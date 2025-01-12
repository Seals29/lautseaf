import Image from "next/image";
import "../app/globals.css";

export default function Navbar() {
    return (
        <div
            className="top-0 left-0 w-full p-4 shadow-md z-50"
            style={{
                fontFamily: "Poppins",
                backgroundColor: "rgba(22, 41, 82, 0.88)",
                color: "white",
            }}
        >
            {/* Navbar Container */}
            <div className="flex justify-between items-center w-full">
                {/* Logo Section */}
                <div>
                    <a href="/" className="text-lg font-semibold">
                        <Image
                            src="/assets/SeaMatrixLogo.png"
                            alt="Logo"
                            width={300}
                            height={100}
                        />
                    </a>
                </div>

                {/* Menu Items */}
                <div className="flex space-x-8 gap-5 pl-10">
                    <a href="/predict" className="text-lg font-semibold">
                        Prediction Tool
                    </a>
                    <a href="/learn" className="text-lg font-semibold">
                        Learn the Ocean
                    </a>
                    <a href="/about" className="text-lg font-semibold">
                        About SeaMatrix
                    </a>
                </div>
            </div>
        </div>
    );
}
