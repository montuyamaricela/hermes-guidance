import React from "react";
import { Container } from "./Container";
import { TeamProfile } from "../data";
import Image from "next/image";

export default function Team() {
  return (
    <Container id='contact'>
      <div className='lg:w-3/4 mx-auto text-center'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center'>
          Meet the Team
        </h2>
        <div className='mt-3 lg:mt-5 mb-2 lg:w-3/4 mx-auto space-y-2'>
          <p>
            Hermes Guidance is the result of a collaborative effort by a
            dedicated team of students working on this capstone project. We
            combined our skills in technology, design, and problem-solving to
            create an app that simplifies navigation while prioritizing safety
            for all users.
          </p>
          <p>
            Each team member brought a unique perspective to the project,
            ensuring that Hermes Guidance is not only functional but also
            intuitive and user-friendly. Our goal was to create a solution that
            addresses real-world travel challenges and provides peace of mind in
            every journey.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-5 lg:grid-cols-4 lg:w-3/4 mx-auto mt-10'>
        {TeamProfile.map((item) => {
          return (
            <div
              key={item.id}
              className='flex flex-col items-center justify-center text-center'
            >
              <Image src={item.img} alt={item.name} className='w-32 md:w-44' />
              <div className='mt-5'>
                <h3 className='lg:text-lg font-medium'>{item.name}</h3>
                <p>{item.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
