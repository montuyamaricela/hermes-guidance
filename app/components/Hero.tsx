import Image from "next/image";
import React from "react";
import phoneMockUp from "@/public/phone-mockup.png";
import heroImage from "@/public/hero-image.png";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
export default function Hero() {
  return (
    <div className='grid lg:grid-cols-2 gap-2 lg:h-screen bg-gray lg:bg-transparent py-24  lg:p-0'>
      <div className='flex lg:hidden'>
        <Image src={phoneMockUp} alt='Phone mockup' className='w-44 mx-auto' />
      </div>
      <div className='lg:rounded-3xl lg:bg-gray flex flex-col justify-center mt-5 lg:mt-0'>
        <div className='mx-5 md:w-3/4 md:mx-auto'>
          <h1 className='text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-bold'>
            Navigate the Smart Way – Discover Hermes Guidance
          </h1>
          <p className='lg:text-lg my-3 lg:my-5'>
            Hermes Guidance simplifies your journeys and ensures your safety
            with smart navigation and emergency-ready features. Whether
            exploring new places or navigating daily routes, Hermes has you
            covered.
          </p>
          <Button className='hover:scale-105 transition-all ease-in-out duration-500 uppercase rounded-full border p-5 border-white/50 bg-transparent'>
            Download The App{" "}
            <span className='bg-white rounded-full h-6 w-6 text-black flex items-center justify-center'>
              <ArrowUpRight className='m-auto' />
            </span>
          </Button>
        </div>
      </div>
      <div
        className='w-full rounded-3xl bg-no-repeat bg-cover hidden lg:flex items-center justify-center'
        style={{ backgroundImage: `url('${heroImage.src}')` }}
      >
        <Image src={phoneMockUp} alt='Phone mockup' className='w-44 lg:w-72' />
      </div>
    </div>
  );
}
