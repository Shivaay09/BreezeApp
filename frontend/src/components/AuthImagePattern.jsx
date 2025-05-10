"use client";
import { World } from "Globe.jsx"; // Adjust this import path to where your Globe file is located

const AuthImagePattern = ({ title, subtitle, globeConfig, globeData }) => {
    return (
        <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
            <div className="w-full h-full max-w-2xl aspect-square relative">
                <World globeConfig={globeConfig} data={globeData} />
                <div className="absolute bottom-0 left-0 w-full text-center bg-base-200/80 backdrop-blur-md py-6 px-4">
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    <p className="text-base-content/60">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default AuthImagePattern;
