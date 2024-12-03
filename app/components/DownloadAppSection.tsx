import React from "react";
import Image from "next/image";
import phoneMockupHalf from "@/public/phone-mockup-half.png";
import QrCanvas from "./ui/QrCanvas";

export default function DownloadAppSection() {
  return (
    <div className='bg-gray rounded-3xl mt-2 '>
      <div className='container mx-auto px-5 pt-16 sm:pt-20 lg:pt-16 2xl:pt-32  2xl:px-0 text-white'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center lg:w-2/4 mx-auto'>
          Scan To Download Hermes Guidance App
        </h2>
        <div className='w-56 md:w-96 mx-auto mt-5 lg:mt-10 relative'>
          <Image src={phoneMockupHalf} alt='phone mockup' className='w-full' />
          <QrCanvas />
        </div>
      </div>
    </div>
  );
}
