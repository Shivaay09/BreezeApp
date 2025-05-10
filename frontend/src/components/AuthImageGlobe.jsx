"use client";
import React from "react";
import { GlobeDemo } from "./GridGlobe";
import {TextGenerateEffect} from "./TextGenerateEffect.jsx"; // adjust path if needed

const AuthImageGlobe = () => {
    return (
        <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
            <div className="w-full max-w-2xl aspect-square relative h-1">
                <div className="absolute inset-0">
                    <GlobeDemo />
                </div>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mt-32'>
                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-3xl"
                        words="Join our Worldwide Community"
                    />
                </div>
            </div>
        </div>
    );
};

export default React.memo(AuthImageGlobe);
