"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SheetWrapper from "./ui/SheetWrapper";
import { SheetClose } from "./ui/sheet";
import { navigationLinks } from "../data";
import logo from "@/public/Icons/hermes-logo.png";
import Image from "next/image";

export default function Navbar() {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 600) {
      } else if (window.scrollY >= 20) {
        setBackgroundColor("rgb(18 18 18 / 0.95)");
      } else {
        setBackgroundColor("transparent");
      }
    };

    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div
      className='fixed right-0 left-0 px-5 transition-all ease-in-out duration-500 z-50'
      style={{ backgroundColor: backgroundColor }}
    >
      <div className='py-5 container mx-auto flex justify-between items-center'>
        <div>
          <Link href='/' className='font-bold flex gap-2 items-center'>
            <Image src={logo} alt='Hermes Logo' className='w-14' />
            Hermes Guidance
          </Link>
        </div>
        <div className='hidden lg:flex gap-14 mr-20 xl:mr-40 font-semibold items-center'>
          {navigationLinks.map((item) => {
            return (
              <Link href={item.link} key={item.id}>
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className='block lg:hidden'>
          <SheetWrapper
            ButtonTrigger={
              <div className='hover:scale-110 transition-all ease-in-out duration-500  flex flex-col items-end gap-1 lg:hidden cursor-pointer z-40'>
                <div className='h-0.5 w-6  rounded-full bg-white' />
                <div className='h-0.5 w-8  rounded-full bg-white' />
                <div className='h-0.5 w-4  rounded-full bg-white' />
              </div>
            }
          >
            <div className='flex flex-col gap-10 items-center justify-center mt-10'>
              <ul className='flex flex-col gap-12 items-center '>
                {navigationLinks.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className='text-base font-semibold uppercase text-center'
                    >
                      <SheetClose asChild>
                        <a href={item.link}>{item.title}</a>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>
            </div>
          </SheetWrapper>
        </div>
      </div>
    </div>
  );
}
