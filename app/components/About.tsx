import React from "react";
import { Container } from "./Container";
import { AppFeatures } from "../data";
import Image from "next/image";

export default function About() {
  return (
    <Container id='about'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center lg:w-2/4 mx-auto'>
        Hermes Guidance: Your Path, Your Way, Every Day.
      </h2>
      <p className='lg:text-lg mt-5 text-center lg:w-3/4 mx-auto'>
        Hermes Guidance is your ultimate travel companion, designed to simplify
        your journeys and prioritize your safety. Whether you&apos;re navigating
        through a busy city, exploring new destinations, or ensuring peace of
        mind during emergencies, Hermes Guidance has you covered.
      </p>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
        {AppFeatures.map((item) => {
          return (
            <div
              key={item.id}
              className='flex flex-col items-center text-center'
            >
              <div className='rounded-full bg-gray w-20 h-20 flex items-center justify-center'>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={30}
                  height={30}
                />
              </div>
              <div className='mt-5'>
                <h3 className='text-lg lg:text-xl mb-2 font-medium'>
                  {item.title}
                </h3>
                <p className='text-white/90 text-sm md:text-base'>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
