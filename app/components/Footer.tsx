import React from "react";
import { footerLinks } from "../data";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/Icons/hermes-logo.png";

export default function Footer() {
  return (
    <div className='bg-gray py-14'>
      <div className='container mx-auto'>
        <div className='grid gap-5 lg:gap-0 lg:grid-cols-2 lg:w-3/4 mx-auto'>
          <div className='flex items-center justify-center lg:justify-start'>
            <Link href='/' className='font-bold flex gap-2 items-center'>
              <Image src={logo} alt='Hermes Logo' className='w-14' />
              Hermes Guidance
            </Link>
          </div>
          <div className='flex items-center gap-10 justify-center'>
            {footerLinks.map((item) => {
              return (
                <Link href={item.link} key={item.id} className='font-semibold'>
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
